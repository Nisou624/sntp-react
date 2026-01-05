// src/utils/markdownHelper.js
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const API_BASE_URL = "http://localhost:5000"

marked.setOptions({
  breaks: true, // Convertir les retours à la ligne
  gfm: true, // GitHub Flavored Markdown
  headerIds: true,
  mangle: false,
  sanitize: false // On sanitize après avec DOMPurify
});

/**
 * Détecte si le contenu est du Markdown ou du HTML
 */
export const isMarkdown = (content) => {
  if (!content) return false;
  
  // Indicateurs de Markdown
  const markdownIndicators = [
    /^#{1,6}\s/m, // Headers: # ## ###
    /\*\*.*\*\*/,  // Bold: **text**
    /__.*__/,      // Bold: __text__
    /\*.*\*/,      // Italic: *text*
    /_.*_/,        // Italic: _text_
    /^\s*[-*+]\s/m, // Liste: - * +
    /^\s*\d+\.\s/m, // Liste numérotée: 1. 2.
    /\[.*\]\(.*\)/, // Liens: [text](url)
    /^>\s/m,       // Citations: >
    /`{1,3}.*`{1,3}/, // Code: ` ou ```
  ];
  
  // Si contient des balises HTML, ce n'est probablement pas du Markdown pur
  if (/<\/?[a-z][\s\S]*>/i.test(content)) {
    return false;
  }
  
  // Vérifier si contient des indicateurs Markdown
  return markdownIndicators.some(pattern => pattern.test(content));
};

/**
 * Convertit Markdown en HTML
 */
export const markdownToHtml = (markdown) => {
  if (!markdown) return '';
  
  try {
    // Convertir Markdown en HTML
    const html = marked.parse(markdown);
    
    // Sanitizer le HTML pour la sécurité
    const clean = DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 's', 'a', 
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li', 
        'blockquote', 'code', 'pre',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'img', 'hr', 'div', 'span'
      ],
      ALLOWED_ATTR: [
        'href', 'target', 'rel', 'src', 'alt', 'title',
        'class', 'id'
      ]
    });
    
    return clean;
  } catch (error) {
    console.error('Erreur conversion Markdown:', error);
    return markdown;
  }
};

/**
 * Prepares content for display:
 * 1. Converts MD to HTML
 * 2. Rewrites Image URLs to point to Backend
 * 3. Sanitizes HTML
 */
export const prepareContent = (content) => {
  if (!content) return '';
  
  // 1. Convert to HTML if necessary
  let html = isMarkdown(content) ? markdownToHtml(content) : content;
  
  // 2. Add Hook to rewrite relative image paths before sanitizing
  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    if (node.tagName === 'IMG' && node.hasAttribute('src')) {
      const src = node.getAttribute('src');
      
      // Check if path is relative (starts with /api or just /)
      // and does NOT already include http (is not absolute)
      if (src && src.startsWith('/') && !src.startsWith('http')) {
        
        // Remove trailing slash from base URL if present to avoid double slash
        const baseUrl = API_BASE_URL.endsWith('/') 
          ? API_BASE_URL.slice(0, -1) 
          : API_BASE_URL;
          
        node.setAttribute('src', `${baseUrl}${src}`);
      }
    }
  });

  // 3. Sanitize
  return DOMPurify.sanitize(html, {
    ADD_TAGS: ['iframe', 'img', 'table', 'tbody', 'tr', 'td', 'th', 'br', 'p', 'span', 'div'],
    ADD_ATTR: ['src', 'alt', 'class', 'style', 'target', 'href', 'title', 'width', 'height'],
    FORBID_TAGS: ['script', 'style'],
  });
};


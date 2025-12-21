// src/utils/markdownHelper.js
import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Configuration de marked
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
 * Prépare le contenu pour l'affichage (détecte et convertit si nécessaire)
 */
export const prepareContent = (content) => {
  if (!content) return '';
  
  // Si c'est du Markdown, convertir en HTML
  if (isMarkdown(content)) {
    return markdownToHtml(content);
  }
  
  // Sinon, juste sanitizer le HTML
  return DOMPurify.sanitize(content);
};


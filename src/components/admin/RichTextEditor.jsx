// src/components/admin/RichTextEditor.jsx - VERSION SNTP AVEC UPLOAD
import React, { useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import Placeholder from '@tiptap/extension-placeholder';
import Dropcursor from '@tiptap/extension-dropcursor';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { 
  FaBold, FaItalic, FaUnderline, FaStrikethrough, FaCode, 
  FaListUl, FaListOl, FaQuoteLeft, FaLink, 
  FaImage, FaTable, FaHighlighter, FaUndo, FaRedo,
  FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify,
  FaUpload
} from 'react-icons/fa';
import { uploadContentImage, isValidImageFile, isValidImageSize } from '../../services/imageUploadService';
import './RichTextEditor.css';

const RichTextEditor = ({ value, onChange, className, placeholder = 'Commencez à écrire... Utilisez # pour les titres, ** pour le gras...' }) => {
  const fileInputRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        blockquote: {
          HTMLAttributes: {
            class: 'sntp-blockquote',
          },
        },
        codeBlock: {
          HTMLAttributes: {
            class: 'sntp-code-block',
          },
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
          class: 'sntp-link',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'sntp-image',
        },
        inline: true,
      }),
      Dropcursor.configure({
        color: '#c8102e',
        width: 3,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Color,
      Underline,
      Highlight.configure({
        multicolor: true,
      }),
      Typography,
      Placeholder.configure({
        placeholder,
        showOnlyWhenEditable: true,
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'sntp-table',
        },
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value || '',
    editorProps: {
      attributes: {
        class: 'sntp-editor-content',
      },
      // Gérer le drop d'images
      handleDrop: (view, event, slice, moved) => {
        if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
          const file = event.dataTransfer.files[0];
          
          if (isValidImageFile(file)) {
            event.preventDefault();
            handleImageUpload(file);
            return true;
          }
        }
        return false;
      },
      // Gérer le paste d'images
      handlePaste: (view, event, slice) => {
        const items = Array.from(event.clipboardData?.items || []);
        const imageItem = items.find(item => item.type.startsWith('image/'));
        
        if (imageItem) {
          event.preventDefault();
          const file = imageItem.getAsFile();
          if (file) {
            handleImageUpload(file);
          }
          return true;
        }
        return false;
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '');
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  const setHeading = (level) => {
    editor.chain().focus().toggleHeading({ level }).run();
  };

  // Upload d'image
  const handleImageUpload = async (file) => {
    if (!file) return;

    // Validation
    if (!isValidImageFile(file)) {
      alert('Format de fichier non supporté. Utilisez JPG, PNG, GIF ou WebP.');
      return;
    }

    if (!isValidImageSize(file)) {
      alert('La taille du fichier ne doit pas dépasser 5MB.');
      return;
    }

    try {
      // Afficher un loader
      editor.chain().focus().insertContent({
        type: 'paragraph',
        content: [{ type: 'text', text: '⏳ Upload en cours...' }]
      }).run();

      // Upload
      const imageUrl = await uploadContentImage(file);

      // Supprimer le message de chargement et insérer l'image
      editor.chain()
        .focus()
        .deleteNode('paragraph')
        .setImage({ src: imageUrl })
        .run();

    } catch (error) {
      console.error('Erreur upload:', error);
      alert('Erreur lors de l\'upload de l\'image. Veuillez réessayer.');
      // Supprimer le message de chargement
      editor.chain().focus().deleteNode('paragraph').run();
    }
  };

  const addImageFromFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
    // Reset input
    e.target.value = '';
  };

  const addImageFromUrl = () => {
    const url = window.prompt('URL de l\'image:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL du lien:', previousUrl);

    if (url === null) return;

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const setHighlight = () => {
    editor.chain().focus().toggleHighlight({ color: '#fff9c4' }).run();
  };

  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const deleteTable = () => {
    editor.chain().focus().deleteTable().run();
  };

  const addColumnBefore = () => {
    editor.chain().focus().addColumnBefore().run();
  };

  const addColumnAfter = () => {
    editor.chain().focus().addColumnAfter().run();
  };

  const deleteColumn = () => {
    editor.chain().focus().deleteColumn().run();
  };

  const addRowBefore = () => {
    editor.chain().focus().addRowBefore().run();
  };

  const addRowAfter = () => {
    editor.chain().focus().addRowAfter().run();
  };

  const deleteRow = () => {
    editor.chain().focus().deleteRow().run();
  };

  return (
    <div className={`sntp-editor-wrapper ${className || ''}`}>
      {/* Input caché pour l'upload de fichiers */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />

      {/* TOOLBAR PRINCIPALE */}
      <div className="sntp-toolbar">
        {/* Groupe Titres */}
        <div className="toolbar-group">
          <select
            onChange={(e) => {
              const level = parseInt(e.target.value);
              if (level) {
                setHeading(level);
              } else {
                editor.chain().focus().setParagraph().run();
              }
              e.target.value = '';
            }}
            className="heading-select"
            defaultValue=""
          >
            <option value="">Texte normal</option>
            <option value="1">📝 Titre 1</option>
            <option value="2">📝 Titre 2</option>
            <option value="3">📝 Titre 3</option>
            <option value="4">📝 Titre 4</option>
            <option value="5">📝 Titre 5</option>
            <option value="6">📝 Titre 6</option>
          </select>
        </div>

        <div className="toolbar-separator"></div>

        {/* Groupe Formatage */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
            title="Gras (Ctrl+B)"
          >
            <FaBold />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
            title="Italique (Ctrl+I)"
          >
            <FaItalic />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}
            title="Souligné (Ctrl+U)"
          >
            <FaUnderline />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
            title="Barré"
          >
            <FaStrikethrough />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={editor.isActive('code') ? 'is-active' : ''}
            title="Code inline"
          >
            <FaCode />
          </button>
        </div>

        <div className="toolbar-separator"></div>

        {/* Groupe Alignement */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
            title="Aligner à gauche"
          >
            <FaAlignLeft />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
            title="Centrer"
          >
            <FaAlignCenter />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
            title="Aligner à droite"
          >
            <FaAlignRight />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
            title="Justifier"
          >
            <FaAlignJustify />
          </button>
        </div>

        <div className="toolbar-separator"></div>

        {/* Groupe Listes */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
            title="Liste à puces"
          >
            <FaListUl />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
            title="Liste numérotée"
          >
            <FaListOl />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'is-active' : ''}
            title="Citation"
          >
            <FaQuoteLeft />
          </button>
        </div>

        <div className="toolbar-separator"></div>

        {/* Groupe Insertion */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={addLink}
            className={editor.isActive('link') ? 'is-active' : ''}
            title="Insérer un lien"
          >
            <FaLink />
          </button>
          
          {/* Bouton Image avec menu déroulant */}
          <div className="dropdown-wrapper">
            <button
              type="button"
              className="dropdown-trigger"
              title="Insérer une image"
            >
              <FaImage />
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className="dropdown-menu">
              <button type="button" onClick={addImageFromFile} className="dropdown-item">
                <FaUpload /> Importer depuis PC
              </button>
              <button type="button" onClick={addImageFromUrl} className="dropdown-item">
                <FaLink /> Depuis une URL
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={insertTable}
            title="Insérer un tableau"
          >
            <FaTable />
          </button>
        </div>

        <div className="toolbar-separator"></div>

        {/* Groupe Style */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={setHighlight}
            className={editor.isActive('highlight') ? 'is-active' : ''}
            title="Surbrillance"
          >
            <FaHighlighter />
          </button>
        </div>

        <div className="toolbar-separator"></div>

        {/* Groupe Annuler/Refaire */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="Annuler (Ctrl+Z)"
          >
            <FaUndo />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="Refaire (Ctrl+Y)"
          >
            <FaRedo />
          </button>
        </div>

        {/* Contrôles de tableau */}
        {editor.isActive('table') && (
          <>
            <div className="toolbar-separator"></div>
            <div className="toolbar-group table-controls">
              <button type="button" onClick={addColumnBefore} title="Colonne avant">⬅️+</button>
              <button type="button" onClick={addColumnAfter} title="Colonne après">+➡️</button>
              <button type="button" onClick={deleteColumn} title="Supprimer colonne">❌|</button>
              <button type="button" onClick={addRowBefore} title="Ligne avant">⬆️+</button>
              <button type="button" onClick={addRowAfter} title="Ligne après">+⬇️</button>
              <button type="button" onClick={deleteRow} title="Supprimer ligne">❌―</button>
              <button type="button" onClick={deleteTable} title="Supprimer tableau" className="danger">❌📊</button>
            </div>
          </>
        )}
      </div>

      {/* ÉDITEUR */}
      <EditorContent editor={editor} className="sntp-editor" />

      {/* AIDE RACCOURCIS */}
      <div className="sntp-help">
        <div className="help-section">
          <strong>Markdown:</strong>
          <span className="help-item"><code>#</code> Titre</span>
          <span className="help-item"><code>**gras**</code></span>
          <span className="help-item"><code>*italique*</code></span>
          <span className="help-item"><code>`code`</code></span>
          <span className="help-item"><code>- liste</code></span>
        </div>
        <div className="help-section">
          <strong>Images:</strong>
          <span className="help-text">Glissez-déposez ou collez directement vos images</span>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;


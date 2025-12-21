// src/components/admin/RichTextEditor.jsx - CORRECTION DES IMPORTS
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Table } from '@tiptap/extension-table'; // ✅ CORRECTION: Import nommé
import { TableRow } from '@tiptap/extension-table-row'; // ✅ CORRECTION: Import nommé
import { TableCell } from '@tiptap/extension-table-cell'; // ✅ CORRECTION: Import nommé
import { TableHeader } from '@tiptap/extension-table-header'; // ✅ CORRECTION: Import nommé
import './RichTextEditor.css';

const RichTextEditor = ({ value, onChange, className }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'editor-image',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Color,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  if (!editor) {
    return <div className="editor-loading">Chargement de l'éditeur...</div>;
  }

  const addImage = () => {
    const url = window.prompt('URL de l\'image:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL du lien:', previousUrl);

    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const setColor = () => {
    const color = window.prompt('Couleur (hex, rgb ou nom):', '#000000');
    if (color) {
      editor.chain().focus().setColor(color).run();
    }
  };

  // ✅ FONCTIONS POUR LES TABLEAUX
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
    <div className={`tiptap-editor-wrapper ${className || ''}`}>
      <div className="tiptap-toolbar">
        {/* Titres */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            title="Titre 1"
          >
            H1
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            title="Titre 2"
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            title="Titre 3"
          >
            H3
          </button>
        </div>

        {/* Formatage texte */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
            title="Gras"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
            title="Italique"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
            title="Barré"
          >
            <s>S</s>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={editor.isActive('code') ? 'is-active' : ''}
            title="Code"
          >
            {'<>'}
          </button>
        </div>

        {/* Alignement */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
            title="Aligner à gauche"
          >
            ⬅
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
            title="Centrer"
          >
            ↔
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
            title="Aligner à droite"
          >
            ➡
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
            title="Justifier"
          >
            ⬌
          </button>
        </div>

        {/* Listes */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
            title="Liste à puces"
          >
            •••
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
            title="Liste numérotée"
          >
            1. 2. 3.
          </button>
        </div>

        {/* Liens et images */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={addLink}
            className={editor.isActive('link') ? 'is-active' : ''}
            title="Ajouter un lien"
          >
            🔗
          </button>
          <button
            type="button"
            onClick={addImage}
            title="Ajouter une image"
          >
            🖼️
          </button>
        </div>

        {/* Citation et ligne */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'is-active' : ''}
            title="Citation"
          >
            "
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Ligne horizontale"
          >
            ―
          </button>
        </div>

        {/* ✅ TABLEAUX */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={insertTable}
            title="Insérer un tableau"
          >
            📊
          </button>
          {editor.isActive('table') && (
            <>
              <button
                type="button"
                onClick={addColumnBefore}
                title="Ajouter colonne avant"
              >
                ⬅️+
              </button>
              <button
                type="button"
                onClick={addColumnAfter}
                title="Ajouter colonne après"
              >
                +➡️
              </button>
              <button
                type="button"
                onClick={deleteColumn}
                title="Supprimer colonne"
              >
                ❌|
              </button>
              <button
                type="button"
                onClick={addRowBefore}
                title="Ajouter ligne avant"
              >
                ⬆️+
              </button>
              <button
                type="button"
                onClick={addRowAfter}
                title="Ajouter ligne après"
              >
                +⬇️
              </button>
              <button
                type="button"
                onClick={deleteRow}
                title="Supprimer ligne"
              >
                ❌―
              </button>
              <button
                type="button"
                onClick={deleteTable}
                title="Supprimer tableau"
              >
                ❌📊
              </button>
            </>
          )}
        </div>

        {/* Couleur */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={setColor}
            title="Couleur du texte"
          >
            🎨
          </button>
        </div>

        {/* Annuler/Refaire */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="Annuler"
          >
            ↶
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="Refaire"
          >
            ↷
          </button>
        </div>
      </div>

      <EditorContent editor={editor} className="tiptap-content" />
    </div>
  );
};

export default RichTextEditor;


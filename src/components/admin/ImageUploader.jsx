// src/components/admin/ImageUploader.jsx
import React, { useState, useRef } from 'react';
import { uploadImage } from '../../services/imageService';
import { toast } from 'react-toastify';
import { FaUpload, FaImage, FaTimes, FaSpinner } from 'react-icons/fa';
import './ImageUploader.css';

const ImageUploader = ({ currentImageId, currentImageUrl, onImageUploaded, onImageRemoved }) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImageUrl || null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Gérer la sélection de fichier
  const handleFileSelect = async (file) => {
    if (!file) return;

    // Vérifier le type
    if (!file.type.startsWith('image/')) {
      toast.error('Veuillez sélectionner une image');
      return;
    }

    // Vérifier la taille (5MB max)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error('Image trop volumineuse (max 5MB)');
      return;
    }

    // Créer un aperçu local
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);

    // Upload l'image
    try {
      setUploading(true);
      const response = await uploadImage(file);
      
      toast.success('Image uploadée avec succès');
      
      // Notifier le parent
      if (onImageUploaded) {
        onImageUploaded(response.data);
      }
    } catch (error) {
      toast.error(error.message || 'Erreur lors de l\'upload');
      setPreview(currentImageUrl || null);
    } finally {
      setUploading(false);
    }
  };

  // Gérer le changement d'input
  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  // Gérer le drag & drop
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  // Supprimer l'image
  const handleRemove = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onImageRemoved) {
      onImageRemoved();
    }
  };

  return (
    <div className="image-uploader">
      {preview ? (
        <div className="image-preview-container">
          <img src={preview} alt="Aperçu" className="image-preview" />
          <div className="image-overlay">
            <button
              type="button"
              onClick={handleRemove}
              className="btn-remove-image"
              title="Supprimer l'image"
            >
              <FaTimes />
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="btn-change-image"
              title="Changer l'image"
            >
              <FaUpload /> Changer
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`upload-zone ${dragActive ? 'drag-active' : ''} ${uploading ? 'uploading' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          {uploading ? (
            <>
              <FaSpinner className="upload-icon spinning" />
              <p>Upload en cours...</p>
            </>
          ) : (
            <>
              <FaImage className="upload-icon" />
              <p className="upload-text">
                Cliquez ou glissez-déposez une image
              </p>
              <p className="upload-hint">
                JPG, PNG, GIF, WEBP (max 5MB)
              </p>
            </>
          )}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUploader;


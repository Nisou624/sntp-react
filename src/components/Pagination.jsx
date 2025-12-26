import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 7;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page !== '...' && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="Pagination-container">
      {/* Bouton Précédent */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="Pagination-btn Pagination-btn-prev"
        aria-label="Page précédente"
      >
        <ChevronLeft size={18} />
        <span>Précédent</span>
      </button>

      {/* Numéros de page */}
      <div className="Pagination-numbers">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            className={`Pagination-number ${
              page === currentPage ? 'Pagination-active' : ''
            } ${page === '...' ? 'Pagination-dots' : ''}`}
            disabled={page === '...'}
            aria-label={page === '...' ? 'Plus de pages' : `Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Bouton Suivant */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="Pagination-btn Pagination-btn-next"
        aria-label="Page suivante"
      >
        <span>Suivant</span>
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;


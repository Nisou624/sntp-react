import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link, featured = false }) => {
  return (
    <div className={`service-card ${featured ? 'featured' : ''}`}>
      <div className="service-icon">
        {icon}
      </div>
      <h4 className="service-title">{title}</h4>
      <p className="service-description">{description}</p>
      <Link to={link} className="service-link">
        En savoir plus
        <FaChevronRight className="link-icon" />
      </Link>
    </div>
  );
};

export default ServiceCard;


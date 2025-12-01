import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    { id: 1, image: '/assets/images/cert-1.png', alt: 'Certification ISO 9001' },
    { id: 2, image: '/assets/images/cert-2.png', alt: 'Certification ISO 14001' },
    { id: 3, image: '/assets/images/cert-3.png', alt: 'Certification OHSAS 18001' }
  ];

  return (
    <section className="certifications-section">
      <div className="container">
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-item">
              <img src={cert.image} alt={cert.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;


import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <div className="service-card-v2">
      <span className="material-symbols-outlined service-icon">{icon}</span>
      <h4 className="service-title-v2">{title}</h4>
      <p className="service-description-v2">{description}</p>
      <Link to={link} className="service-link-v2">Ver Detalhes</Link>
    </div>
  );
};

export default ServiceCard;

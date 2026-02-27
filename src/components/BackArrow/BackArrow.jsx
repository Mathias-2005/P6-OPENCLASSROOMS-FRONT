import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function BackArrow() {
  return (
    <Link to="/" className="backArrow">
      {' '}
      <FontAwesomeIcon icon={faStar} />
      {' Retour'}
    </Link>
  );
}

export default BackArrow;

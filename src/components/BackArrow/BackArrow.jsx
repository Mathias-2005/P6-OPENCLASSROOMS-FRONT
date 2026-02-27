import { Link } from 'react-router-dom';
import { faStar, faArrowLeft, etc } from '@fortawesome/free-solid-svg-icons';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
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

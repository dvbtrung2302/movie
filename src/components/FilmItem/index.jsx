import React from 'react';
import PropTypes from 'prop-types';
import { FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './style.scss';

FilmItems.propTypes = {
  imageUrl: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  quality: PropTypes.string,
  year: PropTypes.string,
  time: PropTypes.string,
};

FilmItems.defaultProps = {
  imageUrl: 'https://via.placeholder.com/250x375.png',
  href: '/',
  title: 'N/A',
  quality: 'N/A',
  year: 'N/A',
  time: 'N/A',
};



function FilmItems(props) {
  const { imageUrl, title, quality, year, time , href} = props;
  return (
    <div className="film-item">
      <div className="film-item__poster">
        <Link to={href} title={title}>
          <img src={imageUrl} alt={title}/>
          <div className="film-item__poster__overlay">
            <FaPlayCircle size={68} />
          </div>
        </Link>
      </div>
      <div className="film-item__detail">
        <Link to={href} className="film-item__detail__title">{title}</Link>
        <div className="film-item__detail__info">
          <div className="film-item__detail__info__quality">{quality}</div>
          <div className="film-item__detail__info__year">{year}</div>
          <span className="film-item__detail__info__dot"></span>
          <div className="film-item__detail__info__time">{time}</div>
        </div>
      </div>
    </div>
  );
}

export default FilmItems;
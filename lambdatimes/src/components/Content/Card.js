import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card}) => {
  const {headline, img, author} = card;
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })
};

export default Card;

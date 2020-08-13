import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

Burger.propTypes = {
  setHamburgerClick: PropTypes.func,
  isHamburgerClick: PropTypes.bool,
};

Burger.defaltProps = {
  isHamburgerClick: true
}

function Burger(props) {
  const { isHamburgerClick, setHamburgerClick } = props;

  return(
    <div 
      className={isHamburgerClick ? "burger toggle" : "burger"}
      onClick={() => setHamburgerClick(!isHamburgerClick)}
   >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}


export default Burger;
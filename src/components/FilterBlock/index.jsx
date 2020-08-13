import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import { convertSlug } from '../../utils/func';

import './style.css';

FilterBlock.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  url: PropTypes.string,
};

FilterBlock.defaultProps = {
  title: '',
  items: [],
  url: ''
} 

function FilterBlock(props) {
  const { title, items, url } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className="filter-block">
      <div className="filter-block__title">
        <span>{ title }</span>
        {
          isOpen ? 
          <FaMinusCircle onClick={toggle} size={22} /> :
          <FaPlusCircle onClick={toggle} size={22} />
        }
      </div>
      <Collapse isOpen={isOpen} className="container">
        <ul className="filter-block__items row">
          {
            items.map(item => 
              <li key={item.label} className="col-6">
                <Link to={`${url}/${convertSlug(item.label)}`} title={item.label}>{item.label}</Link>
              </li>  
            )
          }
        </ul>
      </Collapse>
    </div>
  );
}

export default FilterBlock;
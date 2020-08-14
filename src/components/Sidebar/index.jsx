import React from 'react';
import {
	FaHome,
	FaImdb,
	FaFilm,
	FaTv,
	FaAngleLeft
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';
import { GENRE_ITEMS, COUNTRY_ITEMS, SIDEBAR_FOOTER_LINKS } from '../../constants/global';
import FilterBlock from '../FilterBlock';

Sidebar.propTypes = {
  isHamburgerClick: PropTypes.bool,
	width: PropTypes.number,
	setHamburgerClick: PropTypes.func,
};

Sidebar.defaultProps = {
	isHamburgerClick: true,
	width: 0
}

const navs = [
	{ icon: <FaHome size={20} />, label: 'Home', url: '/' },
	{ icon: <FaImdb size={20} />, label: 'Top IMDB', url: '/top-imdb' },
	{ icon: <FaFilm size={20} />, label: 'Movies', url: '/movie' },
	{ icon: <FaTv size={20} />, label: 'TV Shows', url: '/tv-show' },
];

function Sidebar(props) {
  const { isHamburgerClick, setHamburgerClick, width } = props;

	return (
		<div className={ isHamburgerClick ? 'sidebar sidebar--active' : 'sidebar' }>
			{/* close side bar */}
			{
				(isHamburgerClick && width < 1199) &&
				<div className="sidebar__close-btn" onClick={setHamburgerClick}>
					<FaAngleLeft size={18} />
					<span>Close sidebar</span>
				</div>
			}
			{/* menu */}
			<ul className="sidebar__menu">
				{
					navs.map(nav => 
						<li key={nav.label}>
							<Link to={nav.url} title={nav.label} >
								<div className="sidebar__menu__icon">
									{ nav.icon }
								</div>
								<span>{ nav.label }</span>
							</Link>
						</li>	
					)
				}
			</ul>
			{/* genre filter */}
			<FilterBlock items={GENRE_ITEMS} title='Genre' url="/genre" />
      {/* country filter */}
			<FilterBlock items={COUNTRY_ITEMS} title='Country' url="/country" />
      {/* footer */}
      <div className="sidebar__footer">
        {
          SIDEBAR_FOOTER_LINKS.map((link, index) =>
            <React.Fragment key={link.label}> 
              <Link to={link.href} title={link.label}>{ link.label }</Link>
              { index !== 3 && <span>-</span> }
            </React.Fragment>
          )
        }
        <div>© 2020 TinyZone</div>
      </div>
		</div>
	);
}

export default Sidebar;
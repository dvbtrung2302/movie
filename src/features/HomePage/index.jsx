import React from 'react';
import PropTypes from 'prop-types';
import FilmItems from '../../components/FilmItem';
import ItemsSlide from './components/ItemsSlide';

HomePage.propTypes = {
    
};

function HomePage(props) {
	return (
		<div className="home-page" style={{padding: "0 15px"}}>
			<FilmItems />
			<ItemsSlide />
		</div>
	);
}

export default HomePage;
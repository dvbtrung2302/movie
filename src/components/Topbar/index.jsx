import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { 
    Container, 
    Row,
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';

import './style.css';
import Burger from '../Hamburger';
import Sidebar from '../Sidebar';
import useWindowSize from '../../hooks/useWindowSize';

Topbar.propTypes = {
    
};

function Topbar(props) {
  const [ isHamburgerClick, setHamburgerClick ] = useState(true);
  const [ width ] = useWindowSize();

  useEffect(() => {
    if (width < 1199 && width !== 0) {
      setHamburgerClick(false);
    } else {
      setHamburgerClick(true);
    }
  }, [setHamburgerClick, width])

	return (
		<div className="topbar">
			<Container fluid className="topbar__main">
				<Row className="m-0 d-flex align-items-center justify-content-between flex-wrap">
					<div className="topbar__left">
						<Burger setHamburgerClick={setHamburgerClick} isHamburgerClick={isHamburgerClick} />
						<div className="topbar__logo">
								<Link to="/" className="w-100 h-100" title="TinyZone">
										<img src="https://res.cloudinary.com/dofqucuyy/image/upload/v1597290299/logo-square_irisb0.png" alt="logo"/>
										<span>TinyZone</span>
								</Link>
						</div>
					</div>
					<div className="topbar__search">
						<Form inline className="flex-nowrap">
							<FormGroup className="w-100">
								<Input type="text" placeholder="Enter keywords..." className="flex-grow-1" />
								<Button>
									<FaSearch size={18} />
								</Button>
							</FormGroup>
						</Form>
					</div>
					<div className="topbar__user">
						<span>Login / Register</span>
					</div>
				</Row>
			</Container>
      <Sidebar isHamburgerClick={isHamburgerClick} width={width} />
		</div>
	);
}

export default Topbar;
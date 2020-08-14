import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaUser } from 'react-icons/fa';
import { 
    Container, 
    Row,
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';

import './style.scss';
import Sidebar from '../Sidebar';
import useWindowSize from '../../hooks/useWindowSize';
import Images from '../../constants/images';

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

	const onHamburgerClick = () => {
		if (width < 1199 && width !==0) {
			if (!isHamburgerClick) {
				document.body.style.overflow = 'hidden';
				setHamburgerClick(!isHamburgerClick);
			} else {
				document.body.style.overflow = 'unset';
				setHamburgerClick(!isHamburgerClick);
			}
		} else {
			if (isHamburgerClick) {
				document.body.style.padding = '80px 0 0 0';
			} else {
				document.body.style.padding = '80px 0 0 240px';
			}
			setHamburgerClick(!isHamburgerClick);
		}
	}

	return (
		<div className="topbar">
			<Container fluid className="topbar__main">
				<Row className="m-0 d-flex align-items-center justify-content-between flex-wrap">
					<div className="topbar__main__left">
						<FaBars onClick={onHamburgerClick} size={22} />
						<div className="topbar__main__logo">
								<Link to="/" className="w-100 h-100" title="TinyZone">
										<img src={Images.LOGO} alt="logo"/>
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
						<FaUser size={22} />
					</div>
				</Row>
			</Container>
      <Sidebar isHamburgerClick={isHamburgerClick} width={width} setHamburgerClick={onHamburgerClick} />
			<div className={isHamburgerClick ? 'topbar__bg--active' : ''} onClick={onHamburgerClick}></div>
		</div>
	);
}

export default Topbar;
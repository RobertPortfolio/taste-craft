import React from 'react';
import { Link } from 'react-router-dom';
import SearchPanel from '../search-panel';
import './header.css';

const Header = ({ fetchRecipes }) => {
	return (
		<header className="border shadow mt-3 mb-5 row py-3 align-items-center">
			<Link to="/" className="col text-decoration-none">
				<h1 className="link-danger montserrat">
					TasteCraft
					<i className="link-warning fas fa-utensils"></i>
				</h1>
			</Link>
			<SearchPanel className="col"/>
			<div className="col">suslo</div>
		</header>
	); 
};

export default Header;
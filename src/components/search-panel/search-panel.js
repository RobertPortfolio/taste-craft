import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPanel = () => {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		if (query.trim()) {
	      // Перенаправляем на страницу /search с параметром запроса
	      navigate(`/search?q=${encodeURIComponent(query)}`);
	    }
	};

	return (
		<form 
			className="d-flex w-25"
			onSubmit={handleSearch}>
			<input
				type="text"
				className="form-control rounded-0 rounded-start border border-end-0 border-dark"
				onChange={(e) => setQuery(e.target.value)}
				value={query}
				placeholder="Search for recipes..."
			/>
			<button type="submit" className="btn btn-danger rounded-0 rounded-end border border-start-0 border-dark">
				<i className="fas fa-search"></i>
			</button>
		</form>
	);
};


export default SearchPanel;
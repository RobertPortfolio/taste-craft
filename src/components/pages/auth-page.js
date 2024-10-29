import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';

const Login = ({ loading, error, isAuthenticated, login }) => {
	const [username, setUsername] = useState('');
  	const [password, setPassword] = useState('');


  	const handleSubmit = (e) => {
	    e.preventDefault();
	    console.log({ username, password })
	    login({ username, password })
	};

	if (isAuthenticated) {
	    return <div>Вы успешно вошли в систему!</div>;
	}

	return (
	    <form onSubmit={handleSubmit}>
	      <input
	        type="text"
	        placeholder="Username"
	        value={username}
	        onChange={(e) => setUsername(e.target.value)}
	        required
	      />
	      <input
	        type="password"
	        placeholder="Password"
	        value={password}
	        onChange={(e) => setPassword(e.target.value)}
	        required
	      />
	      <button type="submit" disabled={loading}>
	        {loading ? "Loading..." : "Login"}
	      </button>
	      {error && <div >{error}</div>}
	    </form>
    );
};

const mapStateToProps = ({ auth: { loading, error, isAuthenticated } }) => {
	return { loading, error, isAuthenticated };
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (credentials) => login(dispatch, credentials)()
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
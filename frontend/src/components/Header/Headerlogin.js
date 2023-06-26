import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Headerlogin = () => {
return (
<nav className="topbar">
<Link to="/">
<div className="logo">
<div className="logo-text">Rent house</div>
</div>
</Link>
</nav>
);
};

export default Headerlogin;
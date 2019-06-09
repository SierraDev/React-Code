import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h1>My work</h1>
        <p>Check it out:</p>
        <Link to="/portfolio/1">Item one</Link>
        <Link to="/portfolio/2">Item two</Link>
    </div>
)

export default Portfolio;
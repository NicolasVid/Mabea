import React from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom';

function Welcome() {
    return (
        <div className="Welcome">
            <p>Bienvenue sur Mabéa</p>
            <Link to="/Read"><button>Commencer a lire des BA</button></Link>
        </div>
    )
}

export default Welcome

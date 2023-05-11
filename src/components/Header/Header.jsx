import React from 'react';
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();


    return (
        <div className="header">
            <div className="fleche">
                <img src="./../src/assets/images/fleche-retour.png" alt="fleche" onClick={() => navigate(-1)}/>
            </div>
            <div className ="matiere">
                <h2>Géographie</h2>
            </div>
            <div className = "nombre-questions">
                <h2>2/10</h2>
            </div>
        </div>
    );
};

export default Header;
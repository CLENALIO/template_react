import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Consigne from './Consigne.jsx';
import ReponseCapitale from './ReponseCapitale.jsx';
import ReponseDrapeau from './ReponseDrapeau.jsx';
import End from './End.jsx';

const Geographie = () => {
    return (
        <div className="geographie">
            <Header/>
            <Consigne />
            <Footer/>
        </div>
    );
};

export default Geographie;
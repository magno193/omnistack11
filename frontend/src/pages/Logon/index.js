import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import './styles.css'
import heroisImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


export default function Logon(props) {
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>

                <form action="">
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder="Sua ID"/>
                    <button className="button">Entrar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroisImg} alt="Heroes" />
        </div>
    );
}
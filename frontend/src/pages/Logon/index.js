import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

//axios
import api from '../../services/api.js';

// css
import './styles.css';

// images
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon() {

    const [id, setId] = useState('');
    const navigate = useNavigate();

    // logon submit form
    async function handleLogin(e) {
        e.preventDefault();

        // sending the data
        try {
            const data = { id };
            const response = await api.post('session', data);

            // successfully signed in
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            navigate('/profile');
        }
        catch (error) {
            alert('Error trying to Sign in. Try again later :(');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt='Logo' />

                <form onSubmit={ handleLogin }>
                    <h1>Sign In</h1>

                    <input 
                        placeholder='Your ID' 
                        value={id}
                        onChange={ e => setId(e.target.value) }
                    />
                    <button className='button' type='submit'>Log In</button>

                    <Link className='back-link' to='/register'>
                        <FiLogIn size={16} color='#E02041' />
                        Sign up
                    </Link>
                </form>
            </section>

            <img src={ heroesImg } alt='heroes' />
        </div>
    );
}

export default Logon;
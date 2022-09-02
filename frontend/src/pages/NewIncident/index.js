import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// logo
import logoImg from '../../assets/logo.svg';

// css
import './styles.css';
import api from '../../services/api';

function NewIncident() {

    // navigate
    const navigate = useNavigate();

    // input fields
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    // registering the incident
    async function handleNewIncident(e) {
        e.preventDefault();

        const data = { title, description, value };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            navigate('/profile');
        }
        catch(err) {
            alert('Error in creating a new incident. Try again later :(');
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                
                {/* infos */}
                <section>
                    <img src={ logoImg } alt="Logo" />

                    <h1>Register a new incident</h1>
                    <p>Relate the incident to find out a hero to help you out!</p>

                    <Link className='back-link' to='/profile'>
                        <FiArrowLeft size={16} color='e02041' />
                        Come back to Profile
                    </Link>
                </section>

                { /* register form */ }
                <form onSubmit={ handleNewIncident }>
                    <input 
                        placeholder="Incident's Title" 
                        value={ title }
                        onChange={ e => setTitle(e.target.value) }
                    />
                    <textarea 
                        placeholder="Description"
                        value={ description }
                        onChange={ e => setDescription(e.target.value) }
                    />
                    <input 
                        placeholder="Value in Dolars"
                        value={ value }
                        onChange={ e => setValue(e.target.value) }
                    />

                    <button className="button" type='Submit'>Register</button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;
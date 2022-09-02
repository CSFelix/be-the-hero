import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

// axios
import api from '../../services/api.js';

// css
import './styles.css';

// logo
import logoImg from '../../assets/logo.svg';

function Profile() {

    // navigate
    const navigate = useNavigate();

    // incidents
    const [incidents, setIncidents] = useState([]);

    // ong info
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    // load the incident
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    // delete incident
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id != id));
        }
        catch (err) {
            alert('Error in deleting the incident. Try again later :(');
        }
    }

    // log out / sign out
    function handleLogout() {
        localStorage.clear();
        navigate('/');
    }

    return(
        <div className="profile-container">

            { /* header */ }
            <header>
                <img src={ logoImg } alt="Logo" />
                <span>Welcome, { ongName }!</span>

                <Link className='button' to='/incidents/new'>
                    Register new incident
                </Link>

                <button onClick={ handleLogout } type="button">
                    <FiPower size={18} color='#e02041' />
                </button>
            </header>

            { /* incidents list */ }
            <h1>Incidents</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={ incident.id }>
                        <strong>Incident:</strong>
                        <p>{ incident.title }</p>

                        <strong>Description:</strong>
                        <p>{ incident.description }</p>

                        <strong>Value:</strong>
                        <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) }</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type='button'>
                            <FiTrash2 size={20} color='#a8a8b3' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
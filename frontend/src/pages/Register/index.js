import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// axios
import api from '../../services/api.js';

// css
import './styles.css';

// logo
import logoImg from '../../assets/logo.svg';

function Register() {

    // input fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const navigate = useNavigate();

    // submit sign up form
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, email,
            whatsapp, city, uf
        }

        // sending the sign up datas
        try {
            const response = await api.post('ongs', data);
            alert(`Your Access ID: ${response.data.id}`);
            navigate('/');
        }
        catch (error) {
            alert('Error in creating your account. Try again later :(');
        }
        
    }

    return(
        <div className="register-container">
            <div className="content">
                
                {/* infos */}
                <section>
                    <img src={ logoImg } alt="Logo" />

                    <h1>Sign Up</h1>
                    <p>Sing up, dive into our platform and help people discover your ONG's incidents.</p>

                    <Link className='back-link' to='/'>
                        <FiArrowLeft size={16} color='e02041' />
                        Sign in
                    </Link>
                </section>

                { /* register form */ }
                <form onSubmit={ handleRegister }>
                    <input 
                        placeholder="ONG's Name" 
                        value={name}
                        onChange={ e => setName(e.target.value) }
                    />
                    <input type='emails' 
                        placeholder='E-mail' 
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                    />
                    <input 
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={ e => setWhatsapp(e.target.value) }
                    />

                    <div className="input-group">
                        <input 
                            placeholder="City" 
                            value={city}
                            onChange={ e => setCity(e.target.value) }
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={ e => setUf(e.target.value) }
                        />
                    </div>

                    <button className="button" type='Submit'>Sign up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
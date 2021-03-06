import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import MessagePopup from '../../1.Admin/MessagePopup/MessagePopup';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/loggedin/${id}`);
  };

  const handleLogin = (event) => {
    if (!email || !password) {
      setMessage('Vous devez renseigner votre email et votre mot de passe')
      setOpened(true);
    } else {
      event.preventDefault();
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {
        email: email,
        password: password
      },
      {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        setEmail('');
        setPassword('');
        const id = data.id;
        handleNavigate(id);
        
      })
      .catch((err) => err.message)
    }
  }

  return (
    <>
    <Header />
    <MessagePopup message={message} opened={opened} setOpened={setOpened}/>
    <form className="login-form flex-center-column">
      <h3>Connexion :</h3>
    <label htmlFor="email" className="public-label">Email:<br />
        <input type="email" name="email" className="public-input" value={email} onChange={(event) => setEmail(event.target.value)}/>
      </label>
      <label htmlFor="password" className="public-label">Mot de passe:<br />
        <input type="password" name="password" className="public-input" value={password} onChange={(event) => setPassword(event.target.value)}/>
      </label>
      <button type="button" className="public-btn" onClick={handleLogin}>Se connecter</button>
      <p>Pas encore membre? <Link to="/register">S'enregistrer</Link></p>
    </form>
    </>
  );
};

export default Login;
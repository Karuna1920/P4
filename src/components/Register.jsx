import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Welcome, ${name}! Registration successful.`);
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <header style={styles.header}>
          <h2 style={styles.heading}>REGISTER</h2>
        </header>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
        <div style={styles.links}>
          <p>
            Already have an account?{' '}
            <a href="/" style={styles.link}>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  box: {
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '300px',
  },
  header: {
    marginBottom: '20px',
  },
  heading: {
    color: '#007BFF',
    margin: 0,
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  links: {
    marginTop: '20px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <header style={styles.header}>
          <h2 style={styles.heading}>LOGIN</h2>
        </header>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <div style={styles.links}>
          <button style={styles.linkButton} onClick={() => alert('Google Sign-In not implemented')}>
            Sign in with Google
          </button>
          <p>
            <a href="#" style={styles.link} onClick={() => alert('Forgot Password not implemented')}>
              Forgot Password?
            </a>
          </p>
          <p>
            New user?{' '}
            <a href="/register" style={styles.link}>
              Register
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
  linkButton: {
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
    marginBottom: '10px',
    width: '100%',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default Login;

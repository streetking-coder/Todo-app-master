import React from 'react';
import { Link } from 'react-router-dom';

// A simple list icon SVG as React component
const ListIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    viewBox="0 0 24 24"
    width="28px"
    height="28px"
    style={{ marginRight: '8px' }}
  >
    <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
  </svg>
);

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>
        <ListIcon />
        <span>TODO 🎯🎯 </span>
      </div>
      <div>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/add-item" style={{ ...styles.link, marginLeft: 20 }}>
          Add Task
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#FFF9C4',
    padding: '18px 35px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    fontSize: '22px',
    letterSpacing: '1.5px',
    userSelect: 'none',
  },
  link: {
    color: '#FBC02D',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '17px',
    transition: 'color 0.25s ease',
  },
};

export default Navbar;

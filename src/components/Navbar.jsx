
import PropTypes from 'prop-types'; // Import PropTypes
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/dashboard">PolicyManager</NavLink>
      </div>
      <ul className={styles.navLinks}>
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.active : ''}>Dashboard</NavLink></li>
        <li><NavLink to="/add-policy" className={({ isActive }) => isActive ? styles.active : ''}>Add Policy</NavLink></li>
        <li><NavLink to="/policy-list" className={({ isActive }) => isActive ? styles.active : ''}>View Policies</NavLink></li>
      </ul>
      <div className={styles.logout}>
        <button className={styles.logoutButton} onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

// Add PropTypes for validation
Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;

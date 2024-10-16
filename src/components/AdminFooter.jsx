import styles from "../styles/AdminFooter.module.css";


const AdminFooter = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 MassMutual Insurance. All rights reserved.</p>
            <span>Terms and Conditions | Privacy Policy</span>
      <span>Customer Service: 1-800-555-1234</span>
        </footer>
    );
};

export default AdminFooter;



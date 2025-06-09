import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>MyApp</h1>
            <ul style={styles.navLinks}>
                <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
                <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
                <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    navItem: {
        marginLeft: '20px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;
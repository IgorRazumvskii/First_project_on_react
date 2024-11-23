import { useMatch, useNavigate } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
  const navigate = useNavigate();
  const isHome = useMatch('/')

  return (
    <header className={styles.header} style={{backgroundColor: isHome ? 'black' : 'white', color: isHome ? 'white' : 'black'}}>
      <div className={styles.logo} onClick={() => navigate('/')}>Bimmerclub</div>
      <nav className={styles.nav}>
        <ul className={ styles.navList}>
          <li className={styles.navItem}>
            <button style={{color: isHome ? 'white' : 'black'}} onClick={() => navigate('/')}>Главная</button>
          </li>
          <li className={styles.navItem}>
            <button style={{color: isHome ? 'white' : 'black'}} onClick={() => navigate('/about')}>О компании</button>
          </li>
          <li className={styles.navItem}>
            <button style={{color: isHome ? 'white' : 'black'}} onClick={() => navigate('/services')}>Услуги</button>
          </li>
        </ul>
      </nav>
      <button style={{background: isHome ? 'white' : 'black', color: isHome ? 'black' : 'white'}} className={styles.signupButton} onClick={() => navigate('/form')}>
        Записаться
      </button>
    </header>
  );
};

import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';

import logo from '../../assets/logo/logo.jpeg'

function Home() 
{
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <h1 className={styles.title}>Езди быстро, чини чаще</h1>
            <button className={styles.catalogButton} onClick={() => navigate('/services')}>
              Каталог
            </button>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.imagePlaceholder}>

              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      );
}

export default Home


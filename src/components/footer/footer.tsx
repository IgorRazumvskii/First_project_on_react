import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.infoBlock}>
          <h4 className={styles.footerTitle}>Контактная информация</h4>
          <p className={styles.footerText}>Телефон: +1 (800) 123-45-67</p>
          <p className={styles.footerText}>Email: support@bimmerclub.com</p>
        </div>
        <div className={styles.infoBlock}>
          <h4 className={styles.footerTitle}>Адрес</h4>
          <p className={styles.footerText}>Москва, ул. Автозаводская, д. 1</p>
        </div>
        <div className={styles.infoBlock}>
          <h4 className={styles.footerTitle}>Социальные сети</h4>
          <p className={styles.footerText}>Facebook: <a href="https://facebook.com/bimmerclub" target="_blank" rel="noopener noreferrer">bimmerclub</a></p>
          <p className={styles.footerText}>Instagram: <a href="https://instagram.com/bimmerclub" target="_blank" rel="noopener noreferrer">@bimmerclub</a></p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerText}>© 2024 Bimmerclub. Все права защищены.</p>
      </div>
    </footer>
  );
};
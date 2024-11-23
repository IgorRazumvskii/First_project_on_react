import { useEffect, useState } from 'react';
import styles from './services.module.css';
import { ProductCard } from '../../components/ProductCard/index.tsx';
import { useNavigate } from 'react-router-dom';

interface Service{
  pk: string
  name: string
  info: string
  text: string
  price: number
  img: string
}

function Services() {
  const [services, setServices] = useState<Array<Service>>(); // Состояние для данных
  const [error, setError] = useState(null); // Состояние для ошибок
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/services/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return response.json();
      })
      .then((data) => setServices(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.header}>
          <h1 className={styles.title}>Услуги</h1>
        </div>
        <div className={styles.product_list}>
          {error ? (
            <p className={styles.error}>Ошибка: {error}</p>
          ) : services && services.length > 0 ? (
            services.map((service) => (
              <ProductCard
                key={service.pk}
                name={service.name}
                info={service.info}
                price={service.price}
                img={`http://127.0.0.1:8000${service.img}`}
                onClick={() => navigate(`/service/${service.pk}`)}
              />
            ))
          ) : (
            <p>Услуги отсутствуют.</p>
          )}
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.imagePlaceholder}></div>
      </div>
    </div>
  );
}

export default Services;

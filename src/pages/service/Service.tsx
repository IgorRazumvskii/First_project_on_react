import { useEffect, useState } from 'react';
import styles from './service.module.css';
import { useParams } from 'react-router-dom';

interface Service{
  name: string
  info: string
  text: string
  price: number
}

const Service = () => {
  const [service, setService] = useState<Service>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    

    fetch(`http://127.0.0.1:8000/api/service/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return response.json();
      })
      .then((data) => {
        setService(data); // Сохраняем данные об услуге
        setLoading(false); // Убираем индикатор загрузки
      })
      .catch((err) => {
        setError(err.message); // Обработка ошибки
        setLoading(false); // Убираем индикатор загрузки
      });
  }, [id]);

  // Отображение данных
  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  return (
    <div className={styles.container}>
      {/* Верхний блок с названием услуги */}
      <div className={styles.header}>
        <h1 className={styles.title}>{service.name}</h1>
        <h3 className={styles.info}>{service.info}</h3>
      </div>

      {/* Нижний блок с колонками */}
      <div className={styles.infoSection}>
        {/* Большой блок с описанием */}
        <div className={styles.descriptionBox}>
          <h2 className={styles.infoTitle}>Описание</h2>
          <p className={styles.infoContent}>{service.text}</p>
        </div>

        {/* Два прямоугольных блока справа (цена и контакты) */}
        <div className={styles.rightSection}>
          <div className={styles.infoBox}>
            <h2 className={styles.infoTitle}>Цена</h2>
            <p className={styles.infoContent}>От {service.price} ₽</p>
            {/* Кнопка "Записаться" */}
            <a href="/form" className={styles.button}>Записаться</a>
          </div>
          <div className={styles.infoBox}>
            <h2 className={styles.infoTitle}>Контакты</h2>
            <p className={styles.infoContent}>Остались вопросы? Звони, и мы починим не только твою BMW, но и все недоразумения!</p>
            <p className={styles.phoneNumber}>89017130433</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

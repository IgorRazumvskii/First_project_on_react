import { useState, useEffect, useRef } from 'react';
import IMask from 'imask';
import styles from './form.module.css';

interface Service {
  id: number;
  name: string;
}

const Form = () => {
  const [services, setServices] = useState<Array<Service>>();
  const [selectedService, setSelectedService] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const phoneInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/services/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке услуг');
        }
        return response.json();
      })
      .then((data) => setServices(data))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    if (phoneInputRef.current) {
      IMask(phoneInputRef.current, {
        mask: '+{7}(000)000-00-00',
      });
    }
  }, [phoneInputRef]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!selectedService || !phoneNumber || !name) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    const cleanedPhoneNumber = phoneNumber.replace(/[^\d]/g, '');

    const requestData = {
      service_id: selectedService,
      phone_number: cleanedPhoneNumber,
      name: name,
    };

    fetch('http://127.0.0.1:8000/api/create_record/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при создании записи');
        }
        return response.json();
      })
      .then(() => {
        setSuccess('Запись успешно создана!');
        setError('');
        setSelectedService('');
        setPhoneNumber('');
        setName('');
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Форма записи</h2>

      {success && <p className={styles.success}>{success}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Имя:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите ваше имя"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service" className={styles.label}>
            Выберите услугу:
          </label>
          <select
            id="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className={styles.input}
          >
            <option value="">Выберите услугу</option>
            {services &&
              services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Номер телефона:
          </label>
          <input
            type="tel"
            id="phone"
            ref={phoneInputRef}
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="+7 (800) 123-45-67"
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Записаться
        </button>
      </form>
    </div>
  );
};

export default Form;

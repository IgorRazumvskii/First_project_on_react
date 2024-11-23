import styles from './about.module.css';

function About(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>О нас</h1>
            </div>
                <div className={styles.infoSection}>
                <div className={styles.descriptionBox}>
                <p className={styles.infoContent}>Сервис BMW — это не просто механики, это волшебники, которые превращают каждую поездку в путешествие на облаке. Мы не просто меняем масло, мы дарим вашему автомобилю второе дыхание, а вашему настроению — подзарядку. Если ваш BMW начал петь "Ода радости" вместо мотора, мы вернем ему настоящий звук! Все детали — оригинальные, все работы — идеально точные, а каждая поездка после нас будет как первый день влюбленности!</p>
                </div>
            </div>
            <button className={styles.examples}>Наши работы</button>
        </div>
    );
}

export default About
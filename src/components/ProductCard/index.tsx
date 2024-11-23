import styles from './ProductCard.module.css';

interface ProductCardProps {
  name: string;
  info: string;
  price: number;
  img: string;
  onClick: ()=> void;
}

export const ProductCard = ({ name, info, price, img, onClick }: ProductCardProps) => {
  return (
    <div className={styles.productCard} onClick={onClick}>
      <img src={img} alt={info} className={styles.productImage} />
      <h3 className={styles.productTitle}>{name}</h3>
      <p className={styles.productInfo}>{info}</p>
      <h2 className={styles.productPrice}>{price} ₽</h2>
    </div>
  );
};


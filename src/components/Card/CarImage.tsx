import styles from "./CardImage.module.css";
const CardImage: React.FC<{ image?: string }> = ({
  image = "https://picsum.photos/80/80",
}) => {
  return (
    <div className={styles.ImageContainer}>
      {<img className={styles.Image} src={image} alt='img' />}
    </div>
  );
};

export default CardImage;

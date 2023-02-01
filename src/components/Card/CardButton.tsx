import styles from "./CardButton.module.css";
interface Props {
  title?: string;
  type?: string;
  description?: string;
}
const CardButton: React.FC<Props> = ({}) => {
  return (
    <div className={styles.ButtonContainer}>
      <button className={styles.CustomButton}>+</button>1
      <button className={styles.CustomButton}>-</button>
    </div>
  );
};

export default CardButton;

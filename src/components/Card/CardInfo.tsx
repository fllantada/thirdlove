import styles from "./CardInfo.module.css";
interface Props {
  title?: string;
  type?: string;
  model?: string;
}
const CardInfo: React.FC<Props> = ({
  title = "default title",
  type = "default type",
  model = "Taupe / 36D",
}) => {
  return (
    <div className={styles.ContentContainer}>
      <div className={styles.Title}>{`${title} ${type}`}</div>

      <div className={styles.Model}>{model}</div>
    </div>
  );
};

export default CardInfo;

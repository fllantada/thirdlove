import styles from "./CardInfo.module.css";
interface Props {
  title?: string;
  type?: string;
  description?: string;
}
const CardInfo: React.FC<Props> = ({
  title = "default title",
  type = "default type",
  description = "default description",
}) => {
  return (
    <div className={styles.ContentContainer}>
      <div className={styles.TitleContainer}>
        <div className={styles.Title}> {title}</div>
      </div>

      <div className={styles.Subtitle}>Tipo de producto</div>
      <div className={styles.Description}>alguna descripcion</div>
    </div>
  );
};

export default CardInfo;

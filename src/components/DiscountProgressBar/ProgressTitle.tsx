import styles from "./ProgressTitle.module.css";

interface Props {
  title: string;
  subtitle: string;
}

const ProgressTitle: React.FunctionComponent<Props> = ({ title, subtitle }) => {
  return (
    <>
      <div className={styles.Title}>
        <>{title}</>
      </div>
      <div className={styles.Subtitle}>
        <>{subtitle}</>
      </div>
    </>
  );
};

export default ProgressTitle;

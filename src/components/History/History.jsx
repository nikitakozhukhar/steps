import styles from "../History/history.module.css";

export default function History({history, handleDelete, handleChange}) {
  
  return (
    <ul className={styles.historyContainerList}>
      {history.map(result => 
        <li className={styles.historyContainerListItem} key={result.date}>

          <div className={styles.historyDate}>
            <div className={styles.historyDateBody}>{result.date}</div>
          </div>

          <div className={styles.historyDistance}>
            <div className={styles.historyDistanceBody}>{result.distance}</div>
          </div>

          <div className={styles.historyButtons}>
            <button 
                className={`${styles.historyButton} ${styles.historyButtonChange}`}
                onClick={() => handleChange(result)}
                >
            </button>
            <button 
                className={`${styles.historyButton} ${styles.historyButtonDelete}`}
                onClick={() => handleDelete(result.date)}>
            </button>
          </div>
        </li>
      )}
      
    </ul>
  );
}

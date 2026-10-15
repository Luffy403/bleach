// кнопка "назад"
import { useNavigate } from "react-router-dom";
import styles from "./backTo.module.css";
export function BackTo({ title }) {
  const navigate = useNavigate();
  function backTo() {
    navigate(-1);
  }
  return (
    <section className="section">
      <div className={`container ${styles.prevBtn__box}`}>
        <button className={styles.prevBtn} onClick={backTo}>
          {title}
        </button>
      </div>
    </section>
  );
}

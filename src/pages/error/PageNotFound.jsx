import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const aizen = `${import.meta.env.BASE_URL}assets/gif/aizen.gif`;

export function PageNotFound() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.page__container}`}>
        <div className={styles.error__text}>
          <h2 className={styles.page__title}>Error 404: Not Found</h2>
          <h3 className={styles.page__text}>К сожалению, такой страницы нет</h3>
        </div>
        <img className={styles.page__img} src={aizen} alt="Фотка заглушка" />
        <Link to="/" className={styles.page__link}>
          Перейти на главную
        </Link>
      </div>
    </section>
  );
}
import styles from "./AnonsCurs.module.css";

export function AnonsSeries({ title, curs }) {
  return (
    <section className="section">
      <div className="container">
        <article className="article__card">
          <h2 className={`article__title ${styles.curs__title}`}>{title}</h2>
          <ul className={styles.curs__list}>
            {curs.map((c, i) => (
              <li className={styles.curs} key={i}>
                {c}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

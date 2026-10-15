import styles from "./AnonsCard.module.css";
export function AnonsCard({
  textFirst,
  textSecond,
  textThird,
  alt,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
  title,
}) {
  return (
    <section className="section section__first">
      <div className={`container`}>
        <article className={`article__card ${styles.anons__card}`}>
          <h1 className="article__title">{title}</h1>
          <p className={styles.anons__text}>{textFirst}</p>
          <div className={styles.image_grid}>
            <img className={styles.anons__image} src={firstImage} alt={alt} />
            <img className={styles.anons__image} src={secondImage} alt={alt} />
          </div>
          <p className={styles.anons__text}>{textSecond}</p>
          <div className={styles.image_grid}>
            <img className={styles.anons__image} src={thirdImage} alt={alt} />
            <img className={styles.anons__image} src={fourthImage} alt={alt} />
          </div>

          <p className={styles.anons__text}>{textThird}</p>
          <div className={styles.image_grid}>
            <img className={styles.anons__image} src={fifthImage} alt={alt} />
            <img className={styles.anons__image} src={sixthImage} alt={alt} />
          </div>
        </article>
      </div>
    </section>
  );
}

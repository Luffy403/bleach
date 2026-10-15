import styles from "./AnonsVudeo.module.css";

export function AnonsVideos({
  videoTitleFirst,
  videoTitleSecond,
  videoTitleThird,
  videoTitleFourth,
  videoFirst,
  videoSecond,
  videoThird,
  videoFourth,
}) {
  return (
    <section className="section">
      <div className="container">
        <article className='article__card'>
          <h2 className={`article__title ${styles.videos__title}`}>Видео контент</h2>
          <div className={styles.video_grid}>
            <div className='videos__item'>
              <h3 className={styles.item__title}>{videoTitleFirst}</h3>
              <video src={videoFirst} className={styles.video} controls preload="metadata"></video>
            </div>
            <div className='videos__item'>
              <h3 className={styles.item__title}>{videoTitleSecond}</h3>
              <video src={videoSecond} className={styles.video} controls preload="metadata"></video>
            </div>
            <div className='videos__item'>
              <h3 className={styles.item__title}>{videoTitleThird}</h3>
              <video src={videoThird} className={styles.video} controls preload="metadata"></video>
            </div>
            <div className='videos__item'>
              <h3 className={styles.item__title}>{videoTitleFourth}</h3>
              <video src={videoFourth} className={styles.video} controls preload="metadata"></video>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

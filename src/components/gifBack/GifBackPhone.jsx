import styles from "./GifBackPhone.module.css";
// Гифка с персонажем и текстом
function GifBackPone({ gifClass, title, text, textBottom, gifCenter }) {
  return gifCenter ? (
    <section className={`section ${styles.gifBack} ${gifClass} ${gifCenter}`}>
      <div className={`container ${styles.gifBack__container}`}>
        <h1 className={styles.title}>{title}</h1>
        {text && <p className={styles.text}>{text}</p>}
        {textBottom && <p className={styles.textBottom}>{textBottom}</p>}
      </div>
    </section>
  ) : (
    <section className={`section ${styles.gifBack} ${gifClass} `}>
      <div className={`container ${styles.gifBack__container}`}>
        <h1 className={styles.title}>{title}</h1>
        {text && <p className={styles.text}>{text}</p>}
        {textBottom && <p className={styles.textBottom}>{textBottom}</p>}
      </div>
    </section>
  );
}
export function GifBackRukia() {
  return (
    <GifBackPone
      gifClass={styles.gifBackRukia}
      title={"Bleach"}
      text={
        'Добро пожаловать на сайт, посвященный аниме "Блич"! Здесь вы сможете погрузиться в увлекательный мир шинигами, исследовать захватывающие приключения Ичиго Куросаки и его друзей, а также узнать о богатой вселенной этого мира. Предлагаем вам обзоры персонажей и анализ сюжета, которые помогут вам лучше понять и оценить это культовое аниме.'
      }
      textBottom={'Погружайтесь в мир "Блич"!'}
    />
  );
}
export function GifBackBiakuia() {
  return (
    <GifBackPone
      gifClass={styles.gifBackByakuya}
      title={"Ключевые фракции персонажей"}
      gifCenter={styles.gifCenter}
    />
  );
}

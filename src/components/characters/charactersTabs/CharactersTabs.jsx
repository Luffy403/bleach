import styles from "./CharactersTabs.module.css";
const shinigami = `${import.meta.env.BASE_URL}assets/img/build/race/shinigami.webp`;
const quincy = `${import.meta.env.BASE_URL}assets/img/build/race/quincy.webp`;
const people = `${import.meta.env.BASE_URL}assets/img/build/race/people.webp`;
const empty = `${import.meta.env.BASE_URL}assets/img/build/race/empty.webp`;
const other = `${import.meta.env.BASE_URL}assets/img/build/race/other.webp`;
import { Link } from "react-router-dom";

export function CharactersTabs() {
  // массив объектов
  const races = [
    { name: "shinigami", label: "Шинигами", img: shinigami },
    { name: "empty", label: "Пустые", img: empty },
    { name: "quincy", label: "Квинси", img: quincy },
    { name: "people", label: "Люди", img: people },
    { name: "other", label: "Другие", img: other },
  ];

  return (
    <section className={`section`}>
      <div className={`container`}>
        <article className={`article__card`}>
          <div className={styles.tabs__container}>
            {races.map((race, key) => (
              <div className={styles.tab} key={key}>
                <h2 className={styles.tab__subtitle}>{race.label}</h2>
                {race.img && (
                  <img className={styles.tab__img} src={race.img}></img>
                )}
                <Link className={styles.tab__link} to={`/characters/${race.name}`}>Подробнее</Link>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

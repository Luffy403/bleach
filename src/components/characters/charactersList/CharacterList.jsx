import { usePrerenderReady } from "../../../hooks/usePrerenderReady";
import { Loader } from "../../ui/loader/Loader";
import styles from "./CharacterList.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function CharacterList() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  usePrerenderReady(!loading && !error);

  // получаем персонажей через api fetch запрос
  useEffect(() => {
    const API_CHARACTERS = `${import.meta.env.BASE_URL}data/characters.json`;
    fetch(API_CHARACTERS)
      .then(async (charac) => {
        if (!charac.ok) throw new Error(`Ой,${charac}`);
        const char = await charac.json();
        setCharacters(char);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);
  //передача пропсов
  function sendCharacter(character) {
    navigate(`/characters/${character.urlName}`);
  }
  // вывод ошибки
  if (error) return <h3 style={{ color: "red" }}>{`Ошибка: ${error}`}</h3>;
  // загрузка персов
  if (loading) return <Loader />;
  return (
    <section className={`section section_first ${styles.charactersList}`}>
      <div className={`container ${styles.charactersList__container}`}>
        <article className={`article__card ${styles.characterList__card}`}>
          <ul className={styles.characters__content}>
            {characters.map((character, indx) => (
              <li className={styles.character__item} key={character.id || indx}>
                <img
                  className={styles.character__avatar}
                  src={`${import.meta.env.BASE_URL}${character.avatar.replace(/^\//, "")}`}
                  alt={character.name}
                  loading="lazy"
                />
                <h2 className={styles.character__name}>{character.name}</h2>
                <button
                  className={styles.character__btn}
                  onClick={() => sendCharacter(character)}
                >
                  Подробнее
                </button>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

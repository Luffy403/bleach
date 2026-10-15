import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./CharacterPage.module.css";
import { BackTo } from "../../../components/ui/BackTo/backTo";
import { Loader } from "../../../components/ui/loader/Loader";

export function CharacterPage() {
  const { urlName } = useParams(); 
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // апишка
    const API_CHARACTERS = `${import.meta.env.BASE_URL}/data/characters.json`;
    
    fetch(API_CHARACTERS)
      .then((res) => {
        if (!res.ok) throw new Error("Не удалось загрузить данные");
        return res.json();
      })
      .then((data) => {
        // Ищем персонажа по urlName из URL
        const found = data.find((c) => c.urlName === urlName);
        if (!found) {
          // Если персонаж не найден — редирект на список
          navigate("/characters");
          return;
        }
        setCharacter(found);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [urlName, navigate]);

  // Загрузка
  if (loading) return <Loader />;

  // Ошибка
  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center", padding: "40px" }}>
        Ошибка: {error}
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>{`Bleach | ${character.name}`}</title>
        <meta
          name="description"
          content={character.metaDescription || character.description}
        />
      </Helmet>
      <section className="section section__first">
        <div className={`container ${styles.character__container}`}>
          <article className={`article__card ${styles.character__item}`}>
            <h1 className="article__title">{character.name}</h1>
            {character.avatar && character.avatar.length !== 0 ? (
              <img
                className={styles.character__avatar}
                src={`${import.meta.env.BASE_URL}${character.avatar.replace(/^\//, "")}`}
                alt={character.name}
                loading="lazy"
              />
            ) : (
              <span>Аватарки пока нет</span>
            )}
            {character.description && character.description.length !== 0 ? (
              <p className={styles.description}>{character.description}</p>
            ) : (
              <span>Описания пока нет</span>
            )}
            {character.video && character.video.length !== 0 ? (
              <video
                src={`${import.meta.env.BASE_URL}${character.video.replace(/^\//, "")}`}
                className={styles.video}
                controls
              />
            ) : (
              <div className={styles.no__edit}>
                <span className={styles.no__edit__title}>Эдита пока нет</span>
              </div>
            )}
          </article>
        </div>
      </section>
      <BackTo title="Назад к персонажам" />
    </>
  );
}
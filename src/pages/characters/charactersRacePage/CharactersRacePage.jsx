import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../../components/ui/loader/Loader";
import styles from "./CharactersRacePage.module.css";
import { BackTo } from "../../../components/ui/BackTo/backTo";
import { Helmet } from "react-helmet-async";

// Перевод фракций на русский
const factionNames = {
  "first-gotei-13": "Первый состав Готея 13",
  "gotei-13": "Готей 13",
  "captains": "Капитаны",
  "lieutenants": "Лейтенанты",
  "zero-squad": "Нулевой отряд",
  "temporary-shinigami": "Временные шинигами",
  "former-shinigami": "Бывшие шинигами",
  "vizards": "Вайзарды",
  "schutzstaffel": "Шуцштаффель",
  "sternritter": "Штернриттеры",
  "other-quincy": "Остальные квинси",
  "espada": "Эспада",
  "arrancar": "Арранкары",
  "fullbringers": "Полные подчинители",
  "humans-with-powers": "Люди со способностями",
  "other": "Другие",
};

// Перевод рас на русский
const raceNames = {
  shinigami: "Шинигами",
  empty: "Пустые",
  other: "Другие",
  people: "Люди",
  quincy: "Квинси",
};

// Список допустимых рас
const validRaces = ["shinigami", "empty", "other", "people", "quincy"];

// Фракции, которые НЕ показываем в табах для конкретных рас
const hiddenFactionsByRace = {
  shinigami: ["espada", "vizards", "fullbringers"],
  empty: ["gotei-13", "captains"],
  quincy: ["gotei-13"],
  other: ["gotei-13", "former-shinigami", "captains", "lieutenants"],
};

// Описание рас для мета-тега
const raceMetaDescriptions = {
  shinigami:
    "Шинигами в аниме Блич: капитаны и лейтенанты Готей 13, их силы, занпакто и история. Полный список ключевых персонажей-шинигами.",
  empty:
    "Пустые в аниме Блич: Эспада, арранкары и их резуррекции. Узнайте о сильнейших пустых, их роли и битвах в мире Блич.",
  other:
    "Другие расы и фракции в аниме Блич: Вайзарды, Полные подчинители, Король Душ и Нулевой отряд. Полный обзор персонажей.",
  people:
    "Люди в аниме Блич: Орихимэ, Чад и другие персонажи со сверхспособностями. Узнайте об их силах, роли и истории в сюжете.",
  quincy:
    "Квинси в аниме Блич: Ванденрейх, Штернриттеры, Юхабах и их способности. Полный список ключевых персонажей-квинси.",
};

export function CharactersRacePage() {
  const { raceName } = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [activeFaction, setActiveFaction] = useState("all");
  const navigate = useNavigate();

  // восстановление или сброс фракции + восстановление скролла
  useEffect(() => {
    if (loading) return; // ждём загрузки данных

    const scrollKey = `scroll_${raceName}`;
    const factionKey = `faction_${raceName}`;

    const savedScroll = sessionStorage.getItem(scrollKey);
    const savedFaction = sessionStorage.getItem(factionKey);

    // Если есть сохранённая фракция — восстанавливаем
    if (savedFaction) {
      setActiveFaction(savedFaction);
      sessionStorage.removeItem(factionKey);
    } else {
      // Если нет — сбрасываем на "all"
      setActiveFaction("all");
    }

    // Восстанавливаем позицию скролла
    if (savedScroll) {
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedScroll, 10));
      });
      sessionStorage.removeItem(scrollKey);
    }
  }, [raceName, loading]);

  // Редирект на 404, если раса не найдена
  useEffect(() => {
    if (!validRaces.includes(raceName)) {
      navigate("/404", { replace: true });
    }
  }, [raceName, navigate]);

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


  // Все персонажи выбранной расы
  const raceCharacters = characters.filter((item) =>
    item.race.includes(raceName),
  );

  // Скрытые фракции для текущей расы
  const hiddenFactions = hiddenFactionsByRace[raceName] || [];

  // Уникальные фракции для текущей расы (с учётом исключений)
  const factions = [
    "all",
    ...new Set(
      raceCharacters
        .flatMap((char) => char.faction || [])
        .filter((faction) => !hiddenFactions.includes(faction)),
    ),
  ];

  // Отфильтрованные персонажи по активной фракции
  const filteredCharacters =
    activeFaction === "all"
      ? raceCharacters
      : raceCharacters.filter(
          (char) => char.faction && char.faction.includes(activeFaction),
        );

  // русское название расы
  const raceNameRu = raceNames[raceName] || raceName;
  // переменная для описания
  const metaDesc =
    raceMetaDescriptions[raceName] ||
    "Персонажи аниме Блич: полный список рас и фракций с описанием.";

  // Сохранение позиции скролла И активной фракции перед переходом
  function sendCharacter(character) {
    const scrollKey = `scroll_${raceName}`;
    const factionKey = `faction_${raceName}`;
    sessionStorage.setItem(scrollKey, String(window.scrollY));
    sessionStorage.setItem(factionKey, activeFaction);
    navigate(`/characters/${raceName}/${character.urlName}`);
  }

  if (error) return <h3 style={{ color: "red" }}>{`Ошибка: ${error}`}</h3>;
  if (loading) return <Loader />;

  return (
    <>
      <Helmet>
        <meta name="description" content={metaDesc} />
        <title>{`Bleach | ${raceNameRu}`}</title>
      </Helmet>
      <div className="wrapper__section">
        <section className={`section section__first ${styles.charactersList}`}>
          <div className={`container ${styles.charactersList__container}`}>
            <article className={`article__card ${styles.characterList__card}`}>
              <h1 className={styles.characters__title}>
                Ключевые персонажи из расы: {raceNameRu}
              </h1>
              <div className={styles.factions}>
                {factions.map((faction) => (
                  <button
                    key={faction}
                    className={`${styles.faction__btn} ${
                      activeFaction === faction
                        ? styles.faction__btn_active
                        : ""
                    }`}
                    onClick={() => setActiveFaction(faction)}
                  >
                    {faction === "all"
                      ? "Все"
                      : factionNames[faction] || faction}
                  </button>
                ))}
              </div>
              <ul className={styles.characters__content}>
                {filteredCharacters.map((character, indx) => (
                  <li
                    className={styles.character__item}
                    key={character.id || indx}
                  >
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
        <BackTo title={"Назад к расам персонажей"} />
      </div>
    </>
  );
}
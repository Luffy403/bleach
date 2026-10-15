import { Helmet } from "react-helmet-async";
import { Heart, TelegramIcon, VkIcon } from "../../icons/icons";
import styles from "./ThanksPage.module.css";
import { BackTo } from "../../components/ui/BackTo/backTo";

const aizen = `${import.meta.env.BASE_URL}assets/gif/aizen.gif`;
const okulov = `${import.meta.env.BASE_URL}assets/img/build/okulov.webp`;
const vovchik = `${import.meta.env.BASE_URL}assets/img/build/vovchik.webp`;
const serega = `${import.meta.env.BASE_URL}assets/img/build/serega.webp`;

export function ThanksPage() {
  return (
    <>
      <Helmet>
        <title>Bleach | Благодарности</title>
        <meta
          name="description"
          content="Особая благодарность людям, которые помогли в создании проекта «Блич»."
        />
      </Helmet>

      <section className="wrapper__section section section__first">
        <div className="container">
          <article className={`article__card ${styles.thanks__card}`}>
            <span className={styles.thanks__top}>
              <h1 className="article__title">Спасибо, что заглянули!</h1>
              <Heart className={styles.thanks__icon} />
            </span>
            <p className={styles.thanks__text}>
              Этот проект не стал бы таким, какой он сейчас, без поддержки, идей
              и помощи замечательных людей. Хочу выразить каждому из них особую
              благодарность.
            </p>
            <ul className={styles.thanks__list}>
              <li className={styles.thanks__item}>
                <img
                  src={aizen}
                  className={styles.thanks__img}
                  alt="Аватар персонажа"
                />
                <div>
                  <span className={styles.thanks__name}>Terror</span>
                  <p className={styles.thanks__description}>
                    Без его идей, предоставления материала, поддержки и первых
                    тестов, когда сайт был ещё «сырым», этот проект не стал бы
                    таким, какой он сейчас!
                  </p>
                  <div className={styles.thanks__links}>
                    <a href="https://t.me/Terror053" target="blank"><TelegramIcon className={styles.thanks__link} /></a>
                    <a href="https://vk.ru/id456884513" target="blank"><VkIcon className={styles.thanks__link} /></a>
                  </div>
                </div>
              </li>
              <li className={styles.thanks__item}>
                <img
                  src={okulov}
                  className={styles.thanks__img}
                  alt="Аватар персонажа"
                />
                <div>
                  <span className={styles.thanks__name}>Evil_Mortimer</span>
                  <p className={styles.thanks__description}>
                    Помогала с первоночальным дизайном проекта. Благодаря её
                    вкусу и вниманию сайт стал выглядеть стильно и современно,
                    по сравнению с первоначальном видом.
                  </p>
                  <div className={styles.thanks__links}>
                    <a href="https://t.me/Evil_Mortimer" target="blank"><TelegramIcon className={styles.thanks__link} /></a>
                    <a href="https://vk.ru/evil_morty" target="blank"><VkIcon className={styles.thanks__link} /></a>
                  </div>
                </div>
              </li>
              <li className={styles.thanks__item}>
                <img
                  src={vovchik}
                  className={styles.thanks__img}
                  alt="Аватар персонажа"
                />
                <div>
                  <span className={styles.thanks__name}>Wlw321980</span>
                  <p className={styles.thanks__description}>
                    Также участвовал в помощи разработки проекта. Его помощь и
                    советы были очень ценны на разных этапах разработки.
                  </p>
                  <div className={styles.thanks__links}>
                    <a href="https://t.me/Wlw321980" target="blank"><TelegramIcon className={styles.thanks__link} /></a>
                    <a href="https://vk.ru/id345434556" target="blank"><VkIcon className={styles.thanks__link} /></a>
                  </div>
                </div>
              </li>
              <li className={styles.thanks__item}>
                <img
                  src={serega}
                  className={styles.thanks__img}
                  alt="Аватар персонажа"
                />
                <div>
                  <span className={styles.thanks__name}>tanorio</span>
                  <p className={styles.thanks__description}>
                    Моя техническая правая рука. Помогал с программированием,
                    разбирался в разных местах кода и всегда был готов прийти на
                    помощь.
                  </p>
                  <div className={styles.thanks__links}>
                    <a href="https://t.me/tanorio" target="blank"><TelegramIcon className={styles.thanks__link} /></a>
                    <a href="https://vk.ru/id276233156" target="blank"><VkIcon className={styles.thanks__link} /></a>
                  </div>
                </div>
              </li>
            </ul>
            <div className={styles.thanks__final}>
              <p className={styles.thanks__final_text}>
                Спасибо каждому, кто был рядом!
              </p>
              <Heart className={styles.thanks__icon} />
            </div>
          </article>
        </div>
      </section>
      <BackTo title="Назад" />
    </>
  );
}

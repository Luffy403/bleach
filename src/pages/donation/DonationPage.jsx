import { Helmet } from "react-helmet-async";
import styles from "./DonationPage.module.css";
import { Heart } from "../../icons/icons";
import { BackTo } from "../../components/ui/BackTo/backTo";

const gif = `${import.meta.env.BASE_URL}assets/gif/urahara.gif`;

export function DonationPage() {
  return (
    <>
      <Helmet>
        <title>Bleach | Пожертвование</title>
        <meta
          name="description"
          content="Поддержите проект по аниме «Блич». Ваши пожертвования помогают развивать сайт, создавать новый контент и радовать фанатов вселенной Куросаки."
        />
      </Helmet>

      <section className={`wrapper__section section section__first`}>
        <div className={`container`}>
          <article className={`article__card ${styles.donation__card}`}>
            <h1 className="article__title">Поддержать проект</h1>
            <p className={styles.donation__text}>
              Ваши пожертвования помогают нам создавать новый контент,
              улучшать сайт и радовать вас свежими материалами по любимому аниме.
            </p>
            <p className={styles.donation__text}>
              Даже небольшое пожертвование — это огромный вклад в развитие проекта!
            </p>
            <img src={gif} alt="Гифка - поддержка проекта" className={styles.donation__gif} />
            <a
              href="https://www.donationalerts.com/r/joker403"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.donation__btn}
            >
              Поддержать проект <Heart className={styles.donation__icon} />
            </a>

            <p className={styles.donation__thanks}>
              Спасибо, что вы с нами!
            </p>
          </article>
        </div>
      </section>
      <BackTo title={"Назад"} />
    </>
  );
}
import { Helmet } from "react-helmet-async";
import { GifBackRukia } from "../../components/gifBack/GifBackPhone";
import { ImgBlocks } from "../../components/home/imgBlocks/ImgBlocks";
import styles from "./Home.module.css";
import { InfoModal } from "../../components/modal/infoModal/InfoModal";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Bleach | Главная</title>
        <meta
          name="description"
          content="Bleach: огромная медиа-база. Арты, обои, видео, саундтреки и клипы. Всё по аниме и манге. Заходи за контентом первым!"
        />
      </Helmet>
      <GifBackRukia />
      <div className="wrapper__section">
        <section className={`section`}>
          <div className={`container ${styles.img__container}`}>
            <ImgBlocks />
          </div>
        </section>
      </div>
      <InfoModal>
        <p className="paragraph">
          Разработка проекта приостановлена на год, так как разработчик будет в
          армии. <br />
          Также не стоит учитывать информацию о персонажах как официальную, так
          как в них могут быть ошибки. Информацию о персонажах лучше
          воспринимать как фан - факты. <br />
          Спасибо за понимание!
        </p>
      </InfoModal>
    </>
  );
}

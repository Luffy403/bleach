import { AnonsCard } from "../../components/anons/AnonsCard/AnonsCard";
import { AnonsSeries } from "../../components/anons/AnonsCurs/AnonsCurs";
import { AnonsVideos } from "../../components/anons/AnonsVideos/AnonsVideos";
import { BackTo } from "../../components/ui/BackTo/backTo";
import { Helmet } from "react-helmet-async";
import { InfoModal } from "../../components/modal/infoModal/InfoModal";

const firstTkv = `${import.meta.env.BASE_URL}assets/img/build/anons/ichigo-tkv-1.webp`;
const secondTkv = `${import.meta.env.BASE_URL}assets/img/build/anons/rukia-tkv-2.webp`;
const thirdTkv = `${import.meta.env.BASE_URL}assets/img/build/anons/aizen-tkv-3.webp`;
const fourthImage = `${import.meta.env.BASE_URL}assets/img/build/anons/kugo-1.webp`;
const fifthImage = `${import.meta.env.BASE_URL}assets/img/build/anons/schutzstaffel.webp`;
const sixthImage = `${import.meta.env.BASE_URL}assets/img/build/anons/mayury-tkv.webp`;
const video1 = `${import.meta.env.BASE_URL}assets/video/trailer.mp4`;
const video2 = `${import.meta.env.BASE_URL}assets/video/fun-trailer.mp4`;
const video3 = `${import.meta.env.BASE_URL}assets/video/bleach-20-years.mp4`;
const video4 = `${import.meta.env.BASE_URL}assets/video/bleach-brave-souls.mp4`;

export function Anons() {
  const curs = [
    "1 кур: «Кровавая война» (октябрь 2022)",
    "2 кур: «Расставание» (июль 2023)",
    "3 кур: «Конфликт» (осень 2024)",
    "4 кур: «Финал» (июль 2026)",
  ];

  return (
    <>
      <Helmet>
        <title>Bleach | Анонс</title>
        <meta
          name="description"
          content="Анонс Bleach 2 сезон: точная дата, сюжет, новые персонажи. Вся информация о продолжении «Тысячелетней кровавой войны»."
        />
      </Helmet>
      <AnonsCard
        textFirst={
          'История о парне, который пытается спасти мир от зла, заинтересовала многих поклонников жанра. Неудивительно, что премьера первой главы, состоявшейся в 2022 году, получила отличные отзывы критиков. От внимания зрителей не укрылась тщательная подготовка авторов к своей работе, включая качественный дизайн главных героев, за что стоит поблагодарить компанию "Pierrot".'
        }
        textSecond={
          "После событий оригинального аниме Ичиго Куросаки продолжает свои обязанности Временного шинигами вместе со своими друзьями, включая Урью Исиду. Вскоре Ичиго встречает члена Ванденрейха, империи, состоящей из последних выживших Квинси. Они объявляют войну Шинигами и вторгаются в Уэко Мундо, а затем нацеливаются на Общество Душ. Ичиго пытается помешать Квинси уничтожить Общество Душ, в то время как Урью копается в прошлом и обнаруживает резню Квинси, устроенную жестокими Шинигами более тысячи лет назад."
        }
        textThird={
          "Во время вторжения многие капитаны Общества Душ получают ранения, а главнокомандующий Генрюсай Шигекуни Ямамото убит в битве с Яхве. Общество Душ пытается восстановиться, и Ичиго с Ренджи Абараи присоединяются к тренировкам Нулевого отряда, чтобы достичь высшей силы. Ренджи становится сильнее благодаря неортодоксальным методам обучения Нулевого отряда, но Ичиго не может завершить своё обучение из-за непонимания истинной природы своих способностей. Он возвращается домой, где его отец Иссин, бывший Шинигами, признаётся ему в том, что его мать Масаки была чистокровной Квинси. Это делает Ичиго наполовину Шинигами, наполовину Квинси. Разобравшись с секретами своей семьи, Ичиго завершает обучение в Нулевом отряде."
        }
        firstImage={firstTkv}
        secondImage={secondTkv}
        thirdImage={thirdTkv}
        fourthImage={fourthImage}
        fifthImage={fifthImage}
        sixthImage={sixthImage}
        alt={"Изображение"}
        title={"Тысячелетняя кровавая война"}
      />
      <AnonsSeries title={"Список куров(частей) 2-ого сезона"} curs={curs} />
      <AnonsVideos
        videoTitleFirst="Официальный трейлер"
        videoTitleSecond="Фанатский трейлер"
        videoTitleThird="20-летие экранизации аниме"
        videoTitleFourth="Bleach Brave Souls"
        videoFirst={video1}
        videoSecond={video2}
        videoThird={video3}
        videoFourth={video4}
      />
      <BackTo title="Назад" />
      <InfoModal>
        <p className="paragraph">На данной странице присутствуют спойлеры ко второму сезону и в целом ко всему аниме. <br />
        Будьте осторожней. </p>
      </InfoModal>
    </>
  );
}
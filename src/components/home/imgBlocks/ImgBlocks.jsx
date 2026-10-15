import styles from "./ImgBlocks.module.css";
const ichigoMask = `${import.meta.env.BASE_URL}assets/img/build/homePage/ichigo-mask-2.webp`;
const bleach = `${import.meta.env.BASE_URL}assets/img/build/homePage/bleach.webp`;
const zangetsu = `${import.meta.env.BASE_URL}assets/img/build/homePage/zangetsu.webp`;
const aizen = `${import.meta.env.BASE_URL}assets/img/build/homePage/aizen.webp`;
const ichigo = `${import.meta.env.BASE_URL}assets/img/build/homePage/ichigo.webp`;
const sindzi = `${import.meta.env.BASE_URL}assets/img/build/homePage/shinji.webp`;
const chad = `${import.meta.env.BASE_URL}assets/img/build/homePage/chad.webp`;
const cvinci = `${import.meta.env.BASE_URL}assets/img/build/homePage/quincy.webp`;
const toshiro = `${import.meta.env.BASE_URL}assets/img/build/homePage/toshiro.webp`;
const rendzi = `${import.meta.env.BASE_URL}assets/img/build/homePage/rendzi.webp`;
const mauri = `${import.meta.env.BASE_URL}assets/img/build/homePage/mayuri.webp`;
const orihime = `${import.meta.env.BASE_URL}assets/img/build/homePage/orihime.webp`;
const yrahara = `${import.meta.env.BASE_URL}assets/img/build/homePage/urahara.webp`;
const iahve = `${import.meta.env.BASE_URL}assets/img/build/homePage/yhwach.webp`;
const biakyia = `${import.meta.env.BASE_URL}assets/img/build/homePage/byakuya.webp`;
import { useEffect, useState } from "react";

function ImgBlock({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  // логика слайдера
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) =>
        // начинается сравнение фоток с 0 и проверям их по индексу, а не по кол-во и из-за этого -1
        currentImage === images.length - 1 ? 0 : currentImage + 1,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <article className={styles.imgBlock}>
      <img
        src={images[currentImage]}
        className={styles.imgBlock__img}
        alt="Картинка"
        loading="lazy"
      />
    </article>
  );
}

export function ImgBlocks() {
  const imagesLeft = [ichigoMask, bleach, zangetsu, aizen, ichigo];
  const imagesCenter = [sindzi, chad, cvinci, toshiro, rendzi];
  const imagesRight = [mauri, orihime, yrahara, iahve, biakyia];

  return (
    <div className={styles.imgBlocks}>
      <ImgBlock images={imagesLeft} />
      <ImgBlock images={imagesCenter} />
      <ImgBlock images={imagesRight} />
    </div>
  );
}

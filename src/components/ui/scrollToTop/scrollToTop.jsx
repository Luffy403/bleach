import { useEffect, useState } from "react";
import { ArrowTop } from "../../../icons/icons";
import styles from "./scrollToTop.module.css";

export function ScrollToTop() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    });
  }, []);
  function handleClick() {
    window.scrollTo({
      top: 0,
    });
  }
  return (
    <>
      {isShow && (
        <button className={styles.btnTop} onClick={handleClick}>
          <ArrowTop className={styles.top_icon} />
        </button>
      )}
    </>
  );
}

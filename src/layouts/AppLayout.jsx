import { Link,Outlet, useLocation } from "react-router-dom";
import styles from "./AppLayout.module.css";

import {
  GitHubIcon,
  InstagramIcon,
  TelegramIcon,
  VkIcon,
} from "../icons/icons";
import {  ScrollToTop } from "../components/ui/scrollToTop/scrollToTop";
import { Navbar } from "../components/navbar/navbar";

export function AppLayout() {
  const location = useLocation();
  const backPhone = location.pathname === "/";
  
  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.header__container}`}>
          <Link to="/" className={styles.link__logo}>
            <img className={styles.logo} src={`${import.meta.env.BASE_URL}assets/img/build/logo.jpg`}  alt="Логотип" />
          </Link>
          <Navbar />
        </div>
      </header>
      {backPhone ? (
        <main className="main">
          <ScrollToTop />
          <Outlet />
        </main>
      ) : (
        <main className="main__phone">
          <ScrollToTop />
          <Outlet />
        </main>
      )}
      <footer className={styles.footer}>
        <div className={`container ${styles.footer__container}`}>
            <div className={styles.footer__links}>
              <a
                href="https://www.instagram.com/_joker403_?igsh=MW9zMHB2bGY3cDYwOQ=="
                target="blank"
              >
                <InstagramIcon className={styles.social__link} />
              </a>
              <a href="https://github.com/Luffy403" target="blank">
                <GitHubIcon className={styles.social__link} />
              </a>
              <a
                href="https://t.me/Luffy403"
                target="blank"
                className={styles.footer__link}
              >
                <TelegramIcon className={styles.social__link} />
              </a>
              <a
                href="https://vk.ru/joker403"
                target="blank"
                className={styles.footer__link}
              >
                <VkIcon className={styles.social__link} />
              </a>
            </div>
        </div>
      </footer>
    </>
  );
}

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import {
  AnonsIcon,
  BurgerMenu,
  CharactersIcon,
  CloseIcon,
  Gift,
  Heart,
  HomeIcon,
  QuestionIcon,
} from "../../icons/icons";
export function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => {
      setShowDropdown(false);
    });
  }, []);

  useEffect(() => {
    if (showDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showDropdown]);

  return (
    <>
    {/* разметка дродаун меню, навигация для пк лежит в txt документе на пк */}
      <div className={styles.dropdown_menu}>
        <button
          className={styles.burger_btn}
          onClick={(e) => {
            e.stopPropagation();
            setShowDropdown(!showDropdown);
          }}
        >
          {showDropdown ? null : (
            <BurgerMenu className={styles.showDropdown__icon} />
          )}
        </button>
        <div className={`${styles.dropdown__overlay} ${showDropdown ? styles.open : ""}`}>
          <CloseIcon className={`${styles.showDropdown__icon} ${styles.close__icon}`} />
          <nav className={styles.dropdown}>
            <NavLink
              to=""
              className={({ isActive }) =>
                `${styles.dropdown_link} ${isActive ? "active_moblie" : ""}`
              }
            >
              <HomeIcon className={styles.dropdown_icon} />
              Главная
            </NavLink>
            <NavLink
              to="anons"
              className={({ isActive }) =>
                `${styles.dropdown_link} ${isActive ? "active_moblie" : ""}`
              }
            >
              <AnonsIcon className={styles.dropdown_icon} />
              Анонс
            </NavLink>
            <NavLink
              to="characters"
              className={({ isActive }) =>
                `${styles.dropdown_link} ${isActive ? "active_moblie" : ""}`
              }
            >
              <CharactersIcon className={styles.dropdown_icon} />
              Персонажи
            </NavLink>
            <NavLink
              to="donation"
              className={({ isActive }) =>
                `${styles.dropdown_link} ${isActive ? "active_moblie" : ""}`
              }
            >
              <Gift className={styles.dropdown_icon} />
              Пожертвование
            </NavLink>
            <NavLink
              to="thanks"
              className={({ isActive }) =>
                `${styles.dropdown_link} ${isActive ? "active_moblie" : ""}`
              }
            >
              <Heart className={styles.dropdown_icon} />
              Особая благодарность
            </NavLink>
            <NavLink
              to="faq"
              className={({ isActive }) =>
                `${styles.dropdown_link} ${isActive ? "active_moblie" : ""}`
              }
            >
              <QuestionIcon className={styles.dropdown_icon} />
              Частые вопросы
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

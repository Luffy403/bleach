import { useEffect } from "react";
import styles from "./Modal.module.css";
import { CloseIcon } from "../../../icons/icons";

export function Modal({ isOpen, onClose, title, children }) {
  // Блокировка скролла при открытом модальном окне
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Закрытие по Escape
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Не рендерим, если закрыто
  if (!isOpen) return null;

  // Закрытие по клику на оверлей
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.modal__close} onClick={onClose}>
          <CloseIcon className={styles.modal__close_icon} />
        </button>
        {title && <h2 className={styles.modal__title}>{title}</h2>}
        <div className={styles.modal__content}>{children}</div>
      </div>
    </div>
  );
}
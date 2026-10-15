import { useState, useEffect } from "react";
import { Modal } from "../../ui/modal/Modal";

export function InfoModal({children}) {
  const [isOpen, setIsOpen] = useState(false);

  // Плавное появление модального окна через 2 секунды
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Внимание!"
    >
      {children}
    </Modal>
  );
}
// начальная разметка базовой кнопки
import styles from './BaseBtn.module.css'

export function BaseBtn({className, children}){
    return <button className={`${styles.BaseBtn} ${className}`}>
        {children}
    </button>
}
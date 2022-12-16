import styles from './add-cart-button.module.scss';
import addButton from '../../assets/add.svg'
export interface AddCartButtonProps {
    className?: string;
}

export const AddCartButton = ({ className }: AddCartButtonProps) => {
    return <div className={`${styles.root} ${className}`}>
        <img src={addButton} className={styles.addButton} />
        <h2 className={styles.buttonText}>Add Card</h2></div>;
};

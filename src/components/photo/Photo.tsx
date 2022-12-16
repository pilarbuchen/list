import styles from './employee-photo.module.scss';
import userPhoto from '../../assets/user.svg'

export interface PhotoProps {
    className?: string;
    src: string;
}

export const Photo = ({ className, src }: PhotoProps) => {
    return <div className={`${styles.root} ${className}`}>
        <img src={userPhoto} className={styles.employee} />
    </div>;
};

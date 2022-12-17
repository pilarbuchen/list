import styles from './employee-photo.module.scss';
import { memo } from 'react';
import userPhoto from '../../assets/user.svg'

interface PhotoProps {
    className?: string;
    src: string;
}

const Photo = ({ className, src }: PhotoProps) => {
    return <div className={`${styles.root} ${className} ${styles.employee}`}>
        <img src={src} className={styles.employee} />
    </div>;
};

export default memo(Photo)
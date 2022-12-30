import styles from './search-bar.module.scss';
import searchIcon from '../../assets/search.svg'

export interface SearchBarProps {
    className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
    return <div className={`${styles.root} ${className}`}>
        <img src={searchIcon} className={styles.searchIcon} />
        <input className={styles.input} /></div>;
};

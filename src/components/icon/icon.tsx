import styles from './icon.module.scss';

export interface IconProps {
    className?: string;
}

export const Icon = ({ className }: IconProps) => {
    return <div className={`${styles.root} ${className}`}>
        <img src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg" />
    </div>;
};

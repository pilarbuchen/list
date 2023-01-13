import styles from './test-2.module.scss';
import {
    Accordion, Button
} from '@mui/material';

export interface Test2Props {
    className?: string;
}

export const Test2 = ({ className }: Test2Props) => {
    return <div className={`${styles.root} ${className}`}>Test2
        <div>
    <Button variant="outlined">Hello</Button>
    </div>
    </div>;
};

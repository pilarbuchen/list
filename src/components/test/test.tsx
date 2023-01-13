import styles from './test.module.scss';
import {
    Accordion, Button, Checkbox, Switch
} from '@mui/material';

export interface TestProps {
    className?: string;
}

export const Test = ({ className }: TestProps) => {
    return <div>
      <Checkbox  defaultChecked />
      <Checkbox  />
      <Checkbox disabled />
      <Checkbox  disabled checked />
       <Switch defaultChecked />
        <div />Test
        <div>
            <Button variant="outlined">Hello</Button>
        </div>
    </div>
};

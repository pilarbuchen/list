
import styles from './App.module.scss';
import { CardContainer } from './components/card-container/card-container3';

function App() {
    return (
        <div className={styles.App}>
            <CardContainer color="orange" columnTitle="To-Do"></CardContainer>
            <CardContainer color="red" columnTitle="Doing" />
            <CardContainer color="blue" columnTitle="Done" />
        </div>
    );
}

export default App;

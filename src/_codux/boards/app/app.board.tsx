import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () =>
        <App />,
    environmentProps: {
        canvasBackgroundColor: '#ffffff', windowBackgroundColor: '#fbfbfb', windowWidth: 900, windowHeight: 1150
    }
});

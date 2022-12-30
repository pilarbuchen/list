import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () =>
        <App />,
    environmentProps: {
        canvasBackgroundColor: '#ffffff', windowBackgroundColor: '#fdf7f7',
    }
});

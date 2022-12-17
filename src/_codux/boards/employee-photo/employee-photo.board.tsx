import { createBoard } from '@wixc3/react-board';
import Photo from '../../../components/photo/Photo';

export default createBoard({
    name: 'Photo',
    Board: () => <Photo src="https://static01.nyt.com/images/2022/05/05/arts/05bad-bunny1/05bad-bunny1-mediumSquareAt3X.jpg" />
});

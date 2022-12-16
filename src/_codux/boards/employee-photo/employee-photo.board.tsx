import { createBoard } from '@wixc3/react-board';
import { Photo } from '../../../components/employee-photo/employee-photo';

export default createBoard({
    name: 'Photo',
    Board: () => <Photo />
});

import { createBoard } from '@wixc3/react-board';
import { Test } from '../../../components/test/test';

export default createBoard({
    name: 'Test 3',
    Board: () => <Test />
});

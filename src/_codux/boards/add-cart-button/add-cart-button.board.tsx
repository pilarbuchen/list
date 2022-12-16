import { createBoard } from '@wixc3/react-board';
import { AddCartButton } from '../../../components/add-cart-button/add-cart-button';

export default createBoard({
    name: 'AddCartButton',
    Board: () => <AddCartButton />
});

// Required for JSX
import React from "react";
// Library for creating React component boards.
import { createBoard } from "@wixc3/react-board";
// The component to render on the board.
import { AddCartButton } from '../../../components/add-cart-button/add-cart-button';
   
// The board object.
export default createBoard({
 // The board’s name.
 name: "New Product",
 // Properties to supply the component with.
 Board:() => {
   return (
     <AddCartButton/>
   );
 },
 // Environmental settings for the component.
 environmentProps: { 
       windowHeight: 726,
       windowWidth: 1024,
       canvasWidth: 390,
 },
});
import { TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/system";
import QuantityButton from "./QuantityButton";
import { useState } from "react";

const StyledTableRow = styled(TableRow)({
  borderBottom: "2px solid #B6BBCB",
  height: "180px",
});

function CartItem({ item, itemImage, handleBtnClick, quantity }) {

  return (
    <StyledTableRow>
      <TableCell>
        <div className="product">
          <img src={itemImage + item.imageSrc + ".png"} alt="" />
          <p>
            {item.type} {item.name}
          </p>
        </div>
      </TableCell>
      <TableCell>
        <QuantityButton quantity={quantity} handleBtnClick={handleBtnClick} />
      </TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>$ {item.price * quantity}</TableCell>
      <TableCell>X</TableCell>
    </StyledTableRow>
  );
}

export default CartItem;

import { TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/system";
import QuantityButton from "./QuantityButton";
import { useState } from "react";

const StyledTableRow = styled(TableRow)({
  borderBottom: "2px solid #B6BBCB",
  height: "180px",
});

const StyledTableCell = styled(TableCell)({
  fontFamily: "Advent Pro",
  fontSize: "20px",
})

function CartItem({ item, itemImage, handleBtnClick, handleInputChange, quantity }) {

  return (
    <StyledTableRow>
      <StyledTableCell>
        <div className="product">
          <img src={itemImage + item.imageSrc + ".png"} alt="" />
          <p>
            {item.type} {item.name}
          </p>
        </div>
      </StyledTableCell>
      <StyledTableCell>
        <QuantityButton quantity={quantity} handleBtnClick={handleBtnClick} handleInputChange={handleInputChange} />
      </StyledTableCell>
      <StyledTableCell>$ {item.price}</StyledTableCell>
      <StyledTableCell>$ {item.price * quantity}</StyledTableCell>
      <StyledTableCell>X</StyledTableCell>
    </StyledTableRow>
  );
}

export default CartItem;

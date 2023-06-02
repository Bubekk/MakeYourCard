import { TableCell, TableRow, useThemeProps } from "@mui/material";
import { styled } from "@mui/system";
import QuantityButton from "./QuantityButton";
import ButtonUI from "../../../UI/ButtonUI";

const StyledTableRow = styled(TableRow)({
  borderBottom: "2px solid #B6BBCB",
  height: "180px",
});

const StyledTableCell = styled(TableCell)({
  fontFamily: "Advent Pro",
  fontSize: "20px",
});

function CartItem({ item, itemImage, handleQuantityChangeButton, handleQuantityChangeInput, removeFromCart, quantity }) {
  //handling delete button click
  const handleRemoveClick = (e) => {
    removeFromCart(item.id);
  };

  return (
    <StyledTableRow>
      <StyledTableCell>
        <div className="product">
          <img src={itemImage + item.imageSrc + ".png"} alt="" />
          <p>
            {item.type} {item.name} {item.description}
          </p>
        </div>
      </StyledTableCell>
      <StyledTableCell>
        <QuantityButton
          quantity={quantity}
          handleQuantityChangeButton={handleQuantityChangeButton}
          handleQuantityChangeInput={handleQuantityChangeInput}
          item={item}
        />
      </StyledTableCell>
      <StyledTableCell>$ {item.price}</StyledTableCell>
      <StyledTableCell>$ {item.price * item.quantity}</StyledTableCell>
      <StyledTableCell>
        <ButtonUI className="delete-item" onClick={handleRemoveClick} tag={"X"}></ButtonUI>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default CartItem;

import { Table, TableCell, TableBody, TableRow, TableContainer, TableHead } from "@mui/material";
import { styled } from "@mui/system";
import "./style/ShoppingCartStyle.scss";
import CartItem from "./UI/CartItem";
import { useState } from "react";

const StyledTableRowHead = styled(TableRow)({
  borderBottom: "2px solid #5F626B",
});

const StyledTableCellHead = styled(TableCell)({
  fontFamily: "Advent Pro",
  fontSize: "20px",
});

function ShoppingCart(props) {
  const items = props.items;
  const itemImage = "../../../../images/product_images/";

  const renderedProducts = () => {
    return items.map((item) => {
      const [quantity, setQuantity] = useState(item.quantity);

      const handleBtnClick = (value) => {
        if (value === "minus") {
          setQuantity((prevQuantity) => prevQuantity - 1);
        } else if (value === "plus") {
          setQuantity((prevQuantity) => prevQuantity + 1);
        }
      };

      const handleInputChange = (value) => {
        setQuantity(value);
      };

      return (
        <CartItem
          key={item.id}
          item={item}
          itemImage={itemImage}
          handleBtnClick={handleBtnClick}
          handleInputChange={handleInputChange}
          quantity={quantity}
        />
      );
    });
  };

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__header">
        <h1 className="shopping-cart__header__text">Shopping Cart</h1>
        <h2 className="shopping-cart__header__quantity">Items: 0</h2>
      </div>
      <div className="shopping-cart__table">
        <TableContainer>
          <Table>
            <TableHead>
              <StyledTableRowHead>
                <StyledTableCellHead>Products</StyledTableCellHead>
                <StyledTableCellHead>Quantity</StyledTableCellHead>
                <StyledTableCellHead>Price</StyledTableCellHead>
                <StyledTableCellHead>Total</StyledTableCellHead>
                <StyledTableCellHead>Remove</StyledTableCellHead>
              </StyledTableRowHead>
            </TableHead>
            <TableBody>{renderedProducts()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ShoppingCart;

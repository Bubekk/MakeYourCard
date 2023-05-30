import { Table, TableCell, TableBody, TableRow, TableContainer, TableHead } from "@mui/material";
import { styled } from "@mui/system";
import "./style/ShoppingCartStyle.scss";
import CartItem from "./UI/CartItem";
import { useState } from "react";

const StyledTableRowHead = styled(TableRow)({
  borderBottom: "2px solid #5F626B",
});

const StyledTableRow = styled(TableRow)({
  borderBottom: "2px solid #B6BBCB",
  height: "180px",
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

      return <CartItem key={item.id} item={item} itemImage={itemImage} handleBtnClick={handleBtnClick} quantity={quantity} />;
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
                <TableCell>Products</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Remove</TableCell>
              </StyledTableRowHead>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <TableCell>
                  <div className="product"></div> Temporary Product
                </TableCell>
                <TableCell> 3 </TableCell>
                <TableCell> $ 10 </TableCell>
                <TableCell> $ 30 </TableCell>
                <TableCell> X </TableCell>
              </StyledTableRow>
              {renderedProducts()}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ShoppingCart;

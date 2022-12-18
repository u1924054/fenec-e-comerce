import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";



const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Cistella de compra" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No hi han articles a la cistella</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Imatge</th>
                      <th>Descripció</th>
                      <th>Preu</th>
                      <th>Quantitat</th>
                      <th>Eliminar</th>


                      
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between ">
                  Subtotal
                  <span className="fs-4 fw-bold">{totalAmount}€</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                impostos i cost d'enviament es calcularan a la facturació
              </p>
              <div>
                <button className="buy__btn w-100 ">
                  <Link to="/checkout">Faturació</Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop"> Continua comprant</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}€</td>
      <td>{item.quantity}ud.</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          class="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;

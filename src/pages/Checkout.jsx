import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { updateProfile } from "firebase/auth";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { addDoc } from "firebase/firestore";
import { updateCurrentUser } from "firebase/auth";
import { cartActions } from "../redux/slices/cartSlice";

const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title="Facturació">
      <CommonSection title="Facturació" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Dades facturació</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Nom" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Correu electronic" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Numero de telèfon" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Adreça" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Ciutat" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Codi postal" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Pais" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Unitats totals: <span>{totalQty} article</span>
                </h6>
                <h6>
                  Subtotal: <span>{totalAmount}€</span>
                </h6>
                <h6>
                  <span>
                    Enviament: <br />
                    Enviament gratuit
                  </span>
                  <span>0€</span>
                </h6>

                <h4>
                  Cost total: <span>{totalAmount}€</span>
                </h4>
                <button className="buy__btn aut__btn w-100" >
                  Realitzar comanda
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

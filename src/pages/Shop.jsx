import React, { useState } from "react";
import useGetData from "../custom-hooks/useGetData";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import ProductsList from "../components/UI/ProductsList";

const Shop = () => {

  const { data: products } = useGetData("products");
  const[productsData, setProductsData] = useState(products);
  const[productsState, setProductsState] = useState("no filtered");
  
 
  const handleFilter = e => {
    const filterValue = e.target.value;
    if (filterValue === "samarreta") {
      const filteredProducts = products.filter(
        item => item.category === "samarreta"
      ); 

      setProductsData(filteredProducts);
      setProductsState("filtered");
    }

    else if (filterValue === "pantalo") {
      const filteredProducts = products.filter(
        item => item.category === "pantalo"
      );

      setProductsData(filteredProducts);
      setProductsState("filtered");
    }

    else if (filterValue === "jaqueta") {
      const filteredProducts = products.filter(
        item => item.category === "jaqueta"
      );

      setProductsData(filteredProducts);
      setProductsState("filtered");
    }

    else if (filterValue === "sabata") {
      const filteredProducts = products.filter(
        item => item.category === "sabata"
      );

      setProductsData(filteredProducts);
      setProductsState("filtered");
    }

    else if (filterValue === "complement") {
      const filteredProducts = products.filter(
        item => item.category === "complement"
      );

      setProductsData(filteredProducts);
      setProductsState("filtered");
    }

    else{ 
      setProductsData(products);
      setProductsState("filtered");
    }
  };

  const handleSearch = e => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter(item =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };


  return (
    <Helmet title="Shop">
      <CommonSection title="Productes" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filtrar per categoria</option>
                  <option value="samarreta">Samarretes</option>
                  <option value="pantalo">Pantalons</option>
                  <option value="jaqueta">Jaquetes</option>
                  <option value="sabata">Sabates</option>
                  <option value="complement">Complements</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Ordenar per</option>
                  <option value="ascending">Preu mes alt</option>
                  <option value="descending">Preu mes baix</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......"
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            
           {productsState === "no filtered" ? (
              <ProductsList data={products} />
            ) : (
               productsData.lenght === 0 ? (
                <h1 className="text-center fs-4">No hi ha productes</h1>
              ) : (
                  <ProductsList data={productsData} />
              )
            )}
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;

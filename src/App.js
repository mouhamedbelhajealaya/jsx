import React from "react";
import product from "./Product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import Card from "react-bootstrap/Card";
import "./App.css";

const firstName = "mohamed"; 

const App = () => {
  return (
    <div className="App">
      <Card className="Card">
        <Card.Body>
          <Card.Title>
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Price price={product.price} />
            <Description description={product.description} />
            <Image image={product.image} />
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="message">
        <p>
          Hello, {firstName ? firstName : "there"}!
        </p>
        {firstName && <img src={product.image} alt="Profile" />}
      </div>
    </div>
  );
};

export default App;


import React from "react";
import "./ListDessert.css";
import { Link } from "react-router-dom";

const ListDessert = () => {
  return (
    <div>
      <div className="dessert-contents-wrapper">
        <h1>Kategori Dessert</h1>
        <div className="dessert-contents">
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Tahu Campur</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Tahu Campur</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Tahu Campur</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Tahu Campur</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Tahu Campur</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Tahu Campur</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>© 2022 Kulapedia.com. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ListDessert;

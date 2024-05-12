import React from "react";
import "./ListFood.css";
import { Link } from "react-router-dom";

const ListFood = () => {
  return (
    <div>
      <div className="food-contents-wrapper">
        <h1>Kategori Makanan</h1>
        <div className="food-contents">
          <div className="card-listFood">
            <img
              src="src/assets/tahu campurr.jpg"
              className="card-listFood-img-top"
              alt="..."
            />
            <div className="card-listFood-body">
              <h5 className="card-listFood-title">Tahu Campur</h5>
              <p className="card-listFood-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listFood">
            <img
              src="src/assets/tahu campurr.jpg"
              className="card-listFood-img-top"
              alt="..."
            />
            <div className="card-listFood-body">
              <h5 className="card-listFood-title">Tahu Campur</h5>
              <p className="card-listFood-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listFood">
            <img
              src="src/assets/tahu campurr.jpg"
              className="card-listFood-img-top"
              alt="..."
            />
            <div className="card-listFood-body">
              <h5 className="card-listFood-title">Tahu Campur</h5>
              <p className="card-listFood-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listFood">
            <img
              src="src/assets/tahu campurr.jpg"
              className="card-listFood-img-top"
              alt="..."
            />
            <div className="card-listFood-body">
              <h5 className="card-listFood-title">Tahu Campur</h5>
              <p className="card-listFood-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listFood">
            <img
              src="src/assets/tahu campurr.jpg"
              className="card-listFood-img-top"
              alt="..."
            />
            <div className="card-listFood-body">
              <h5 className="card-listFood-title">Tahu Campur</h5>
              <p className="card-listFood-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listFood">
            <img
              src="src/assets/tahu campurr.jpg"
              className="card-listFood-img-top"
              alt="..."
            />
            <div className="card-listFood-body">
              <h5 className="card-listFood-title">Tahu Campur</h5>
              <p className="card-listFood-text">
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

export default ListFood;

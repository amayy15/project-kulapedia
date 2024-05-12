import React from "react";
import "./ListDrink.css";
import { Link } from "react-router-dom";

const ListDrink = () => {
  return (
    <div>
      <div className="drink-contents-wrapper">
        <h1>Kategori Minuman</h1>
        <div className="drink-contents">
          <div className="card-listDrink">
            <img
              src="src/assets/es cendol.jpg"
              className="card-listDrink-img-top"
              alt="..."
            />
            <div className="card-listDrink-body">
              <h5 className="card-listDrink-title">Card title</h5>
              <p className="card-listDrink-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDrink">
            <img
              src="src/assets/es cendol.jpg"
              className="card-listDrink-img-top"
              alt="..."
            />
            <div className="card-listDrink-body">
              <h5 className="card-listDrink-title">Card title</h5>
              <p className="card-listDrink-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDrink">
            <img
              src="src/assets/es cendol.jpg"
              className="card-listDrink-img-top"
              alt="..."
            />
            <div className="card-listDrink-body">
              <h5 className="card-listDrink-title">Card title</h5>
              <p className="card-listDrink-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDrink">
            <img
              src="src/assets/es cendol.jpg"
              className="card-listDrink-img-top"
              alt="..."
            />
            <div className="card-listDrink-body">
              <h5 className="card-listDrink-title">Card title</h5>
              <p className="card-listDrink-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDrink">
            <img
              src="src/assets/es cendol.jpg"
              className="card-listDrink-img-top"
              alt="..."
            />
            <div className="card-listDrink-body">
              <h5 className="card-listDrink-title">Card title</h5>
              <p className="card-listDrink-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDrink">
            <img
              src="src/assets/es cendol.jpg"
              className="card-listDrink-img-top"
              alt="..."
            />
            <div className="card-listDrink-body">
              <h5 className="card-listDrink-title">Card title</h5>
              <p className="card-listDrink-text">
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

export default ListDrink;

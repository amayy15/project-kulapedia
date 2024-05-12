import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="navbar"
        style={{ position: "fixed", width: "100%", top: 0, zIndex: 100 }}
      >
        <img src="src/assets/wayang-removebg.png" alt="" className="logo" />
        <div style={{ display: "flex" }}>
            <p><span class="kula">Kula</span><span class="pedia">pedia</span></p>
        </div>

        <ul className="navbar-right">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#aboutUs">About Us</a>
          </li>
          <li>
            <a href="#categories">Categories</a>
          </li>
          <li>
            <a href="#categories">Recipe's</a>
          </li>
          <li>
            <a href="#categories">Contact Us</a>
          </li>
        </ul>
      </div>
      <div id="header" className="header">
        <div className="header-contents">
          <h2>Lamongan</h2>
          <h2>Foodie</h2>
          <p>Uncover Lamongan's culinary scene - Tips, reviews, and more!</p>
          <button>Search Our Website</button>
          <img src="src/assets/logoo-removebg.png" alt="" className="medsos" />
        </div>
        <div className="header-img">
          <img
            src="src/assets/ayamm.png"
            alt=""
            className="imgheader"
          />
        </div>
      </div>
      <div id="aboutUs" className="aboutUs">
        <div className="aboutUs-img">
          <img src="src\assets\sotoo.png" alt=""/>
        </div>
        <div className="aboutUs-contents">
          <h2>~ About Us ~</h2>
          <p>
            Selamat datang di Kulapedia.com! Kami adalah sumber terkemuka untuk
            semua hal yang berkaitan dengan kuliner di daerah Anda. Di sini,
            kami berkomitmen untuk memberikan informasi terkini dan terpercaya
            tentang tempat makan terbaik, makanan khas, dan pengalaman kuliner
            yang tak terlupakan di daerah Anda. Misi kami adalah untuk
            memperkenalkan Anda pada kekayaan kuliner daerah Anda. Kami percaya
            bahwa makanan adalah cara yang luar biasa untuk mengeksplorasi
            budaya, sejarah, dan identitas suatu tempat. Dengan membawa Anda
            melalui perjalanan rasa yang menakjubkan, kami berharap dapat
            meningkatkan pengalaman Anda dalam menjelajahi keanekaragaman
            kuliner dunia.
          </p>
          <br></br>
          <Link to="/tentang" className="button-link">
            Lainnya
          </Link>
        </div>
      </div>
      <div id="categories" className="categories">
        <div className="categories-contents">
          <h2>Categories</h2>
          <div className="card-row">
            <div
              className="card-categories col-md-4"
              style={{ backgroundImage: "url('src/assets/tahu campurr.jpg')" }}
            >
              <h3>Food</h3>
              <p>
                Menampilkan hidangan khas dari kota Lamongan
              </p>
              <Link to="/food" className="button-links">
                Go to category
              </Link>
            </div>
            <div
              className="card-categories col-md-4"
              style={{ backgroundImage: "url('src/assets/es cendol.jpg')" }}
            >
              <h3>Drink</h3>
              <p style={{color:"black"}}>Menampilkan minuman khas dari kota Lamongan</p>
              <Link to="/drink" className="button-links">
                Go to category
              </Link>
            </div>
            <div
              className="card-categories col-md-4"
              style={{ backgroundImage: "url('src/assets/wingko.png')" }}
            >
              <h3>Dessert</h3>
              <p style={{color:"black"}}>Menampilkan hidangan khas dari kota Lamongan</p>
              <Link to="/dessert" className="button-links">
                Go to category 
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p><span class="kula">Kula</span><span class="pedia">pedia</span></p>
        <h1>Discover an unforgettable culinary and historical adventure
            with Kulipedia! 
        </h1>
      </footer>
    </div>
  );
};

export default Home;

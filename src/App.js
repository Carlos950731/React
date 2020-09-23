import React from 'react';
import './App.css';
import img1 from "./img/img1.PNG";
import img2 from "./img/img2.PNG";
import img3 from "./img/img3.PNG";
import imgp1 from "./img/imgp1.png";
import imgp2 from "./img/imgp2.png";
import imgp3 from "./img/imgp3.png";
import imgp4 from "./img/imgp4.png";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <p className="a"></p>
          <div className="">
            <a className="" href="#"></a>
            <a></a>
          </div>
        </div>
      </header>
      <section className="section1">
        <div className="sect1">
          <h2 className="title" >ARGES</h2>
        </div>
        <nav className="menu">
          <a className="menu-item">Home</a>
          <a className="menu-item">About us</a>
          <a className="menu-item">Services</a>
          <a className="menu-item">News</a>
          <a className="menu-item">Proyects</a>
          <a className="menu-item">Shop</a>
          <a className="menu-item">Contact us</a>
        </nav>
      </section>
      <section className="section2">
        <div className="sect2">
          <h2 className="title2">WELCOME TO THE AGRES</h2>
          <p>We stand behind your success</p>
          <div className="button-class">
            <button className="buttonsect2">OUR PROJECT</button>
            <button className="buttonsect2">LEARN MORE</button>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="sect3">
          <h2 className="title3">Our Services</h2>
          <div className="linea">
          </div>
          <div className="content-card">
            <div className="card-body">
              <img src={img1} className="img" />
              <div className="padi">
                <h5 className="title-card">Management training</h5>
                <p className="text-card">We support and help people increase management experience.</p>
              </div>
            </div>
            <div className="card-body">
              <img src={img2} className="img" />
              <div className="padi">
                <h5 className="title-card">Business consulting</h5>
                <p className="text-card">If you are going to use a passage of Lorem Ipsum, you need to be sure.</p>
              </div>
            </div>
            <div className="card-body">
              <img src={img3} className="img" />
              <div className="padi">
                <h5 className="title-card">Finalcial Planning</h5>
                <p className="text-card">Analisys the business plan for deployment in the market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="sect4">
          <h2 className="title3">Why Shosse Us</h2>
          <div className="linea">
          </div>
          <div className="content-card2">
          <div className="card-body2">
              <img src={imgp1} className="imgp" />
              <div className="padi2">
                <h5 className="title-card2">EXPERIENCED ADVISER</h5>
              </div>
            </div>
            <div className="card-body2">
              <img src={imgp2} className="imgp" />
              <div className="padi2">
                <h5 className="title-card2">GREAT IDEAS</h5>
              </div>
            </div>
            <div className="card-body2">
              <img src={imgp3} className="imgp" />
              <div className="padi2">
                <h5 className="title-card2">WORLDWIDE SYSTEM</h5>
              </div>
            </div>
            <div className="card-body2">
              <img src={imgp4} className="imgp" />
              <div className="padi2">
                <h5 className="title-card2">SECURITY INFORMATION</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="sect5">

        </div>
      </section>

    </div>
  );
}


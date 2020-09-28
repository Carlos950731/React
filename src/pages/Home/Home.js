import React from "react";
import Slider from "react-slick";

import '../../App.css';
import img1 from "../../img/img1.PNG";
import img2 from "../../img/img2.PNG";
import img3 from "../../img/img3.PNG";
import imgp1 from "../../img/imgp1.png";
import imgp2 from "../../img/imgp2.png";
import imgp3 from "../../img/imgp3.png";
import imgp4 from "../../img/imgp4.png";
import expancionpng from "../../img/expancion.png";
import trainingjpg from "../../img/training.jpg";
import businessjpgg from "../../img/business.jpg";
import logo1 from "../../img/logo1.PNG";
import logo2 from "../../img/logo2.PNG";
import logo3 from "../../img/logo3.PNG";
import logo4 from "../../img/logo4.PNG";
import logo5 from "../../img/logo5.PNG";
import latest1 from "../../img/latest1.PNG";
import latest2 from "../../img/latest2.PNG";
import latest3 from "../../img/latest3.PNG";

import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
	return (
		<div className="Home">
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
          <p className="psect2">We stand behind your success</p>
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
              <div className="oculto">
                <p className="textone">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                <button className="buttonone" >READ MORE</button>
              </div>
            </div>
            <div className="card-body2">
              <img src={imgp2} className="imgp" />
              <div className="padi2">
                <h5 className="title-card2">GREAT IDEAS</h5>
              </div>
              <div className="oculto">
                <p className="textone">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                <button className="buttonone" >READ MORE</button>
              </div>
            </div>
            <div className="card-body2">
              <img src={imgp3} className="imgp" />
              <div className="padi2">
                <h5 className="title-card2">WORLDWIDE SYSTEM</h5>
              </div>
              <div className="oculto">
                <p className="textone">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                <button className="buttonone" >READ MORE</button>
              </div>
            </div>
            <div className="card-body2">
              <img src={imgp4} className="imgp" />
              <div className="padi2">
                <h5 className="title-card2">SECURITY INFORMATION</h5>
              </div>
              <div className="oculto">
                <p className="textone">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                <button className="buttonone" >READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="sect5">
          <div className="contect1">
            <h2 className="title4">Request A Call Back</h2>
            <div className="linea2">
            </div>
            <p className="parra">Leave your information and email address. We will call back and advise you.</p>
          </div>
          <div className="contect2">
            <input type="text" className="boxi" placeholder="Your Name"></input>
            <input type="number" className="boxi" placeholder="Phone Number"></input>
            <select className="form-control" id="exampleFormControlSelect1" placeholder="Subject">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button className="buttonsect3">SUBMIT</button>
          </div>
        </div>
      </section>
      <section className="section6">
        <div className="sect6">
          <h2 className="title3">Featured Proyects</h2>
          <div className="linea">
          </div>
          <div className="contenedorcard6">
            <div className="content-card6 card-1">
              <div className="card-imagen">
                <div className="content-text6">
                  <h5 className="title-cardt">System Expancion</h5>
                  <div className="oculto2">
                    <p className="textone">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="buttonone" >READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-card6 card-2">
              <div className="card-imagen">
                <div className="content-text6">
                  <h5 className="title-cardt">Training Skill</h5>
                  <div className="oculto2">
                    <p className="textone">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="buttonone" >READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-card6 card-3">
              <div className="card-imagen">
                <div className="content-text6">
                  <h5 className="title-cardt">Business Consulting</h5>
                  <div className="oculto2">
                    <p className="textone">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="buttonone" >READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section7">
        <div className="sect7">
          <div className="contectsect7">
            <h1 className="hisect7">450</h1>
            <p className="psect7">PROYECTS</p>
          </div>
          <div className="contectsect7">
            <h1 className="hisect7">205</h1>
            <p className="psect7">ADVISOR</p>
          </div>
          <div className="contectsect7">
            <h1 className="hisect7">95%</h1>
            <p className="psect7">SATISFACTION RATE</p>
          </div>
        </div>
      </section>
      <section className="section8">
        <div className="sect8">
          <h2 className="title3">Latest From News</h2>
          <div className="linea"></div>
          <div className="contentcard8">
            <div className="card-body8">
              <img src={latest1} className="imgcard8" />
              <div className="padi8">
                <h5 className="title-card8">Recruiting Managerial Staff</h5>
                <div className="contenttext8">
                  <p className="textp8">Nov 10, 2017</p>
                  <div className="lineav"></div>
                  <p className="textp81">Admin</p>
                </div>
                <p className="text-card8">To take trivial example, which of us ever und takes laborious physical exercise, except to obtain some advantage from it.</p>
                <button className="button8" >READ MORE</button>
              </div>
            </div>
            <div className="card-body8">
              <img src={latest2} className="imgcard8" />
              <div className="padi8">
                <h5 className="title-card8">Construction Investment Plan</h5>
                <div className="contenttext8">
                  <p className="textp8">Nov 22, 2017</p>
                  <div className="lineav"></div>
                  <p className="textp81">Admin</p>
                </div>
                <p className="text-card8">To take trivial example, which of us ever und takes laborious physical exercise, except to obtain some advantage from it.</p>
                <button className="button8" >READ MORE</button>
              </div>
            </div>
            <div className="card-body8">
              <img src={latest3} className="imgcard8" />
              <div className="padi8">
                <h5 className="title-card8">System Security Upgrade</h5>
                <div className="contenttext8">
                  <p className="textp8">Nov 30, 2017</p>
                  <div className="lineav"></div>
                  <p className="textp81">Admin</p>
                </div>
                <p className="text-card8">To take trivial example, which of us ever und takes laborious physical exercise, except to obtain some advantage from it.</p>
                <button className="button8" >READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section9">
        <div className="sect9">
          <h2 className="title3">Business Partners</h2>
          <div className="linea">
          </div>
          <div className="logossect9">
            <img src={logo1} className="imglogo" />
            <img src={logo2} className="imglogo" />
            <img src={logo3} className="imglogo" />
            <img src={logo4} className="imglogo" />
            <img src={logo5} className="imglogo" />
          </div>
        </div>
      </section>
      <section className="section10">
        <div className="sect10">
          <h2 className="title10">Testimonials</h2>
          <div className="linea10"></div>
          <div className="carrusel">
          <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
          </div>
        </div>
      </section>
      <section className="section11">
        <div className="sect11">
          <h2 className="title3">Sign Up</h2>
          <div className="linea"></div>
          <p className="text11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua</p>
          <div className="inputcorreo">
            <input type="email" class="inputemail" placeholder="email@example.com"></input>
            <button className="button11" >SUBSCRIBE</button>
          </div>
        </div>
      </section>
      <Footer/>
		</div>
	)
}
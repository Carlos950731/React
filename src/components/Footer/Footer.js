import React from "react";
import gallery1 from "../../img/gallery1.jpeg";
import gallery2 from "../../img/gallery2.jpeg";
import gallery3 from "../../img/gallery3.jpeg";
import gallery4 from "../../img/gallery4.jpeg";
import gallery5 from "../../img/gallery5.jpg";
import gallery6 from "../../img/gallery6.jpeg";


export const Footer = () => {
	return (
		<div className="Footer">
			<section className="section12">
				<div className="sect12">
					<div className="conttitleone">
						<h2 className="title12">ARGES</h2>
						<p className="parra12">On the oder hand, we denounve with righteous indignation and dislike men who are so beguiled and demoralized the charms of pleasure of.</p>
					</div>
					<div className="contcontact">
						<h3 className="title12">CONTACT US</h3>
						<p className="parra12">379 5TH Ave New York, Nyc 10018</p>
						<p className="parra12">contac@gmail.com</p>
						<p className="parra12">(+1) 96 716 6879</p>
						<p className="parra12">(+1) 96 716 6897</p>
					</div>
					<div className="contentcompany">
						<h3 className="title12">COMPANY</h3>
						<div className="contul">
							<ul className="contentparra">
								<li className="parra12">Home</li>
								<li className="parra12">Proyects</li>
								<li className="parra12">Services</li>
								<li className="parra12">About Us</li>
								<li className="parra12">Contact</li>
							</ul>
							<ul className="contentparra">
								<li className="parra12">Blogs</li>
								<li className="parra12">404 Page</li>
								<li className="parra12">Shop</li>
								<li className="parra12">Elements</li>
								<li className="parra12">Typography</li>
							</ul>
						</div>
					</div>
					<div className="contentfotos">
						<h3 className="title12">GALLERY</h3>
						<div className="galleryfoto">
							<img src={gallery1} className="imggallery" />
							<img src={gallery2} className="imggallery" />
							<img src={gallery3} className="imggallery" />
							</div>
							<div className="galleryfoto">
							<img src={gallery4} className="imggallery" />
							<img src={gallery5} className="imggallery" />
							<img src={gallery6} className="imggallery" />
						</div>
					</div>
				</div>
			</section>
			<div className="barrafooter">
<h4 className="titlefooter">Copyright @ 2018 Desingned by pencilblue. All rights reserved.</h4>
			</div>
		</div>
	)
}
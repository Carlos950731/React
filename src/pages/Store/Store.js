import React from "react"
import { SearchOutlined, TeamOutlined, HeartOutlined, RestOutlined, SettingOutlined } from '@ant-design/icons';

export const Store = () => {
	return (
		<div className="Store">
			<header className="app-store">
				<div className="content-store">
					<p className="parra-store">Mid-season sale up to 20% OFF. Use code "SALEOFF20"</p>
				</div>
			</header>
			<section className="section-one">
				<div className="content-busca">
					<div className="search">
						<p className="searchtext">Search Products</p>
						<SearchOutlined />
					</div>
					<h1 className="title-a">ARGES</h1>
					<div className="content-icon">
						<div className="icon-search"><TeamOutlined /></div>
						<div className="icon-search"><HeartOutlined /></div>
						<div className="icon-search"><RestOutlined /></div>
						<div className="icon-search"><SettingOutlined /></div>
					</div>
				</div>

				<div className="menu-search">
					<div className="linea-search"></div>
					<div className="menu-a">
						<a className="asearch">Home</a>
						<a className="asearch">Shop</a>
						<a className="asearch">Blog</a>
						<a className="asearch">Portfolio</a>
						<a className="asearch">Pages</a>
						<a className="asearch">Contact Us</a>
					</div>
				</div>
			</section>
			<section className="section-two">
				<div className="content-fotos">
					
				</div>
			</section>

		</div>
	)
}

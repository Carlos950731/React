import React from "react"

export const SectionCard = () => {
	const dummyCard = [
		{ id: 1, title: "Top Trending", categoria: "For Women's", coleccion: "Collection Sneaker 2020", img: "https://images-na.ssl-images-amazon.com/images/I/81oafA%2BPxOL._AC_SX575_.jpg" },
		{ id: 2, title: "Top Acessories", categoria: "For Men's", coleccion: "Collection Sneaker 2020", img: "https://images-na.ssl-images-amazon.com/images/I/51PxeXuCW3L._AC_UY500_.jpg" }
	]

	return (
		<div className="SectionCard">
			<div className="contenedor-card">
				{dummyCard?.map((item, index) =>
					<div key={index} className="contend-background" style={{ backgroundImage: `url(${item.img})` }}>

						<h1 className="title-card">{item.title}</h1>
						<p className="parra-card">{item.categoria}</p>
						<p className="parra-card2">{item.coleccion}</p>

					</div>
				)}
			</div>
			<div className="contenedor-text">
				<h1 className="title-new">New Trending Products</h1>
				<div className="linea-card"></div>
				<p className="parra-accu">Accunsam vitae pede lacus ut ullamcorper sollicitudin quisque libero est.</p>	
			</div>
		</div>
	)
}
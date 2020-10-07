import React from "react"
import Slider from "react-slick";

export const SectionCaroucel = () => {
	const dummyCarousel = [
		{ id: 1, title: "Men's Sunglasses", subtitle: "Sale Offer 20% Off This Week", img: "https://image.freepik.com/foto-gratis/opinion-sobremesa-hombres-moda-accesorios-viajar-concepto-tecnologia-articulo-esencial-caballeros-adolescentes-o-adultos-viaje-dias-fiesta-viaje-mezcla-objeto-madera-rustica-moderna_1921-597.jpg" },
		{ id: 2, title: "Men's Sunglasses", subtitle: "Sale Offer 20% Off This Week", img: "https://us.123rf.com/450wm/sidelnikov/sidelnikov1604/sidelnikov160400392/55581534-vista-superior-de-la-foto-de-los-objetos-sobre-la-mesa-de-madera-hay-de-los-hombres-de-la-camisa-cin.jpg?ver=6" },
		{ id: 3, title: "Men's Sunglasses", subtitle: "Sale Offer 20% Off This Week", img: "https://image.freepik.com/foto-gratis/clasico-hombres-casual-trajes-accesorios-mesa_1357-162.jpg" },
		{ id: 4, title: "Men's Sunglasses", subtitle: "Sale Offer 20% Off This Week", img: "https://mensandbeauty.com/wp-content/uploads/2019/07/moda-para-hombre-prendas-calzado-ropa-complementos-accesorios-4.jpg" }

	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (

		<div className="Section-Caroucel">
			<div className="contenedor-caroucel">
				<Slider {...settings}>
					{dummyCarousel?.map((item, index) =>
						<div key={index}  >
							<div className="algo" style={{ backgroundImage: `url(${item.img})` }}>
								<div className="content-buton">
								<button className="button-price">GOOD PRICE</button>
								<p className="titulo-carousel">{item.subtitle}</p>
								</div>
								<h1 className="titu-carosule" >{item.title}</h1>
								<button className="button-shop">SHOPPING NOW</button>
							</div>
						</div>
					)}
				</Slider>
			</div>

		
		</div>
		
	)
}
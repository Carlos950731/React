import React from "react"
import { Header } from "../../components/Header/Header";
import { SectionCaroucel } from "../../components/PageStore/SectionCaroucel/SectionCaroucel";
import { SectionCard } from "../../components/PageStore/SectionCard/SectionCard";
import { SectionFotos } from "../../components/PageStore/SectionFotos/SectionFotos";
import {  SectionInsta } from "../../components/PageStore/SectionInsta/SectionInsta";
import {  SectionFooterStore } from "../../components/PageStore/FooterStore/FooterStore";

export const Store = () => {
	const dommyMenu = [
		{ id: 1, name: "Home" },
		{ id: 2, name: "Shop" },
		{ id: 3, name: "Blog" },
		{ id: 4, name: "Portafolio" },
		{ id: 5, name: "Pages" },
		{ id: 6, name: "Contact" }
	]
	return (
		<div className="Store">
			<Header
				dommyMenu={dommyMenu}
				oferta='Mid-season sale up to 20% OFF. Use code "SALEOFF20"'
			/>
			<SectionCaroucel />
			<SectionCard/>
			<SectionFotos/>
			<SectionInsta/>
			<SectionFooterStore/>
		
			
		</div>
	)
}

import React from "react"
import { HeaderContactus } from "../../components/PageContactus/HeaderContactus/HeaderContacts/HeaderContactus";
import { Sectioninfo } from "../../components/PageContactus/HeaderContactus/SectionInformation/SectionInformation";
import { SectionMaps } from "../../components/PageContactus/HeaderContactus/SectionMaps/SectionMaps";
import { FooterContactus } from "../../components/PageContactus/HeaderContactus/FooterContactus/FooterContactus";
export const Contactus = () => {

	return (
		<div className="Contactus">
			<HeaderContactus />
			<Sectioninfo />
			<SectionMaps />
			<FooterContactus />
		</div>
	)
}

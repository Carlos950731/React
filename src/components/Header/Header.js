import React from "react"
import { SearchOutlined, TeamOutlined, HeartOutlined, RestOutlined, SettingOutlined } from '@ant-design/icons';

export const Header = ({ dommyMenu, oferta }) => {

    return (
        <div className="Header">
            <header className="app-store">
                <div className="content-store">
                    <p className="parra-store">{oferta}</p>
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
                        {dommyMenu?.map((item, index) =>
                            <a className="asearch" key={index}>{item.name}</a>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
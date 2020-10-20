import React from "react"
import { MailOutlined, PhoneOutlined, DownCircleOutlined, MenuOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';


export const HeaderContactus = () => {
    const dummyMenucontact = [
        { id: 1, text: "HOME" },
        { id: 2, text: "ABOUT" },
        { id: 3, text: "COURSES" },
        { id: 4, text: "EVENT" },
        { id: 5, text: "BLOG" },
        { id: 6, text: "CONTACT" },
        { id: 7, text: "SHOP" }

    ]
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    Login
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    Registation
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    English
            </a>
            </Menu.Item>
        </Menu>
    );


    const menusect = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    HOME
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    ABOUT
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    COURSES
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    EVENT
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    BLOG
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    CONTACT
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    SHOP
            </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="HeaderContactus">
            <div className="header-contact">
                <div className="cont-phone">

                    <div className="icon-contact">
                        <PhoneOutlined />
                    </div>
                    <p className="phone">+124 5678 91050</p>
                    <div className="line-cont"></div>
                    <div className="icon-contact">
                        <MailOutlined />
                    </div>
                    <p className="phone">example@arges.net</p>
                </div>
                <div className="cont-login">
                    <p className="lgn-text">Login</p>
                    <div className="line-conte"></div>
                    <p className="lgn-text">Registation</p>
                    <div className="line-conte"></div>
                    <p className="lgn-text">English</p>
                </div>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <DownCircleOutlined className="ant-iconus" />
                    </a>
                </Dropdown>
            </div>
            <section className="sect-menu">
                <h1 className="title-menu">ARGES</h1>
                <div className="contenedor-menu">
                    {dummyMenucontact?.map((item, index) =>
                        <div key={index} className="cont-menu">
                            <p className="text-menu">{item.text}</p>
                            <div className="line-conter"></div>
                        </div>
                    )}
                    <Dropdown overlay={menusect}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <MenuOutlined className="ant-icon" />
                        </a>
                    </Dropdown>
                </div>

            </section>
        </div>
    )
}

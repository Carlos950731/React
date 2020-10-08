import React from "react"
import { Input } from 'antd';
import { AudioOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined, LinkedinOutlined, GooglePlusOutlined, YoutubeOutlined } from '@ant-design/icons';


const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);
export const SectionFooterStore = () => {
    const dummyCustomer = [
        { id: 1, title: "Clothing" },
        { id: 2, title: "Shoes" },
        { id: 3, title: "Handbag" },
        { id: 4, title: "Accessories" },
        { id: 5, title: "Fashion" },
    ]
    const dummyInformation = [
        { id: 1, title: "About Us" },
        { id: 2, title: "Contact Us" },
        { id: 3, title: "My Orders" },
        { id: 4, title: "Terms & Conditions" },
        { id: 5, title: "Returns & Exchanges" },
    ]
    const dummyInconjoin = [
        { id: 1, icon: <FacebookOutlined /> },
        { id: 2, icon: <InstagramOutlined /> },
        { id: 3, icon: <TwitterOutlined /> },
        { id: 4, icon: <LinkedinOutlined /> },
        { id: 5, icon: <GooglePlusOutlined /> },
        { id: 6, icon: <YoutubeOutlined /> }

    ]
    return (
        <div className="SectionFooterStore">
            <div className="contenedor-footerstore">
                <div className="cont-arges">
                    <h1 className="title-arges">Arges</h1>
                    <p className="parra-we">We are a team of designers and developers that create high quality Magento, Wordpress, Prestashop, Opencart.</p>
                    <p className="parra-adres">ADDRESS: 6688 Princess Road, London, Greater London</p>
                    <p className="parra-phone">PHONE: (012) 800 456 789-987</p>
                    <p className="parra-email">EMAIL: Contact@plazathemes.com</p>
                </div>
                <div className="cont-customer">
                    <h1 className="title-customer">Customer Care</h1>
                    {dummyCustomer?.map((item, index) =>
                        <div key={index} className="content-cust">
                            <p className="parra-cust">{item.title}</p>
                        </div>
                    )}
                </div>
                <div className="cont-infor">
                    <h1 className="title-infor">Information</h1>
                    {dummyInformation?.map((item, index) =>
                        <div key={index} className="content-infor">
                            <p className="parra-infor">{item.title}</p>
                        </div>
                    )}
                </div>
                <div className="cont-join">
                    <h1 className="title-join">Join Our Newsletter Now</h1>
                    <p className="parra-join">Get E-mail updates about our latest shop and special offers.</p>
                    <Search
                        placeholder="Enter your e-mail"
                        enterButton="SUBCRIBE"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                    <div className="conte-icon">
                        {dummyInconjoin?.map((item, index) =>
                            <div key={index} className="content-iconjoin">
                                <p className="parra-infor">{item.icon}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
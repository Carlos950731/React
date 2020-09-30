import React from "react"
import { Form, Input, Button, Checkbox } from 'antd';
import FormList from "antd/lib/form/FormList";
import { createFromIconfontCN, TwitterOutlined, GooglePlusOutlined, LinkedinOutlined } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export const Login = () => {
	const onFinish = values => {
		console.log('Success:', values);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className="container-login">

		<div className="LoginP">
			<div className="Login">
				<h4 className="titlelogin">WELCOME TO</h4>
				<h1 className="titlelo">ARGES</h1>
				<p className="parralogin">Log in to get in the moment updates on things that interest you.</p>
				<Form className="formulario"
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<div className="Form-item">
						<Form.Item
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input placeholder="USERNAME" />
						</Form.Item>
					</div>
					<div className="Form-item">
						<Form.Item
							name="password"
							rules={[{ required: true, message: 'Please input your password!' }]}
						>
							<Input.Password placeholder="PASSWORD" />
						</Form.Item>
					</div>
					<div className="buttonlogin">
						<Form.Item >
							<Button type="primary" htmlType="submit">
								SIGN IN
                        </Button>
						</Form.Item>
					</div>
				</Form>
				<div className="textlogin">
					<p className="loginp">Don't have an account?</p>
					<p className="plogin">Sign Up Now</p>
				</div>
				<div className="contlineas">
					<div className="linealogin"></div>
					<p className="textlinea">Or</p>
					<div className="linealogin"></div>
				</div>
				<div className="contsocial">
					<p className="textsocial">Continue whith social media</p>
					<div className="conticon">
						<div className="iconposi">
							<IconFont type="icon-facebook" />
						</div>
						<div className="iconposi">
							<TwitterOutlined />
						</div>
						<div className="iconposi">
							<GooglePlusOutlined />
						</div>
						<div className="iconposi">
							<LinkedinOutlined />
						</div>
					</div>
				</div>
			</div>
			<div className="fondimg">
				<h1 className="titlefond">ARGES</h1>
				<p className="parrafond">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
			</div>
		</div>
		</div>

	);
}
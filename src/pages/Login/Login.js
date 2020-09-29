import React from "react"
import { Form, Input, Button, Checkbox } from 'antd';
import FormList from "antd/lib/form/FormList";

export const Login = () => {
	const onFinish = values => {
		console.log('Success:', values);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className="Login">
			<h4>WELCOME TO</h4>
			<h1>ARGES</h1>
			<p>Log in to get in the moment updates on things that interest you.</p>
			<Form className="formulario"
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<div className="Form-item">
					<label className="user">UserName:</label>
					<Form.Item
						name="username"
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>
				</div>
<div className="Form-item">
	<label className="pass">Password:</label>
<Form.Item
				
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>
</div>
				
<div className="check">
<Form.Item name="remember" valuePropName="checked">
					<Checkbox>Remember me</Checkbox>
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
		</div>
	);
}
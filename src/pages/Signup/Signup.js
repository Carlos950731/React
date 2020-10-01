import React from "react"
import { Form, Input, Button, Checkbox } from 'antd';

export const Signup = () => {
	const onFinish = values => {
		console.log('Success:', values);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className="Signup">
			<div className="container-signup">
				<div className="empresario-fond"></div>
				<div className="contenedor-formulario">
					<h1 className="title-formu">WELCOME TO ARGES</h1>
					<p className="parra-formu">Lest get you all set up so you can verify your nonprofit and begin setting up your first canpaign!</p>
					<div className="text-pp">
						<p className="text-p1">Already have an account?</p>
						<p className="text-p2">Log in.</p>
					</div>
					<div className="formu-input">
						<Form className="formusignup"

							name="basic"
							initialValues={{ remember: true }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
						>
							<div className="input-text">
								<label className="text-label">NAME:</label>
								<Form.Item
									name="username"
									rules={[{ required: true, message: 'Please input your username!' }]}
								>
									<Input type="text" />
								</Form.Item>
							</div>
							<div className="input-text">
								<label className="text-label">SURNAME:</label>
								<Form.Item
									name="username"
									rules={[{ required: true, message: 'Please input your surname!' }]}
								>
									<Input type="text" />
								</Form.Item>
							</div>
							<div className="input-text">
								<label className="text-label">PHONE:</label>
								<Form.Item
									name="username"
									rules={[{ required: true, message: 'Please input your phone!' }]}
								>
									<Input type="number" />
								</Form.Item>
							</div>
							<div className="input-text">
								<label className="text-label">EMAIL:</label>
								<Form.Item
									name="username"
									rules={[{ required: true, message: 'Please input your email!' }]}
								>
									<Input type="email" />
								</Form.Item>
							</div>
							<div className="input-text">
								<label className="text-label">PASSWORD:</label>
								<Form.Item
									name="passwordus"
									rules={[{ required: true, message: 'Please input your password!' }]}
								>
									<Input.Password />
								</Form.Item>
							</div>
							<div className="input-text">
								<label className="text-label">CONFIRM PASSWORD:</label>
								<Form.Item
									name="passwordus"
									rules={[{ required: true, message: 'Please input your password!' }]}
								>
									<Input.Password />
								</Form.Item>
							</div>


							<Form.Item name="remember" valuePropName="checked">
								<Checkbox>Yes, I want to receive ARGES emails.</Checkbox>
							</Form.Item>

							<Form.Item name="remember" valuePropName="checked">
								<Checkbox>I agree to the Terms, Privacy Policy and Fees.</Checkbox>
							</Form.Item>
							<div className="buttonup">
								<Form.Item >
									<Button type="primary" htmlType="submit">
										Sign Up
                  </Button>
								</Form.Item>
							</div>

						</Form>

					</div>
				</div>
			</div>
		</div>
	)
}
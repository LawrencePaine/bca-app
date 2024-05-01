import React from 'react';
import './home.css';
import Map from './map';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

type FieldType = {
  firstname?: string;
  lastname?: string;
  email?: string;
  message?: string;
};

const { TextArea } = Input;

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Contact: React.FC = () => {
  return (
    <>
      <div className="section-container">
        <div className="section-content">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item<FieldType>
              label="First name"
              name="firstname"
              rules={[{ required: true, message: 'Please input your first name' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Last name"
              name="lastname"
              rules={[{ required: true, message: 'Please input your last name' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email Address"
              name="email"
              rules={[{ required: true, message: 'Please input your email address' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please input your message' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <div style={{ marginLeft: 20 }}>
            <Map 
                address="1600 Amphitheatre Parkway, Mountain View, California, United States"
                width="50%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

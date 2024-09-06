import React from 'react';
import { Form, Input, Button } from 'antd';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const Contact: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };

  return (
    <>
      <h1>Contact Us</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Form
          name="contact"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: '50%' }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <APIProvider apiKey='AIzaSyBp1ZoJcrNnnrCtBgesIT_Og85UNtpW464'>
          <Map
            style={{width: '100vw', height: '100vh'}}
            defaultCenter={{lat: 53.84650944435301, lng: -0.40007493334792327}}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </APIProvider>
      </div>
    </>
  );
};

export default Contact;

import React from "react";
import { Form, Input, Button } from "antd";

const ContactUs = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="p-4 md:p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <Form
        name="contact"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" placeholder="Your Email" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <Input.TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full md:w-auto">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;

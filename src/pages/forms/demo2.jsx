import React from "react";
import { Form, Input, Button } from "antd";

export default function Demo2() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      {new Array(1000).fill(1).map((_, index) => {
        return (
          <Form.Item
            key={index}
            // label="Username"
            name={`username-${index}`}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        );
      })}
    </Form>
  );
}

import React, { useEffect, useState } from "react";
import "./DeviceForm.css";
import { Button, Form, Input, message, Select } from "antd";
import { addDevice } from "../services/device";

export interface DeviceFormProps{
  close: Function
}

function DeviceForm(props: DeviceFormProps) {
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = (data: any | undefined) => {
    addDevice({
      name: data['device-name']
    }).then(res => {
      if (res.message) {
        message.error(res.message);
      } else {
        form.resetFields();
        props.close();
      }
    }).catch(() => {
      message.error("Could not save the device!");
    });
  }
  return (
      <>
      <Form {...layout} form={form} name="devices-form" onFinish={onFinish}>
      <Form.Item name="device-name" label="Device Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
    </>
  );
}

export default DeviceForm;

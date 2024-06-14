import React from "react";
import { Button, Input, Form, Radio, Spin } from "antd";
import { ScanToolEnum } from "../constants";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { scanDomain } from "../api/domain";

const ScanInput: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.domain);
  const handleScan = () => {
    form.validateFields().then((value) => {
      dispatch(scanDomain(value));
    });
  };

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleScan}
        name="control-hooks"
        className="scan-form"
        initialValues={{
          tool: ScanToolEnum.THE_HARVESTER,
        }}
      >
        <Form.Item
          name="domain"
          label="Domain"
          rules={[{ required: true, message: "Please input domain" }]}
        >
          <Input placeholder="e.g google.com" />
        </Form.Item>
        <Form.Item label="" name="tool">
          <Radio.Group className="tool-options">
            <Radio value="theHarvester"> theHarvester </Radio>
            <Radio value="amass"> Amatsuka (Amass) </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item className="scan-button-wrapper">
          <Button type="primary" htmlType="submit" className="scan-button">
            Scan
          </Button>
        </Form.Item>
      </Form>
      {loading ? (
        <div className="loading-modal">
          <Spin />
        </div>
      ) : null}
    </>
  );
};

export default ScanInput;

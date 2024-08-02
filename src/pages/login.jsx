import Header from "../component/layout/header";
import Footer from "../component/layout/footer";
import { Form, Input, Button, notification, message } from "antd";
import { loginUserAPI } from "../services/api.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navagate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    const res = await loginUserAPI(values.email, values.password);

    if (res.data) {
      notification.success({
        message: "success login",
        description: "dang ky thanh cong",
      });
      navagate("/user");
    } else {
      notification.error({
        message: "error",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
  };
  const [form] = Form.useForm();
  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "nhap user name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: " bat buoc nhap" },
            {
              min: 8,
              message: "nho nhat 8 ky tu",
            },
            {
              max: 20,
              message: " lon nhat 20 ky tu",
            },
          ]}
          validateTrigger="onsubmit"
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            onClick={() => form.submit()}
          >
            Dang Ky
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;

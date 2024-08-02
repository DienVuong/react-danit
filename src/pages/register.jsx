import Header from "../component/layout/header";
import Footer from "../component/layout/footer";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Checkbox,
  notification,
  message,
  Descriptions,
  Row,
  Col,
} from "antd";
import { useForm } from "react-hook-form";
import { createUserAPI } from "../services/api.service";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const res = await createUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );
    if (res.data) {
      notification.success({
        message: "register success",
        Descriptions: "tao thanh cong",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "register error",
        Descriptions: "tao that bai",
      });
    }
  };
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{ margin: "50px" }}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "email khong dung dinh dang",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            labelCol={{ xs: { span: 24 }, sm: { span: 8 } }} // Responsive label column
            wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }} // Responsive wrapper column
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 9,
              span: 15,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 15,
            }}
          >
            <Button
              onClick={() => form.submit()}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default RegisterPage;

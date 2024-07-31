import { Button, Input, notification, Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {
  const { loadUser } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "create user",
        description: "Create User successfuly",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Table User</h3>
          <div>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              Create User
            </Button>
          </div>
        </div>
      </div>
      <Modal
        title="Thêm mới User"
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
        okText={"Thêm Mới"}
        cancelText={"Hủy"}
        width={740}
      >
        <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
          <div>
            <span>FullName</span>
            <Input onChange={(event) => setFullName(event.target.value)} />
          </div>
          <div>
            <span>Email</span>
            <Input onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div>
            <span>Password</span>
            <Input.Password
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <span>PhoneNumber</span>
            <Input onChange={(event) => setPhone(event.target.value)} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default UserForm;

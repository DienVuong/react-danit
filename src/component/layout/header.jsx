// import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const Header = () => {
  const [current, setCurrent] = useState("");
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <MailOutlined />,
    },
    {
      label: <Link to={"/user"}>Users</Link>,
      key: "user",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "product",
      icon: <SettingOutlined />,
    },
  ];
  const onClick = (e) => {
    console.log(e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;

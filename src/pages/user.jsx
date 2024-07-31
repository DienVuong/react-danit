import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUser(res.data);
  };
  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable dataUser={dataUser} />
    </div>
  );
};

export default UserPage;

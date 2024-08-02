import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
  const [dataUser, setDataUser] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadUser();
  }, [current, pageSize]);

  const loadUser = async () => {
    const res = await fetchAllUserAPI(current, pageSize);
    if (res.data) {
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
    setDataUser(res.data.result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable
        loadUser={loadUser}
        dataUser={dataUser}
        cusrrent={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
        setTotal={setTotal}
      />
    </div>
  );
};

export default UserPage;

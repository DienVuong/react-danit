import { notification, Popconfirm, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import UserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {
  const { dataUser, loadUser } = props;
  const [isModalUpdateOpen, setisModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataDetail, setDatatDetail] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleDeleteUser = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "delete user",
        description: "xoa thanh cong",
      });
      await loadUser();
    } else {
      notification.error({
        message: "Error delete User",
        description: JSON.stringify(res.message),
      });
    }
  };
  console.log("AAAAAAAAAAA", dataDetail);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => (
        <a
          onClick={() => {
            setDatatDetail(record);
            setIsDetailOpen(true);
          }}
          href="#"
        >
          {record._id}
        </a>
      ),
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div style={{ display: "flex", gap: "20px" }}>
            <EditOutlined
              onClick={() => {
                setDataUpdate(record);
                setisModalUpdateOpen(true);
              }}
              style={{ color: "orange", cursor: "pointer" }}
            />
            <Popconfirm
              title="xoa nguoi dung"
              description="Ban chac chan xoa user nay"
              onConfirm={() => handleDeleteUser(record._id)}
              okText="yes"
              cancelText="No"
              placement="left"
            >
              <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
            </Popconfirm>
          </div>
        </Space>
      ),
    },
  ];
  console.log(setIsDetailOpen);
  return (
    <>
      <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setisModalUpdateOpen={setisModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <UserDetail
        dataDetail={dataDetail}
        setDatatDetail={setDatatDetail}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;

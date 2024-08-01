import { Drawer, message, notification } from "antd";
import { useState } from "react";
import { handleUploadFile } from "../../services/api.service";

const UserDetail = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const { dataDetail, isDetailOpen, setIsDetailOpen } = props;
  console.log(dataDetail);

  const handleOnchangeFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }

    console.log(file);
  };

  const handleUpdateAvatar = async () => {
    const resUpload = await handleUploadFile(selectedFile, "avatar");
    console.log(resUpload);
    if (resUpload.data) {
      const newAvatar = resUpload.data.fileUploaded;
      notification.success({
        message: "Upload thanh cong",
        description: "dddd",
      });
    } else {
      notification.error({
        message: "upload that bai",
        description: JSON.stringify(resUpload.message),
      });
    }
  };
  return (
    <Drawer
      title="User Detail"
      onClose={() => {
        // setDataDetail("AAAA");
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
      width={960}
    >
      {dataDetail && (
        <>
          <p>{dataDetail.fullName}</p>
          <br />
          <p>{dataDetail.email}</p>
          <br />
          <p>{dataDetail.phone}</p>
          <img
            style={{ width: "250px", height: "300px" }}
            src={`http://localhost:8080/images/avatar/${dataDetail.avatar}`}
            alt=""
          />
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <label style={{ cursor: "pointer" }} htmlFor="image">
              UpLoad Image
            </label>
            <input
              onChange={(event) => handleOnchangeFile(event)}
              type="file"
              id="image"
              hidden
            />
            {preview && (
              <>
                <img
                  style={{ width: "250px", height: "300px" }}
                  src={preview}
                  alt=""
                />
                <button type="primary" onClick={handleUpdateAvatar}>
                  Save
                </button>
              </>
            )}
          </div>
        </>
      )}
      {!dataDetail && (
        <>
          <p>khong ton tai data</p>
        </>
      )}
    </Drawer>
  );
};

export default UserDetail;

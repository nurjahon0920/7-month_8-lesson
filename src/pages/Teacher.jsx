import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Modal, Table, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import {
  setTeachers,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} from "../redux/teacherSlice";

const Teacher = () => {
  const [searchTeacher, setSearchTeacher] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teacher.teachers);

  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    dispatch(setTeachers());
  }, [dispatch]);

  const handleSearchTeacher = (data) => {
    setSearchTeacher(data.target.value.toLowerCase());
  };

  const filteredData = teachers.filter((teacher) => {
    return (
      teacher.firstName.toLowerCase().includes(searchTeacher) ||
      teacher.lastName.toLowerCase().includes(searchTeacher) ||
      teacher.level.toLowerCase().includes(searchTeacher)
    );
  });

  const onSubmit = (data) => {
    if (editItem) {
      dispatch(updateTeacher(editItem.id, data));
      message.success("Teacher updated successfully");
      setEditItem(null);
    } else {
      dispatch(addTeacher(data));
      message.success("Teacher added successfully");
    }
    reset();
    setIsModalOpen(false);
  };

  const updateItem = (item) => {
    reset(item);
    setEditItem(item);
    setIsModalOpen(true);
  };

  const deleteItem = (id) => {
    dispatch(deleteTeacher(id));
    message.success("Teacher deleted successfully");
  };

  const showModal = () => {
    reset();
    setEditItem(null);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditItem(null);
  };

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <>
          <Button
            type="primary"
            className="Update"
            onClick={() => updateItem(record)}>
            Edit
          </Button>
          <Button
            type="primary"
            className="Delete"
            danger
            onClick={() => deleteItem(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ display: "flex" }} className="container">
      <Dashboard />
      <div
        style={{
          top: "100px",
          left: "400px",
          position: "absolute",
          flexDirection: "column",
          fontSize: "22px",
          gap: "15px",
          display: "flex",
        }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Input.Search
            placeholder="Search"
            allowClear
            onChange={handleSearchTeacher}
          />
          <Button onClick={showModal} type="primary">
            Add Teacher
          </Button>
        </div>
        <Table
          dataSource={filteredData}
          columns={columns}
          className="Table"></Table>
        <Modal
          title={editItem ? "Edit Teacher" : "Add Teacher"}
          open={isModalOpen}
          onOk={handleSubmit(onSubmit)}
          onCancel={handleCancel}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingTop: "15px",
            }}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="First Name"
                  maxLength={20}
                  required
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Last Name"
                  maxLength={20}
                  required
                />
              )}
            />
            <Controller
              name="level"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="Level" maxLength={20} required />
              )}
            />
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Teacher;

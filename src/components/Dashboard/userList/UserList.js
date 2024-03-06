import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";

const accounts = [
  {
    id: 1,
    email: "lnsdf",
    password: "msdflk",
    name: "new name",
    role: "admin",
    status: "active",
  },
  {
    id: 2,
    email: "abc",
    password: "abc",
    name: "new name",
    role: "moderator",
    status: "active",
  },
  {
    id: 3,
    email: "a",
    password: "a",
    name: "a s",
    role: "student",
    status: "active",
  },
  {
    id: 4,
    email: "b",
    password: "b",
    name: "a s",
    role: "moderator",
    status: "active",
  },
];

export default function UserList() {
  const [data, setData] = useState(accounts);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleStatusChange = (id) => {
    setData(
      data.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "active" ? "inactive" : "active",
            }
          : item
      )
    );
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const columns = [
    { field: "id", headerName: "ID", width: 92 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <Avatar
              {...stringAvatar(params.row.name)}
              className="userListImg"
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div
            onClick={() => handleStatusChange(params.row.id)}
            style={{
              cursor: "pointer",
              color: params.row.status === "active" ? "green" : "red",
            }}
          >
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

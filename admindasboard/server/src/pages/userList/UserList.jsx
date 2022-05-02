import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../config";

export default function UserList() {
  const [data, setData] = useState([]);
  const PF = "http://localhost:4000/images/";

  const handleRemove = async (id) => {

    
    const data = {
         postid: id

    }


    const headers = {
        'Authorization': `Basic ${JSON.parse(localStorage.getItem("user")).accsesToken}`
    }
    
    try {

        const res = await axiosInstance.delete(`/deleteUser`, { headers, data })


        window.location.replace('/')
         handleDelete(id)
        console.log(res)
        

    } catch (err) {
        console.log(err)

    }
}

  // /getUsers
  useEffect(()=>{
    const handlePost = async()=> {

      try {
          const res = await axiosInstance.get(`/getUsers`, {
            headers: {
                'Authorization': `Basic ${JSON.parse(localStorage.getItem("user")).accsesToken}`
            }
        })
        console.log(res.data)
          // setData(res.data)
          let list = [];
          for (let i = 0; i < res.data.length; i++) {
            console.log(res.data[i]._id)
            list.push({
              id: res.data[i]._id,
              username: res.data[i].username,
              avatar:
              PF + res.data[i].photo,
              email: "jon@gmail.com",
              status: "active"
              
            });
            
          }
          console.log(list)
          
        
          setData(list)




      } catch (err) {
          console.log(err)

      }

  }
  handlePost()


  },[])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
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
              onClick={() => handleRemove(params.row.id)}
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

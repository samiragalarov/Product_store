import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../config";

export default function ProductList() {
  const [data, setData] = useState([]);
  const PF = "http://localhost:4000/images/";

  useEffect(()=>{
    const handlePost = async()=> {

      try {
          const res = await axiosInstance.get(`/getPosts`, {
            headers: {
                'Authorization': `Basic ${JSON.parse(localStorage.getItem("user")).accsesToken}`
            }
        })
        console.log(res.data)
          // setData(res.data)
          let list = [];
          for (let i = 0; i < res.data.length; i++) {
            console.log(res.data[i]._id)
            list.push(
              {
                id: res.data[i]._id,
                name: res.data[i].title,
                img:
                PF + res.data[i].photo,
                stock: 123,
                categories: res.data[i].categories,
                price: res.data[i].price +"  " +"$",
              } 
            );
            
          }
          setData(list)
          console.log(list)
          
        
          //setData(list)




      } catch (err) {
          console.log(err)

      }

  }
  handlePost()


  },[])

  const handleRemove = async (id) => {

    
    const data = {
         postid: id

    }


    const headers = {
        'Authorization': `Basic ${JSON.parse(localStorage.getItem("user")).accsesToken}`
    }
    
    try {

        const res = await axios.delete(`/deleteProduct`, { headers, data })


         // window.location.replace('http://localhost:3000/')
         handleDelete(id)
        console.log(res)
        

    } catch (err) {
        console.log(err)

    }
}

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
   
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      }
      
    },
    {
      field: "categories",
      headerName: "categories",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleRemove(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}

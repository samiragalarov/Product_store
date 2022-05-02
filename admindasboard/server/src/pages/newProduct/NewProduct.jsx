import axios from "axios";
import { useState } from "react";
import { axiosInstance } from "../../config";
import "./newProduct.css";

export default function NewProduct() {
  const [header, Setheader] = useState("")
  const [text, SetText] = useState("")
  const [price, Setprice] = useState("")
  const [cat, Setcat] = useState("pant")
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
        title: header,
        text: text,
        categories: cat,
        owner: JSON.parse(localStorage.getItem("user")).username,
        ownerid : JSON.parse(localStorage.getItem("user")).id,
        price:price,
        isAdmin : true

    };
    if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;
        try {
            await axiosInstance.post("/api/upload", data);
        } catch (err) { }
    }
    try {
        const res = await axiosInstance.post("/createProduct", newPost, {
            headers: {
                'Authorization': `Basic ${JSON.parse(localStorage.getItem("user")).accsesToken}`
            }
        });
       
        window.location.replace("/products");
    } catch (err) { console.log(err) }
};

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file"  onChange={(e) => setFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods"   onChange={(e) => { Setheader(e.target.value) }}/>
        </div>
        <div className="addProductItem">
          <label>Product Text</label>
          <input type="text" placeholder="Desc..."  onChange={(e) => { SetText(e.target.value) }}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" placeholder="100$"  onChange={(e) => { Setprice(e.target.value) }}/>
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active" onChange={(e) => { Setcat(e.target.value) }}>
            <option >t-shirt</option>
            <option >pant</option>
            <option >hat</option>
            <option >dress</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}

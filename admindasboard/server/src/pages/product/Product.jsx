import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {IoMdAdd} from 'react-icons/io'
import { axiosInstance } from "../../config";

export default function Product() {
    const [file, setFile] = useState(null);
    const [title, setText] = useState("")
    const [cat, Setcat] = useState("pant")
    const productId = useParams()
    const updateProduct = async (e) => {
        e.preventDefault();
        const newPost = {
            title: title,
            categories: cat

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
            const res = await axiosInstance.put(`/updateProduct/${productId.productId}`, newPost, {
                headers: {
                    'Authorization': `Basic ${JSON.parse(localStorage.getItem("user")).accsesToken}`
                }
            });
            console.log(res)

            window.location.replace("/products");
        } catch (err) { console.log(err) }
    };


    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod"  onChange={(e) => { setText(e.target.value) }}/>
                        <label>categories</label>
                        <select name="inStock" id="idStock" onChange={(e) => { Setcat(e.target.value) }}>
                            <option >t-shirt</option>
                            <option >pant</option>
                            <option >hat</option>
                            <option >dress</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                        <div className='SettingCircle'>
                            {file ? (
                                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
                            ) : (
                                <>
                                    <input

                                        type="file"
                                        id="file-upload"
                                        style={{ visibility: "hidden" }}
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <label htmlFor='file-upload' class="custom-file-upload">
                                        <IoMdAdd size={42} />

                                    </label>

                                </>
                            )}

                        </div>
                            
                        </div>
                        <button className="productButton" onClick={updateProduct}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


import React, {useState, useEffect, Fragment} from 'react'
import firebase from '../../config/firebase';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Login from '../Login';

const Dashboard = () => {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState([]);
    const [button, setButton] = useState("Save");
    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() =>{
        firebase
        .database()
        .ref("products")
        .on("value", (res) =>{
            if (res.val()) {
                const rawData = res.val();
                const productArr = [];
                Object.keys(rawData).map((item) =>{
                    productArr.push({
                        id: item,
                        ...rawData[item],
                    });
                });
                setProduct(productArr);
            };
        });
    }, []);


    const resetForm = () => {
        setProductName("");
        setCategory("");
        setPrice("");
    };
    const onSubmit = () => {
        const data ={
            productName: productName,
            category: category,
            price: price,
        };
        if (button === "Simpan") {
            firebase.database().ref("products").push(data);
        } else {
            firebase.database().ref(`products/${selectedProduct.id}`).set(data);
        }
        resetForm();
    };

    const onUpadateData =(item) =>{
        setProductName(item.productName);
        setCategory(item.category);
        setPrice(item.price);
        setButton("Simpan");
        setSelectedProduct({});
    }

    const onDeleteData = (item) =>{
        firebase.database().ref(`products/${item.id}`).remove();
    }
    
    return (
            <div className="container mt-5">
            <h1>Welcome</h1>
            <div className="col-6">
                <p>Pulsa</p>
                    <input 
                    className="form-control" 
                    placeholder="masukkan pulsa" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)}
                    />
                    <p>Nomor</p>
                    <input 
                    className="form-control" 
                    placeholder="masukkan nomor" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    />
                    <p>Harga Pulsa</p>
                    <input 
                    className="form-control" 
                    placeholder="masukkan harga" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                    />
                    <br />
                    <button className="btn btn-success" onClick={onSubmit}>
                    {button}
                    </button>
                    { button === "Update" && (
                         <button className="btn btn-secondary" onClick={resetForm}>Cancel Update</button>
                    )}
            </div>
           <hr />
           <table class="table table-striped table-hover">
                <thead>
                    <th>Pulsa</th>
                    <th>Nomor</th>
                    <th>Harga Pulsa</th>
                    <th>Pilihan</th>
                </thead>
                <tbody>
                    {product.map((item) => (
                            <tr key={item.id}>
                                <td>{item.productName}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button 
                                    className="btn btn-primary" 
                                    onClick={() => onUpadateData(item)}>Perbarui</button>
                                    <button className="btn btn-warning"
                                    onClick={() => onDeleteData(item)}>Hapus</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
                </table>
        </div>
        
    )
}

export default Dashboard;
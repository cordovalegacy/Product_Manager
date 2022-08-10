import { useEffect, useState } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const DisplayAll = (props) => {

    const {productList, setProductList} = props;

    const navigate = useNavigate();
    console.log(productList)
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const deleteFilter = (idFromBelow) => {
        console.log('====idFromBelow', idFromBelow)
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
        .then((res) => {
            console.log(res.data);
            setProductList(productList.filter((product, index) => product._id !== idFromBelow));
        })
        .catch((err) => console.log(err))
    };

    return (
        <div>
            <header>
                All Products:
            </header>
            {
                productList.map((product, index) => (
                    <div key = {index}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <button onClick={() => navigate(`/product/edit/${product._id}`)}>Edit</button>
                        <button onClick={()=> deleteFilter(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayAll;
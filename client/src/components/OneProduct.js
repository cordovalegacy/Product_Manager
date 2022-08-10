import { useState, useEffect } from "react";
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {

    const {id} = useParams();

    const [oneProduct, setOneProduct] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
    });
}, []);

const deleteHandler = () => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then((res) => {
        console.log(res.data);
        navigate('/');
    })
    .catch((err) => console.log(err))
};

    return(
        <div>
            <h2>{oneProduct.title}</h2>
            <p>Price: $ {oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button onClick={deleteHandler}>Delete</button>
            <Link to={'/'}>Go Home</Link>
        </div>
    );
};

export default OneProduct;
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const UpdateProduct = (props) => {

    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const navigate = useNavigate(); 

    const [headerTitle, setHeaderTitle] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setHeaderTitle(res.data.title);
        })
        .catch((err) => console.log(err))
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => console.log(err))
    };

    return (
        <div>
            <header>Edit {headerTitle} </header>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title:</label>
                    <input type='text' value={title} onChange = {(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price:</label>
                    <input type='number' value={price} onChange = {(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description:</label>
                    <input type='text' value={description} onChange = {(e) => setDescription(e.target.value)} />
                </p>
                <input type='submit' value='Update' />
            </form>
        </div>
    );
};

export default UpdateProduct;
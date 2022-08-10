import { useState } from 'react';
import axios from 'axios';


const CreateProduct = (props) => {

    const {productList, setProductList} = props;

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {

        e.preventDefault();
        const product = {
            title,
            price,
            description,
        }
        console.log('===product', product)
        axios.post("http://localhost:8000/api/products", product)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
                setTitle('');
                setPrice(0);
                setDescription('');
            })
            .catch((err)=>console.log(err));
    }

    return (
        <div>
            <header>
                Product Manager
            </header>
                <form onSubmit={submitHandler}>
                    <p>
                        <label>Title</label><br/>
                        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </p>
                    <p>
                        <label>Price</label><br/>
                        <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </p>
                    <p>
                        <label>Description</label><br/>
                        <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </p>
                    <input type='submit' value='create' />
                </form>
        </div>
    );
};
export default CreateProduct;
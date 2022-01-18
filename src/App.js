import { useDispatch, useSelector } from "react-redux";
import {editProduct} from './redux/actions/productAction'
import { useState } from "react";
import "./App2.css";

function App() {

  const [id, setID] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch()

  const products = useSelector((state) => state.allProducts.product)
  console.log(products)

  const submission = () => {
    dispatch(editProduct(
      [{
        id: id,
        title: title,
        category: category
      }]
    ))

  }

  return (
    <div>
      <h1>Hello World</h1>
      <h2>My Products are below</h2>
      {
        products.map((product, index) => 
          (
            <>
              <p>{product.id}</p>
              <p>{product.title}</p>
              <p>{product.category}</p>
            </>
          )
        )
      }
      <input placeholder="id" value={id} onChange={(e)=> setID(e.target.value)} />
      <input placeholder="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
      <input placeholder="category" value={category} onChange={(e)=> setCategory(e.target.value)} />
      <button onClick={submission}>Submit</button>
    </div>
  );
}

export default App;

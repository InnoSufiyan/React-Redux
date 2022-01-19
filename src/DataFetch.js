import { useDispatch, useSelector } from "react-redux";
import {setProducts} from './redux/actions/productAction'
import axios from 'axios'
import "./App2.css";
import { useEffect } from "react";

function DataFetch() {

  const dispatch = useDispatch()

  const products = useSelector((state) => state.fetchProducts.AllProducts)

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
      console.log("Err-->>>", err)
    })
    dispatch(setProducts(response.data))
  }

  useEffect(()=> {
    fetchProducts()
  },[])
  


  return (
    <div>
      <h1>Hello World</h1>
      <h2>Fetch Products are below</h2>
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
    </div>
  );
}

export default DataFetch;

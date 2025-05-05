import { useState } from "react"
import {useState} from 'react';
import axios from 'axios';
const express=('express');
const app=express();

const Product = () => {
  const [name,setName]=useState("");
  const [price,setPrice]=useState();
  const [discount,setDiscout]=useState();
  const [category,setCategory]=useState("");
  const handleSubmit=()=>{
    const apiObj={
      url:"",
      data:{
        name,price,discount,category
      }
    }
    app.post('/', (req, res) => {
        axios.send(apiObj)
    })
    
    
  }
  return (
    <div>
      <form>
        <input value={value} type="String" placeholder="name" setName={value}/>
        <input value={value} type="number" placeholder="price" setPrice={value}/>
        <input value={value} type="number" placeholder="Discount" setDiscout={value}/>
        <input value={value} type="String" placholder="category"setCategory={value}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  )
}

export default Product
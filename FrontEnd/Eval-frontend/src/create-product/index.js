import { useState } from "react"
import {useState} from 'react';
import axios from 'axios';
const express=('express');
const app=express();

const Product = () => {
  const handleSubmit=()=>{
    app.post('/', (req, res) => {
        
    })
    
  }
 const [name,setName]=useState("");
 const [price,setPrice]=useState();
 const [Discount,setDiscout]=useState();
 const [category,setCategory]=useState("");
  return (
    <div>
      <form>
        <input type="String" placeholder="name" setName={}/>
        <input type="number" placeholder="price"/>
        <input type="number" placeholder="Discount"/>
        <input type="String" placholder="category"/>
        <button onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  )
}

export default Product
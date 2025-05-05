import React from 'react'
const express=require('express');
const app=express;


const index = () => {
    app.get('/products', (req, res) => {
        res.send(fetch)
    })
    
  return (
    <div>index</div>
  )
}

export default index
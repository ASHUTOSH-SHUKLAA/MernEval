import React from 'react'
const express=require('express');
const app=express;
const db=require('mongoose')


const index = () => {
    app.get('/products', (req, res) => {
        res.send(db.fetchAll())
    })

  return (
    <div>
        
    </div>
  )
}

export default index
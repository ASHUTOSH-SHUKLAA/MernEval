

const express = require('express')
const app = express()
const db=require('mongoose');
import React from 'react'



const index = () => {
    app.get('/products/:id', (req, res) => {
            res.send(db.fetchOne(id))
        })
    app.delete('/products/:id',(req,res)=>{
        res.send(db.delete(id))
    })
  return (
    <div>
        
    </div>
  )
}

export default index
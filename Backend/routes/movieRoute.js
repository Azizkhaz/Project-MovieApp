const express = require('express')

const movieSchema = require('../model/movie')

const movieRoute = express.Router()

// http://localhost:4000/movie/getall 
// GET
movieRoute.get('/getall', async(req,res)=>{
    try{
        const movie = await movieSchema.find()
        res.status(200).json({msg: 'get all movies',movie})
    }
    catch(err){
        console.log(err)
        res.send('have a problem')
    }
})

// http://localhost:4000/movie/addmovie
movieRoute.post('/addmovie', async(req,res)=>{
    try{
        const newMovie = new movieSchema(req.body)
        await newMovie.save()
        res.status(200).json({msg:'you add a movie', newMovie})
    }
    catch(err){
        console.log(err)
        res.send('you have a problem')
    }
})

// http://localhost:4000/movie/update/:id
movieRoute.put('/update/:id', async (req,res)=>{
    try{
        const {id} = req.params
        const updateMovie = await movieSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg:'you could update your movie', updateMovie})
    }
    catch(err){
        console.log(err)
        res.send('you have a problem')
    }
})

// http://localhost:4000/movie/delete/:id
movieRoute.delete('/delete/:id', async (req,res)=>{
    try{
    const {id} = req.params
    const deleteMovie = await movieSchema.findByIdAndDelete(id)
    res.status(200).json({msg:'you could delete movie'})
}
catch(err){
    console.log(err)
    res.send('you have a problem')
}
})

// localhost:4000/movie/getunique/:id

movieRoute.get('/getunique/:id', async(req,res)=>{
    try{
        const {id} = req.params

        const getmovie = await movieSchema.findById(id)
        res.status(200).json({msg: "you get the movie", getmovie})
        }
    catch(err){
        console.log(err)
        res.send("you have a problem")
    }
})


module.exports = movieRoute

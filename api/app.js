import express from 'express'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose'
const app = express()

app.use(express.json())
app.use(cors())



const { Schema } = mongoose;

const CourseSchema = new Schema({
 image:{type:String,require:true},
 title:{type:String,require:true},
 info:{type:String,require:true},
 authorImage:{type:String,require:true},
 authorName:{type:String,require:true},
 authorPosition:{type:String,require:true},
 price:{type:Number,require:true},
});

const Course = mongoose.model('Course', CourseSchema);



app.get("/course", async (req,res)=>{
    try {
        
        const allCourses= await Course.find({})
        res.status(200).json(allCourses)
    } catch (error) {
        res.status(200).json({message:error})
        
    }
})

app.get("/course/:id", async (req,res)=>{
    try {
        
        const course= await Course.findById(req.params.id)
        res.status(200).json(course)
    } catch (error) {
        res.status(200).json({message:error})
        
    }
})


app.delete("/course/:id", async (req,res)=>{
    try {
        
        const course= await Course.findByIdAndDelete(req.params.id)
        res.status(200).json('deleted')
    } catch (error) {
        res.status(200).json({message:error})
        
    }
})




app.put("/course/:id", async (req,res)=>{
    try {
        
        const course= await Course.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.status(200).json(course)
    } catch (error) {
        res.status(200).json({message:error})
        
    }
})

app.post("/course", async (req,res)=>{
    try {
        
        const newCourse=  new Course({...req.body})
        await newCourse.save()
        res.status(200).json(newCourse)
    } catch (error) {
        res.status(200).json({message:error})
        
    }
})


const port = 5000
const url='mongodb+srv://tu833kmn0:mehriban098@cluster0.xewqdvo.mongodb.net/'

mongoose.connect(url).then(console.log('db connected'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
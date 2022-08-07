import express from 'express'
import Tester from '../models/db.js';

const getRequest = async (req, res)=>{
    const todos = await Tester.find(
    )
    res.send(todos);
}

const postRequest = (req, res)=>{
    console.log(req)
    // const newNote = new Tester({
    //     title: req.body.title,


    // })
    // newNote.save();
    // res.json(newNote);

    const pushedNote = {
        title: req.body.title,
        content: req.body.content
    }
    // Tester.find({user: req.user.username }, async (err, foundUser)=>{
    //     console.log(foundUser)
    //     if(err){
    //         console.log(err)
    //     } else {
    //         if(foundUser){
    //             foundUser[0].notes.push(pushedNote)
    //             console.log(foundUser[0].notes)
    //             await foundUser[0].save()
    //         }
    //     }
    // })
}

const signUpRequest = (req, res)=>{
    const newNote = new Tester({
        user: req.body.user

    })
    newNote.save();
    res.json(newNote);
}

export {getRequest, postRequest, signUpRequest}
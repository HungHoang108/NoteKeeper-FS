
import Tester from '../models/db.js';

const getRequest = async (req, res)=>{
    const todos = await Tester.find(
    )
    res.send(todos);
    
}

const deleteRequest =  (req, res)=>{
   
 const removeNote = Tester.deleteOne({_id: req.params.id}, (err)=>{
        if(err){
            console.log(err)
        } else {
            console.log('success')
        }
    })
}

const postRequest = (req, res)=>{

    const newNote = new Tester({  
        email: req.body.user,
        title: req.body.title,   
        content: req.body.content
    })
    newNote.save();
    res.json(newNote);

    // const userId = req.body.user
   
    // const pushedNote = {
    //     title: req.body.title,
    //     content: req.body.content
    // }
    
    // Tester.findOne({user: userId}, async (err, foundUser)=>{
        
    //     if(err){
    //         console.log(err)
    //     } else {
    //         if(foundUser){
    //             foundUser.note.push(pushedNote)
                
    //             await foundUser.save()
             
    //         } else {
    //             const newNote = new Tester({
                
    //                 user: userId,
    //                 note: [{
    //                     title: req.body.title,
    //                     content: req.body.content
    //                 }]
    //             })
    //             newNote.save();
    //             res.json(newNote);
    //         }
    //     }
    // })
}



export {getRequest, postRequest, deleteRequest}
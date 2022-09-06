const router = require('express').Router();
const Todo = require('../models/todo');

//List of all todd
router.get('/', (req,res)=> {
    // Todo.find().exec((err, todos) =>{
    //     if(err){
    //         return res.json({ error: err});
    //     }
    //     return res.json({ data: todos});
    // });
});

//Create of all todo
router.post('/', (req,res)=> {
//      const todo = Todo({
//         title: req.body.title,
//         content: req.body.content,
//      });
//      todo.save((err, todo) => {
//         if(err){
//             return res.json({ error: err});
//         }
//         return res.json({ data: todo});
//      });
});

//Edit of all todo
router.put('/:id', (req,res)=> {

});

//Delete of all todo
router.delete('/:id', (req,res)=> {

});

module.exports = router;


import express from "express";
import { home } from "./controller/page";
import { about } from "./controller/page";
import { destroy, index, store, update } from "./controller/tag";
import { create } from "./controller/tag";
import { edit } from "./controller/tag";

const router = express.Router();

router.get('/', index)

router.get('/create', create)

router.post('/create', store)

router.post('/edit/:id', update)
router.get('/edit/:id', edit)
router.get('/delete/:id', destroy)


// router.post('/', (req, res) => {
//     // res.render('index', req.body);

//     if (Object.keys(req.files).length < 1) {
//         console.log('please choose files');
//     }

//     //file uploading
//     const img = req.files.image;
//     const { imgName, mv } = img;

//     mv("./assets/upload/" + imgName, (e) => {
//         if (e) throw e;
//         res.send('uploaded success')

//     })



// console.log(req.files);
// console.log(req.body);
// })

// router.get('/about', about)

export default router;

import { theRedYeti } from 'fontawesome';
import db from './db'

export const index = (req, res) => {
    const sql = 'select * from options';
    db.query(sql, (e, data) => {
        if (e) throw e;
        res.render('index', { option: data })

    })
}
export const uuid = () => {
    return Math.floor(Math.random() * 999999)
}
console.log(uuid());

export const create = (req, res) => {
    res.render('create')
}
export const store = (req, res) => {
    const img = req.files.image;
    const { name } = req.body;
    const img_path = `upload/${uuid()} ${img.name}`
    let sql = `insert into options(name,image) values('${name}','${img_path}') `;
    console.log(sql);

    //to upload from form
    db.query(sql, e => {
        if (e) throw e;
        return img.mv(`./assets/${img_path}`, e => {
            if (e) throw e;
            return res.redirect('/');
        })
    })


}

export const edit = (req, res) => {
    //fetch data
    const id = req.params.id;
    const sql = "select * from options where id=" + id;
    db.query(sql, (e, data) => {
        if (e) throw e;
        res.render('edit', { data: data[0] })

    })

}
export const update = (req, res) => {
    const { id } = req.params;
    const sql = "select * from options where id=" + id;
    db.query(sql, (e, data) => {
        if (e) throw e;
        const datadb = data[0];

        var image;
        //this is from form
        if (!req.files || Object.keys(req.files).length === 0) {
            image = datadb.image;
        } else {
            const img = req.files.image;
            image = "upload/" + uuid() + img.name;
            img.mv("./assets/" + image, e => {
                if (e) throw e;
            })
        }
        const { name } = req.body;
        const updatesql = `update options set name='${name}',image='${image}' where id=${id}`;
        db.query(updatesql, (e) => {
            if (e) throw e;
            return res.redirect("/")
        })
    })

}
export const destroy = (req, res) => {
    const { id } = req.params;
    const deletesql = "delete from options where id=" + id;
    db.query(deletesql, (e) => {
        if (e) throw e;
        return res.redirect("/")
    })
}
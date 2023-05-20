import db from './db.js'
export const home = (req, res) => {

    // db.query("delete from vip_member where name='phoo' ", (e, data, f) => {
    //     console.log(data);
    // })

    // db.query('insert into vip_member(id,name,item) values("01","phoo","books")', (e, data, f) => {

    // })
    // let insertsql = 'insert into vip_member(id,name,item) values?';
    // let data = [
    //     ['01', 'phoo', 'ice cafe'],
    //     ['02', 'johnny', 'cookie']];
    // db.query(insertsql, [data], (e, d) => {
    //     console.log(d);
    // })

}
export const about = (req, res) => {
    let user = [
        { name: 'mgmg' }, { name: 'kinkin' }, { name: 'linlin' }
    ]
    //accept only two parameters
    res.render('about', { user })

}
import mysql from 'mysql'

const c = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'customer'
})
c.connect();
export default c;
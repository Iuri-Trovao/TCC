async function conexão(){
    const mysqli = require('mysql')
    const connect = mysqli.createConnection({
        host: 'localhost',
        user: "Adim",
        password: "",
        database: "project-db",
        port: 3306
    })
}
conexão()

module.exports = {conexão}
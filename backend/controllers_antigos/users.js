const bd = require('../config/mysql1');

function getAll(req, res) {
    let sql = "SELECT username, name, email FROM users";
    bd.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT username, name, email FROM users WHERE username=?";
    bd.connection.query(sql, req.params.username, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}
console.log("PASS")
function getPass(req, res) {
    let sql = "SELECT password FROM users WHERE username=?";
    bd.connection.query(sql, req.params.username, function(err, results) {
        console.log(req.params.username)
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0].password);
    });
}

function createOne(req, res) {
    let sql = "INSERT INTO users (username, name, email, password) VALUES (?,?,?,?)";
    global.connection.query(sql, [
        req.body.username, 
        req.body.name,
        req.body.email,
        req.body.password
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}

function updateOne(req, res) {
    let sql = "UPDATE users SET name=?, email=?, password=? WHERE username=?"; 
    global.connection.query(sql, [
        req.body.name,
        req.body.email,
        req.body.password, 
        req.params.username
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from users WHERE username=?"; 
    global.connection.query(sql, req.params.username, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}

module.exports = {
    list: getAll,
    getPass: getPass,
    read: getOne,
    create: createOne,
    update: updateOne,
    deleteOne: deleteOne
}
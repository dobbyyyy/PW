function getAll(req, res) {
    let sql = "SELECT idOperation_Manager, Name, Password FROM Operations_Manager order by idOperation_Manager desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idOperation_Manager, Name, Password FROM Operations_Manager WHERE idOperation_Manager=?";
    global.connection.query(sql, req.params.idOperation_Manager, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Operations_Manager (Name, Password) VALUES (?,?)";
    global.connection.query(sql, [
        req.body.Name,
        req.body.Password
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Operations_Manager SET Name=?, Password=? WHERE idOperation_Manager=?"; 
    global.connection.query(sql, [
        req.body.Name,
        req.body.Password, 
        req.params.idOperation_Manager
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Operations_Manager WHERE idOperation_Manager=?"; 
    global.connection.query(sql, req.params.idOperation_Manager, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}

//exportar as funções
module.exports = {
    list: getAll,
    read: getOne,
    create: createOne,
    update: updateOne,
    delete: deleteOne
}

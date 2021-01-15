function getAll(req, res) {
    let sql = "SELECT idMaterial_Operation, Name, Quantity FROM Materials_Operation order by idMaterial_Operation desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idMaterial_Operation, Name, Quantity FROM Materials_Operation WHERE idMaterial_Operation=?";
    global.connection.query(sql, req.params.idMaterial_Operation, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Materials_Operation (Name, Quantity) VALUES (?,?)";
    global.connection.query(sql, [
        req.body.Name,
        req.body.Quantity
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Materials_Operation SET Name=?, Quantity=? WHERE idMaterial_Operation=?"; 
    global.connection.query(sql, [
        req.body.Name,
        req.body.Quantity, 
        req.params.idMaterial_Operation
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Materials_Operation WHERE idMaterial_Operation=?"; 
    global.connection.query(sql, req.params.idMaterial_Operation, function(err, results){
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

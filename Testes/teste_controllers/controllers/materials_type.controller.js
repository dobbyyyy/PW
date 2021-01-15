function getAll(req, res) {
    let sql = "SELECT idMaterial_Type, Description FROM Materials_Type order by idMaterial_Type desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idMaterial_Type, Description FROM Materials_Type WHERE idMaterial_Type=?";
    global.connection.query(sql, req.params.idMaterial_Type, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Materials_Type (Description) VALUES (?)";
    global.connection.query(sql, [
        req.body.Description
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Materials_Type SET Description=? WHERE idMaterial_Type=?"; 
    global.connection.query(sql, [
        req.body.Description,
        req.params.idMaterial_Type
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Materials_Type WHERE idMaterial_Type=?"; 
    global.connection.query(sql, req.params.idMaterial_Type, function(err, results){
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
function getAll(req, res) {
    let sql = "SELECT idOccurrence_Type, Description FROM Occurrences_Type order by idOccurrence_Type desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idOccurrence_Type, Description FROM Occurrences_Type WHERE idOccurrence_Type=?";
    global.connection.query(sql, req.params.idOccurrence_Type, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Occurrences_Type (Description) VALUES (?)";
    global.connection.query(sql, [
        req.body.Description
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Occurrences_Type SET Description=? WHERE idOccurrence_Type=?"; 
    global.connection.query(sql, [
        req.body.Description,
        req.params.idOccurrence_Type
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Occurrences_Type WHERE idOccurrence_Type=?"; 
    global.connection.query(sql, req.params.idOccurrence_Type, function(err, results){
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
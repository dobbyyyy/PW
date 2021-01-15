function getAll(req, res) {
    let sql = "SELECT idUrgency_Level, Description FROM Urgency_Level order by idUrgency_Level desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idUrgency_Level, Description FROM Urgency_Level WHERE idUrgency_Level=?";
    global.connection.query(sql, req.params.idUrgency_Level, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}


function createOne(req, res) {
    let sql = "INSERT INTO Urgency_Level (Description) VALUES (?)";
    global.connection.query(sql, [
        req.body.Description
    ], function(err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


function updateOne(req, res) {
    let sql = "UPDATE Urgency_Level SET Description=? WHERE idUrgency_Level=?"; 
    global.connection.query(sql, [
        req.body.Description,
        req.params.idUrgency_Level
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Urgency_Level WHERE idUrgency_Level=?"; 
    global.connection.query(sql, req.params.idUrgency_Level, function(err, results){
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
function getAll(req, res) {
    let sql = "SELECT idOperation_Center FROM Operations_Center order by idOperation_Center desc";
    global.connection.query(sql, function(err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.json(results);
    });      
}

function getOne(req, res) {
    let sql = "SELECT idOperation_Center FROM Operations_Center WHERE idOperation_Center=?";
    global.connection.query(sql, req.params.idOperation_Center, function(err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function deleteOne(req, res) {
    let sql = "DELETE from Operations_Center WHERE idOperation_Center=?"; 
    global.connection.query(sql, req.params.idOperation_Center, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}

//exportar as funções
module.exports = {
    list: getAll,
    read: getOne,
    delete: deleteOne
}
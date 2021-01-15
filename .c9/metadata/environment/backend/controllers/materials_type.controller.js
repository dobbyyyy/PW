{"filter":false,"title":"materials_type.controller.js","tooltip":"/backend/controllers/materials_type.controller.js","ace":{"folds":[],"scrolltop":604.5,"scrollleft":0,"selection":{"start":{"row":45,"column":59},"end":{"row":45,"column":59},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":36,"state":"no_regex","mode":"ace/mode/javascript"}},"hash":"44f064d3048f14ff6823f454fba8c3ecaa921ac7","undoManager":{"mark":43,"position":43,"stack":[[{"start":{"row":0,"column":0},"end":{"row":58,"column":1},"action":"insert","lines":["function getAll(req, res) {","    let sql = \"SELECT idOccurrence_Type, Description FROM Occurrences_Type order by idOccurrence_Type desc\";","    global.connection.query(sql, function(err, results) {","        if (err) {","            console.log(err);","            return res.status(500).end();","        }","        res.json(results);","    });      ","}","","function getOne(req, res) {","    let sql = \"SELECT idOccurrence_Type, Description FROM Occurrences_Type WHERE idOccurrence_Type=?\";","    global.connection.query(sql, req.params.idOccurrence_Type, function(err, results) {","        if (err) return res.status(500).end();","        if (results.length == 0) return res.status(404).end();","        return res.json(results[0]);","    });","}","","","function createOne(req, res) {","    let sql = \"INSERT INTO Occurrences_Type (Description) VALUES (?)\";","    global.connection.query(sql, [","        req.body.Description","    ], function(err, results) {","        if (err) return res.status(500).end();","        res.json(results);","    });","}","","","function updateOne(req, res) {","    let sql = \"UPDATE Occurrences_Type SET Description=? WHERE idOccurrence_Type=?\"; ","    global.connection.query(sql, [","        req.body.Description,","        req.params.idOccurrence_Type","      ], function(err, results) {","            if (err) return res.status(500).end();","            res.json(results);","    });","}","","function deleteOne(req, res) {","    let sql = \"DELETE from idOccurrence_Type WHERE idOccurrence_Type=?\"; ","    global.connection.query(sql, req.params.idOccurrence_Type, function(err, results){","        if (err) return res.status(500).end();","        res.status(204).end();","    });","}","","//exportar as funções","module.exports = {","    list: getAll,","    read: getOne,","    create: createOne,","    update: updateOne,","    delete: deleteOne","}"],"id":1}],[{"start":{"row":1,"column":22},"end":{"row":1,"column":39},"action":"remove","lines":["idOccurrence_Type"],"id":2},{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["i"]},{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["d"]},{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["T"]}],[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["y"],"id":3},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["p"]},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["e"]},{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":["_"]}],[{"start":{"row":1,"column":29},"end":{"row":1,"column":30},"action":"insert","lines":["M"],"id":4},{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["a"]},{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":["t"]},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["e"]},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":["r"]},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["i"]},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["a"]}],[{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"insert","lines":["l"],"id":5}],[{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"remove","lines":["l"],"id":6},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"remove","lines":["a"]},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"remove","lines":["i"]},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"remove","lines":["r"]},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"remove","lines":["e"]},{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"remove","lines":["t"]},{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"remove","lines":["a"]},{"start":{"row":1,"column":29},"end":{"row":1,"column":30},"action":"remove","lines":["M"]},{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"remove","lines":["_"]},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"remove","lines":["e"]},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"remove","lines":["p"]},{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"remove","lines":["y"]}],[{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"remove","lines":["T"],"id":7}],[{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["M"],"id":8},{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["a"]}],[{"start":{"row":1,"column":22},"end":{"row":1,"column":26},"action":"remove","lines":["idMa"],"id":9},{"start":{"row":1,"column":22},"end":{"row":1,"column":32},"action":"insert","lines":["idMaterial"]}],[{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["_"],"id":10},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":["t"]},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["y"]},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["p"]}],[{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"remove","lines":["p"],"id":11},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"remove","lines":["y"]},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"remove","lines":["t"]}],[{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":["T"],"id":12},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["y"]},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["p"]},{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":56},"end":{"row":1,"column":72},"action":"remove","lines":["Occurrences_Type"],"id":13},{"start":{"row":1,"column":56},"end":{"row":1,"column":57},"action":"insert","lines":["M"]},{"start":{"row":1,"column":57},"end":{"row":1,"column":58},"action":"insert","lines":["a"]},{"start":{"row":1,"column":58},"end":{"row":1,"column":59},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":59},"end":{"row":1,"column":60},"action":"insert","lines":["e"],"id":14},{"start":{"row":1,"column":60},"end":{"row":1,"column":61},"action":"insert","lines":["r"]},{"start":{"row":1,"column":61},"end":{"row":1,"column":62},"action":"insert","lines":["i"]},{"start":{"row":1,"column":62},"end":{"row":1,"column":63},"action":"insert","lines":["a"]},{"start":{"row":1,"column":63},"end":{"row":1,"column":64},"action":"insert","lines":["l"]},{"start":{"row":1,"column":64},"end":{"row":1,"column":65},"action":"insert","lines":["s"]}],[{"start":{"row":1,"column":65},"end":{"row":1,"column":66},"action":"insert","lines":["_"],"id":15},{"start":{"row":1,"column":66},"end":{"row":1,"column":67},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":66},"end":{"row":1,"column":67},"action":"remove","lines":["t"],"id":16}],[{"start":{"row":1,"column":66},"end":{"row":1,"column":67},"action":"insert","lines":["T"],"id":17},{"start":{"row":1,"column":67},"end":{"row":1,"column":68},"action":"insert","lines":["y"]},{"start":{"row":1,"column":68},"end":{"row":1,"column":69},"action":"insert","lines":["p"]},{"start":{"row":1,"column":69},"end":{"row":1,"column":70},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":80},"end":{"row":1,"column":97},"action":"remove","lines":["idOccurrence_Type"],"id":18},{"start":{"row":1,"column":80},"end":{"row":1,"column":81},"action":"insert","lines":["i"]},{"start":{"row":1,"column":81},"end":{"row":1,"column":82},"action":"insert","lines":["d"]},{"start":{"row":1,"column":82},"end":{"row":1,"column":83},"action":"insert","lines":["M"]}],[{"start":{"row":1,"column":80},"end":{"row":1,"column":83},"action":"remove","lines":["idM"],"id":19},{"start":{"row":1,"column":80},"end":{"row":1,"column":95},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":12,"column":22},"end":{"row":12,"column":39},"action":"remove","lines":["idOccurrence_Type"],"id":20},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["i"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["d"]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["M"]}],[{"start":{"row":12,"column":22},"end":{"row":12,"column":25},"action":"remove","lines":["idM"],"id":21},{"start":{"row":12,"column":22},"end":{"row":12,"column":37},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":12,"column":56},"end":{"row":12,"column":72},"action":"remove","lines":["Occurrences_Type"],"id":22},{"start":{"row":12,"column":56},"end":{"row":12,"column":57},"action":"insert","lines":["M"]},{"start":{"row":12,"column":57},"end":{"row":12,"column":58},"action":"insert","lines":["a"]}],[{"start":{"row":12,"column":56},"end":{"row":12,"column":58},"action":"remove","lines":["Ma"],"id":23},{"start":{"row":12,"column":56},"end":{"row":12,"column":70},"action":"insert","lines":["Materials_Type"]}],[{"start":{"row":12,"column":77},"end":{"row":12,"column":94},"action":"remove","lines":["idOccurrence_Type"],"id":24},{"start":{"row":12,"column":77},"end":{"row":12,"column":78},"action":"insert","lines":["i"]},{"start":{"row":12,"column":78},"end":{"row":12,"column":79},"action":"insert","lines":["d"]}],[{"start":{"row":12,"column":77},"end":{"row":12,"column":79},"action":"remove","lines":["id"],"id":25},{"start":{"row":12,"column":77},"end":{"row":12,"column":92},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":13,"column":44},"end":{"row":13,"column":61},"action":"remove","lines":["idOccurrence_Type"],"id":26},{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"insert","lines":["i"]},{"start":{"row":13,"column":45},"end":{"row":13,"column":46},"action":"insert","lines":["d"]},{"start":{"row":13,"column":46},"end":{"row":13,"column":47},"action":"insert","lines":["M"]}],[{"start":{"row":13,"column":44},"end":{"row":13,"column":47},"action":"remove","lines":["idM"],"id":27},{"start":{"row":13,"column":44},"end":{"row":13,"column":59},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":22,"column":27},"end":{"row":22,"column":43},"action":"remove","lines":["Occurrences_Type"],"id":28},{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"insert","lines":["M"]},{"start":{"row":22,"column":28},"end":{"row":22,"column":29},"action":"insert","lines":["a"]}],[{"start":{"row":22,"column":27},"end":{"row":22,"column":29},"action":"remove","lines":["Ma"],"id":29},{"start":{"row":22,"column":27},"end":{"row":22,"column":41},"action":"insert","lines":["Materials_Type"]}],[{"start":{"row":33,"column":22},"end":{"row":33,"column":38},"action":"remove","lines":["Occurrences_Type"],"id":30},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["M"]},{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":["a"]}],[{"start":{"row":33,"column":22},"end":{"row":33,"column":24},"action":"remove","lines":["Ma"],"id":31},{"start":{"row":33,"column":22},"end":{"row":33,"column":36},"action":"insert","lines":["Materials_Type"]}],[{"start":{"row":33,"column":61},"end":{"row":33,"column":78},"action":"remove","lines":["idOccurrence_Type"],"id":32},{"start":{"row":33,"column":61},"end":{"row":33,"column":62},"action":"insert","lines":["i"]},{"start":{"row":33,"column":62},"end":{"row":33,"column":63},"action":"insert","lines":["d"]},{"start":{"row":33,"column":63},"end":{"row":33,"column":64},"action":"insert","lines":["M"]}],[{"start":{"row":33,"column":61},"end":{"row":33,"column":64},"action":"remove","lines":["idM"],"id":33},{"start":{"row":33,"column":61},"end":{"row":33,"column":76},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":36,"column":19},"end":{"row":36,"column":36},"action":"remove","lines":["idOccurrence_Type"],"id":34},{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["i"]},{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"insert","lines":["d"]},{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["M"]}],[{"start":{"row":36,"column":19},"end":{"row":36,"column":22},"action":"remove","lines":["idM"],"id":38},{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["m"]}],[{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"remove","lines":["m"],"id":39}],[{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["i"],"id":40},{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"insert","lines":["d"]},{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["M"]}],[{"start":{"row":36,"column":19},"end":{"row":36,"column":22},"action":"remove","lines":["idM"],"id":41},{"start":{"row":36,"column":19},"end":{"row":36,"column":34},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":44,"column":27},"end":{"row":44,"column":44},"action":"remove","lines":["idOccurrence_Type"],"id":42},{"start":{"row":44,"column":27},"end":{"row":44,"column":28},"action":"insert","lines":["M"]},{"start":{"row":44,"column":28},"end":{"row":44,"column":29},"action":"insert","lines":["a"]}],[{"start":{"row":44,"column":27},"end":{"row":44,"column":29},"action":"remove","lines":["Ma"],"id":43},{"start":{"row":44,"column":27},"end":{"row":44,"column":41},"action":"insert","lines":["Materials_Type"]}],[{"start":{"row":44,"column":48},"end":{"row":44,"column":65},"action":"remove","lines":["idOccurrence_Type"],"id":44},{"start":{"row":44,"column":48},"end":{"row":44,"column":49},"action":"insert","lines":["i"]},{"start":{"row":44,"column":49},"end":{"row":44,"column":50},"action":"insert","lines":["d"]},{"start":{"row":44,"column":50},"end":{"row":44,"column":51},"action":"insert","lines":["M"]}],[{"start":{"row":44,"column":48},"end":{"row":44,"column":51},"action":"remove","lines":["idM"],"id":45},{"start":{"row":44,"column":48},"end":{"row":44,"column":63},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":45,"column":44},"end":{"row":45,"column":61},"action":"remove","lines":["idOccurrence_Type"],"id":46},{"start":{"row":45,"column":44},"end":{"row":45,"column":45},"action":"insert","lines":["i"]},{"start":{"row":45,"column":45},"end":{"row":45,"column":46},"action":"insert","lines":["d"]},{"start":{"row":45,"column":46},"end":{"row":45,"column":47},"action":"insert","lines":["M"]}],[{"start":{"row":45,"column":44},"end":{"row":45,"column":47},"action":"remove","lines":["idM"],"id":47},{"start":{"row":45,"column":44},"end":{"row":45,"column":59},"action":"insert","lines":["idMaterial_Type"]}]]},"timestamp":1607643936432}
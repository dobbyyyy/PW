{"filter":false,"title":"occurrences_type.controller.js","tooltip":"/backend/controllers/occurrences_type.controller.js","ace":{"folds":[],"scrolltop":593.5,"scrollleft":0,"selection":{"start":{"row":44,"column":43},"end":{"row":44,"column":43},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":36,"state":"no_regex","mode":"ace/mode/javascript"}},"hash":"451e0a75ed2b255469f9f812e16390c73722f962","undoManager":{"mark":71,"position":71,"stack":[[{"start":{"row":0,"column":0},"end":{"row":60,"column":1},"action":"insert","lines":["function getAll(req, res) {","    let sql = \"SELECT idMaterial_Operation, Name, Quantity FROM Materials_Operation order by idMaterial_Operation desc\";","    global.connection.query(sql, function(err, results) {","        if (err) {","            console.log(err);","            return res.status(500).end();","        }","        res.json(results);","    });      ","}","","function getOne(req, res) {","    let sql = \"SELECT idMaterial_Operation, Name, Quantity FROM Materials_Operation WHERE idMaterial_Operation=?\";","    global.connection.query(sql, req.params.idMaterial_Operation, function(err, results) {","        if (err) return res.status(500).end();","        if (results.length == 0) return res.status(404).end();","        return res.json(results[0]);","    });","}","","","function createOne(req, res) {","    let sql = \"INSERT INTO Materials_Operation (Name, Quantity) VALUES (?,?)\";","    global.connection.query(sql, [","        req.body.Name,","        req.body.Quantity","    ], function(err, results) {","        if (err) return res.status(500).end();","        res.json(results);","    });","}","","","function updateOne(req, res) {","    let sql = \"UPDATE Materials_Operation SET Name=?, Quantity=? WHERE idMaterial_Operation=?\"; ","    global.connection.query(sql, [","        req.body.Name,","        req.body.Quantity, ","        req.params.idMaterial_Operation","      ], function(err, results) {","            if (err) return res.status(500).end();","            res.json(results);","    });","}","","function deleteOne(req, res) {","    let sql = \"DELETE from Materials_Operation WHERE idMaterial_Operation=?\"; ","    global.connection.query(sql, req.params.idMaterial_Operation, function(err, results){","        if (err) return res.status(500).end();","        res.status(204).end();","    });","}","","//exportar as funções","module.exports = {","    list: getAll,","    read: getOne,","    create: createOne,","    update: updateOne,","    delete: deleteOne","}"],"id":1}],[{"start":{"row":1,"column":22},"end":{"row":1,"column":42},"action":"remove","lines":["idMaterial_Operation"],"id":2},{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["i"]},{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["d"]},{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["O"]}],[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["c"],"id":3},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["c"]},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["u"]},{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":["r"]},{"start":{"row":1,"column":29},"end":{"row":1,"column":30},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["e"],"id":4},{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":["n"]},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["c"]},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":["e"]},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["s"]},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["_"]}],[{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"insert","lines":["T"],"id":5}],[{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"insert","lines":["y"],"id":6},{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["p"]},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"remove","lines":["s"],"id":7}],[{"start":{"row":1,"column":41},"end":{"row":1,"column":45},"action":"remove","lines":["Name"],"id":8},{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"insert","lines":["D"]},{"start":{"row":1,"column":42},"end":{"row":1,"column":43},"action":"insert","lines":["e"]},{"start":{"row":1,"column":43},"end":{"row":1,"column":44},"action":"insert","lines":["s"]}],[{"start":{"row":1,"column":41},"end":{"row":1,"column":44},"action":"remove","lines":["Des"],"id":9},{"start":{"row":1,"column":41},"end":{"row":1,"column":52},"action":"insert","lines":["Description"]}],[{"start":{"row":1,"column":54},"end":{"row":1,"column":62},"action":"remove","lines":["Quantity"],"id":10},{"start":{"row":1,"column":53},"end":{"row":1,"column":54},"action":"remove","lines":[" "]},{"start":{"row":1,"column":52},"end":{"row":1,"column":53},"action":"remove","lines":[","]}],[{"start":{"row":1,"column":52},"end":{"row":1,"column":53},"action":"insert","lines":[" "],"id":11}],[{"start":{"row":1,"column":52},"end":{"row":1,"column":53},"action":"remove","lines":[" "],"id":12}],[{"start":{"row":1,"column":58},"end":{"row":1,"column":77},"action":"remove","lines":["Materials_Operation"],"id":13},{"start":{"row":1,"column":58},"end":{"row":1,"column":59},"action":"insert","lines":["O"]},{"start":{"row":1,"column":59},"end":{"row":1,"column":60},"action":"insert","lines":["c"]}],[{"start":{"row":1,"column":58},"end":{"row":1,"column":60},"action":"remove","lines":["Oc"],"id":14},{"start":{"row":1,"column":58},"end":{"row":1,"column":68},"action":"insert","lines":["Ocurrences"]}],[{"start":{"row":1,"column":68},"end":{"row":1,"column":69},"action":"insert","lines":["_"],"id":15},{"start":{"row":1,"column":69},"end":{"row":1,"column":70},"action":"insert","lines":["T"]}],[{"start":{"row":1,"column":70},"end":{"row":1,"column":71},"action":"insert","lines":["y"],"id":16},{"start":{"row":1,"column":71},"end":{"row":1,"column":72},"action":"insert","lines":["p"]},{"start":{"row":1,"column":72},"end":{"row":1,"column":73},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":83},"end":{"row":1,"column":103},"action":"remove","lines":["idMaterial_Operation"],"id":17},{"start":{"row":1,"column":83},"end":{"row":1,"column":84},"action":"insert","lines":["i"]},{"start":{"row":1,"column":84},"end":{"row":1,"column":85},"action":"insert","lines":["d"]}],[{"start":{"row":1,"column":83},"end":{"row":1,"column":85},"action":"remove","lines":["id"],"id":18},{"start":{"row":1,"column":83},"end":{"row":1,"column":100},"action":"insert","lines":["idOccurrence_Type"]}],[{"start":{"row":12,"column":22},"end":{"row":12,"column":42},"action":"remove","lines":["idMaterial_Operation"],"id":19},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["i"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["d"]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["P"]}],[{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"remove","lines":["P"],"id":20}],[{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["O"],"id":21}],[{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"insert","lines":["c"],"id":22}],[{"start":{"row":12,"column":22},"end":{"row":12,"column":26},"action":"remove","lines":["idOc"],"id":23},{"start":{"row":12,"column":22},"end":{"row":12,"column":39},"action":"insert","lines":["idOccurrence_Type"]}],[{"start":{"row":12,"column":41},"end":{"row":12,"column":45},"action":"remove","lines":["Name"],"id":24},{"start":{"row":12,"column":41},"end":{"row":12,"column":42},"action":"insert","lines":["D"]},{"start":{"row":12,"column":42},"end":{"row":12,"column":43},"action":"insert","lines":["e"]},{"start":{"row":12,"column":43},"end":{"row":12,"column":44},"action":"insert","lines":["s"]}],[{"start":{"row":12,"column":41},"end":{"row":12,"column":44},"action":"remove","lines":["Des"],"id":25},{"start":{"row":12,"column":41},"end":{"row":12,"column":52},"action":"insert","lines":["Description"]}],[{"start":{"row":12,"column":54},"end":{"row":12,"column":62},"action":"remove","lines":["Quantity"],"id":26},{"start":{"row":12,"column":53},"end":{"row":12,"column":54},"action":"remove","lines":[" "]},{"start":{"row":12,"column":52},"end":{"row":12,"column":53},"action":"remove","lines":[","]}],[{"start":{"row":12,"column":58},"end":{"row":12,"column":77},"action":"remove","lines":["Materials_Operation"],"id":27},{"start":{"row":12,"column":58},"end":{"row":12,"column":59},"action":"insert","lines":["O"]},{"start":{"row":12,"column":59},"end":{"row":12,"column":60},"action":"insert","lines":["c"]},{"start":{"row":12,"column":60},"end":{"row":12,"column":61},"action":"insert","lines":["c"]},{"start":{"row":12,"column":61},"end":{"row":12,"column":62},"action":"insert","lines":["u"]}],[{"start":{"row":12,"column":61},"end":{"row":12,"column":62},"action":"remove","lines":["u"],"id":28},{"start":{"row":12,"column":60},"end":{"row":12,"column":61},"action":"remove","lines":["c"]},{"start":{"row":12,"column":59},"end":{"row":12,"column":60},"action":"remove","lines":["c"]},{"start":{"row":12,"column":58},"end":{"row":12,"column":59},"action":"remove","lines":["O"]}],[{"start":{"row":12,"column":58},"end":{"row":12,"column":59},"action":"insert","lines":["O"],"id":29}],[{"start":{"row":1,"column":60},"end":{"row":1,"column":61},"action":"insert","lines":["c"],"id":30}],[{"start":{"row":12,"column":59},"end":{"row":12,"column":60},"action":"insert","lines":["c"],"id":31},{"start":{"row":12,"column":60},"end":{"row":12,"column":61},"action":"insert","lines":["c"]}],[{"start":{"row":12,"column":58},"end":{"row":12,"column":61},"action":"remove","lines":["Occ"],"id":32},{"start":{"row":12,"column":58},"end":{"row":12,"column":74},"action":"insert","lines":["Occurrences_Type"]}],[{"start":{"row":12,"column":81},"end":{"row":12,"column":101},"action":"remove","lines":["idMaterial_Operation"],"id":33},{"start":{"row":12,"column":81},"end":{"row":12,"column":82},"action":"insert","lines":["i"]},{"start":{"row":12,"column":82},"end":{"row":12,"column":83},"action":"insert","lines":["d"]},{"start":{"row":12,"column":83},"end":{"row":12,"column":84},"action":"insert","lines":["O"]}],[{"start":{"row":12,"column":81},"end":{"row":12,"column":84},"action":"remove","lines":["idO"],"id":34},{"start":{"row":12,"column":81},"end":{"row":12,"column":98},"action":"insert","lines":["idOccurrence_Type"]}],[{"start":{"row":13,"column":44},"end":{"row":13,"column":64},"action":"remove","lines":["idMaterial_Operation"],"id":35},{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"insert","lines":["i"]},{"start":{"row":13,"column":45},"end":{"row":13,"column":46},"action":"insert","lines":["d"]},{"start":{"row":13,"column":46},"end":{"row":13,"column":47},"action":"insert","lines":["O"]}],[{"start":{"row":13,"column":44},"end":{"row":13,"column":47},"action":"remove","lines":["idO"],"id":36},{"start":{"row":13,"column":44},"end":{"row":13,"column":61},"action":"insert","lines":["idOccurrence_Type"]}],[{"start":{"row":22,"column":27},"end":{"row":22,"column":46},"action":"remove","lines":["Materials_Operation"],"id":37},{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"insert","lines":["O"]},{"start":{"row":22,"column":28},"end":{"row":22,"column":29},"action":"insert","lines":["c"]},{"start":{"row":22,"column":29},"end":{"row":22,"column":30},"action":"insert","lines":["c"]}],[{"start":{"row":22,"column":27},"end":{"row":22,"column":30},"action":"remove","lines":["Occ"],"id":38},{"start":{"row":22,"column":27},"end":{"row":22,"column":43},"action":"insert","lines":["Occurrences_Type"]}],[{"start":{"row":22,"column":45},"end":{"row":22,"column":49},"action":"remove","lines":["Name"],"id":39},{"start":{"row":22,"column":45},"end":{"row":22,"column":46},"action":"insert","lines":["D"]},{"start":{"row":22,"column":46},"end":{"row":22,"column":47},"action":"insert","lines":["e"]},{"start":{"row":22,"column":47},"end":{"row":22,"column":48},"action":"insert","lines":["s"]}],[{"start":{"row":22,"column":45},"end":{"row":22,"column":48},"action":"remove","lines":["Des"],"id":40},{"start":{"row":22,"column":45},"end":{"row":22,"column":56},"action":"insert","lines":["Description"]}],[{"start":{"row":22,"column":65},"end":{"row":22,"column":66},"action":"remove","lines":["y"],"id":41},{"start":{"row":22,"column":64},"end":{"row":22,"column":65},"action":"remove","lines":["t"]},{"start":{"row":22,"column":63},"end":{"row":22,"column":64},"action":"remove","lines":["i"]},{"start":{"row":22,"column":62},"end":{"row":22,"column":63},"action":"remove","lines":["t"]},{"start":{"row":22,"column":61},"end":{"row":22,"column":62},"action":"remove","lines":["n"]},{"start":{"row":22,"column":60},"end":{"row":22,"column":61},"action":"remove","lines":["a"]},{"start":{"row":22,"column":59},"end":{"row":22,"column":60},"action":"remove","lines":["u"]},{"start":{"row":22,"column":58},"end":{"row":22,"column":59},"action":"remove","lines":["Q"]},{"start":{"row":22,"column":57},"end":{"row":22,"column":58},"action":"remove","lines":[" "]},{"start":{"row":22,"column":56},"end":{"row":22,"column":57},"action":"remove","lines":[","]}],[{"start":{"row":22,"column":67},"end":{"row":22,"column":68},"action":"remove","lines":[","],"id":42},{"start":{"row":22,"column":66},"end":{"row":22,"column":67},"action":"remove","lines":["?"]}],[{"start":{"row":24,"column":17},"end":{"row":24,"column":21},"action":"remove","lines":["Name"],"id":43},{"start":{"row":24,"column":17},"end":{"row":24,"column":18},"action":"insert","lines":["D"]},{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"insert","lines":["s"]}],[{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"remove","lines":["s"],"id":44}],[{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"insert","lines":["e"],"id":45},{"start":{"row":24,"column":19},"end":{"row":24,"column":20},"action":"insert","lines":["s"]}],[{"start":{"row":24,"column":17},"end":{"row":24,"column":20},"action":"remove","lines":["Des"],"id":46},{"start":{"row":24,"column":17},"end":{"row":24,"column":28},"action":"insert","lines":["Description"]}],[{"start":{"row":25,"column":17},"end":{"row":25,"column":25},"action":"remove","lines":["Quantity"],"id":47},{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"remove","lines":["."]},{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"remove","lines":["y"]},{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"remove","lines":["d"]},{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"remove","lines":["o"]},{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"remove","lines":["b"]},{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"remove","lines":["."]},{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"remove","lines":["q"]},{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"remove","lines":["e"]},{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"remove","lines":["r"]},{"start":{"row":25,"column":4},"end":{"row":25,"column":8},"action":"remove","lines":["    "]}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"remove","lines":["    "],"id":48},{"start":{"row":24,"column":29},"end":{"row":25,"column":0},"action":"remove","lines":["",""]},{"start":{"row":24,"column":28},"end":{"row":24,"column":29},"action":"remove","lines":[","]}],[{"start":{"row":33,"column":22},"end":{"row":33,"column":41},"action":"remove","lines":["Materials_Operation"],"id":49},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["O"]},{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":["c"]},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":["c"]}],[{"start":{"row":33,"column":22},"end":{"row":33,"column":25},"action":"remove","lines":["Occ"],"id":50},{"start":{"row":33,"column":22},"end":{"row":33,"column":38},"action":"insert","lines":["Occurrences_Type"]}],[{"start":{"row":33,"column":43},"end":{"row":33,"column":47},"action":"remove","lines":["Name"],"id":51},{"start":{"row":33,"column":43},"end":{"row":33,"column":44},"action":"insert","lines":["D"]},{"start":{"row":33,"column":44},"end":{"row":33,"column":45},"action":"insert","lines":["e"]},{"start":{"row":33,"column":45},"end":{"row":33,"column":46},"action":"insert","lines":["s"]}],[{"start":{"row":33,"column":43},"end":{"row":33,"column":46},"action":"remove","lines":["Des"],"id":52},{"start":{"row":33,"column":43},"end":{"row":33,"column":54},"action":"insert","lines":["Description"]}],[{"start":{"row":33,"column":67},"end":{"row":33,"column":68},"action":"remove","lines":["?"],"id":53},{"start":{"row":33,"column":66},"end":{"row":33,"column":67},"action":"remove","lines":["="]},{"start":{"row":33,"column":65},"end":{"row":33,"column":66},"action":"remove","lines":["y"]},{"start":{"row":33,"column":64},"end":{"row":33,"column":65},"action":"remove","lines":["t"]},{"start":{"row":33,"column":63},"end":{"row":33,"column":64},"action":"remove","lines":["i"]},{"start":{"row":33,"column":62},"end":{"row":33,"column":63},"action":"remove","lines":["t"]},{"start":{"row":33,"column":61},"end":{"row":33,"column":62},"action":"remove","lines":["n"]},{"start":{"row":33,"column":60},"end":{"row":33,"column":61},"action":"remove","lines":["a"]},{"start":{"row":33,"column":59},"end":{"row":33,"column":60},"action":"remove","lines":["u"]},{"start":{"row":33,"column":58},"end":{"row":33,"column":59},"action":"remove","lines":["Q"]},{"start":{"row":33,"column":57},"end":{"row":33,"column":58},"action":"remove","lines":[" "]},{"start":{"row":33,"column":56},"end":{"row":33,"column":57},"action":"remove","lines":[","]}],[{"start":{"row":33,"column":63},"end":{"row":33,"column":83},"action":"remove","lines":["idMaterial_Operation"],"id":54},{"start":{"row":33,"column":63},"end":{"row":33,"column":64},"action":"insert","lines":["d"]}],[{"start":{"row":33,"column":63},"end":{"row":33,"column":64},"action":"remove","lines":["d"],"id":55}],[{"start":{"row":33,"column":63},"end":{"row":33,"column":64},"action":"insert","lines":["i"],"id":56},{"start":{"row":33,"column":64},"end":{"row":33,"column":65},"action":"insert","lines":["d"]},{"start":{"row":33,"column":65},"end":{"row":33,"column":66},"action":"insert","lines":["O"]}],[{"start":{"row":33,"column":63},"end":{"row":33,"column":66},"action":"remove","lines":["idO"],"id":57},{"start":{"row":33,"column":63},"end":{"row":33,"column":80},"action":"insert","lines":["idOccurrence_Type"]}],[{"start":{"row":35,"column":17},"end":{"row":35,"column":21},"action":"remove","lines":["Name"],"id":58},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["D"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["e"]},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":["s"]}],[{"start":{"row":35,"column":17},"end":{"row":35,"column":20},"action":"remove","lines":["Des"],"id":59},{"start":{"row":35,"column":17},"end":{"row":35,"column":28},"action":"insert","lines":["Description"]}],[{"start":{"row":36,"column":7},"end":{"row":36,"column":27},"action":"remove","lines":[" req.body.Quantity, "],"id":60},{"start":{"row":36,"column":6},"end":{"row":36,"column":7},"action":"remove","lines":[" "]},{"start":{"row":36,"column":5},"end":{"row":36,"column":6},"action":"remove","lines":[" "]},{"start":{"row":36,"column":4},"end":{"row":36,"column":5},"action":"remove","lines":[" "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"remove","lines":["    "]},{"start":{"row":35,"column":29},"end":{"row":36,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":36,"column":19},"end":{"row":36,"column":39},"action":"remove","lines":["idMaterial_Operation"],"id":61},{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["i"]},{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"insert","lines":["d"]},{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["O"]}],[{"start":{"row":36,"column":19},"end":{"row":36,"column":22},"action":"remove","lines":["idO"],"id":62},{"start":{"row":36,"column":19},"end":{"row":36,"column":36},"action":"insert","lines":["idOccurrence_Type"]}],[{"start":{"row":44,"column":27},"end":{"row":44,"column":46},"action":"remove","lines":["Materials_Operation"],"id":63},{"start":{"row":44,"column":27},"end":{"row":44,"column":28},"action":"insert","lines":["O"]}],[{"start":{"row":44,"column":27},"end":{"row":44,"column":28},"action":"remove","lines":["O"],"id":64}],[{"start":{"row":44,"column":27},"end":{"row":44,"column":28},"action":"insert","lines":["i"],"id":65},{"start":{"row":44,"column":28},"end":{"row":44,"column":29},"action":"insert","lines":["d"]},{"start":{"row":44,"column":29},"end":{"row":44,"column":30},"action":"insert","lines":["O"]}],[{"start":{"row":44,"column":27},"end":{"row":44,"column":30},"action":"remove","lines":["idO"],"id":66},{"start":{"row":44,"column":27},"end":{"row":44,"column":44},"action":"insert","lines":["idOccurrence_Type"]}],[{"start":{"row":44,"column":51},"end":{"row":44,"column":71},"action":"remove","lines":["idMaterial_Operation"],"id":67},{"start":{"row":44,"column":51},"end":{"row":44,"column":52},"action":"insert","lines":["i"]},{"start":{"row":44,"column":52},"end":{"row":44,"column":53},"action":"insert","lines":["d"]},{"start":{"row":44,"column":53},"end":{"row":44,"column":54},"action":"insert","lines":["O"]}],[{"start":{"row":44,"column":51},"end":{"row":44,"column":54},"action":"remove","lines":["idO"],"id":68},{"start":{"row":44,"column":51},"end":{"row":44,"column":68},"action":"insert","lines":["idOccurrence_Type"]}],[{"start":{"row":45,"column":44},"end":{"row":45,"column":64},"action":"remove","lines":["idMaterial_Operation"],"id":69},{"start":{"row":45,"column":44},"end":{"row":45,"column":45},"action":"insert","lines":["i"]},{"start":{"row":45,"column":45},"end":{"row":45,"column":46},"action":"insert","lines":["d"]}],[{"start":{"row":45,"column":44},"end":{"row":45,"column":46},"action":"remove","lines":["id"],"id":70},{"start":{"row":45,"column":44},"end":{"row":45,"column":61},"action":"insert","lines":["idOccurrence_Type"]}],[{"start":{"row":44,"column":27},"end":{"row":44,"column":44},"action":"remove","lines":["idOccurrence_Type"],"id":71},{"start":{"row":44,"column":27},"end":{"row":44,"column":28},"action":"insert","lines":["O"]},{"start":{"row":44,"column":28},"end":{"row":44,"column":29},"action":"insert","lines":["c"]},{"start":{"row":44,"column":29},"end":{"row":44,"column":30},"action":"insert","lines":["c"]}],[{"start":{"row":44,"column":27},"end":{"row":44,"column":30},"action":"remove","lines":["Occ"],"id":72},{"start":{"row":44,"column":27},"end":{"row":44,"column":43},"action":"insert","lines":["Occurrences_Type"]}]]},"timestamp":1607643918052}
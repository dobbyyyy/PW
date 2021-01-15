{"filter":false,"title":"materials.js","tooltip":"/backend/controllers/materials.js","undoManager":{"mark":69,"position":69,"stack":[[{"start":{"row":21,"column":3},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":46},{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":23,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["router.delete('/entities/:id', (req, res) =>{","    const update =  parseInt(req.params.id)","    const query = bd.connection.query('DELETE FROM Entities WHERE idEntity=?', update, function(err, rows, fields) {","        console.log(query.sql);","        if (!err) {","            console.log(\"Database succesfully updated.\")","        }","        else {","            console.log(err);","        }","    });","    res.end();","});"],"id":47}],[{"start":{"row":23,"column":16},"end":{"row":23,"column":24},"action":"remove","lines":["entities"],"id":48},{"start":{"row":23,"column":16},"end":{"row":23,"column":25},"action":"insert","lines":["materials"]}],[{"start":{"row":25,"column":51},"end":{"row":25,"column":59},"action":"remove","lines":["Entities"],"id":49},{"start":{"row":25,"column":51},"end":{"row":25,"column":52},"action":"insert","lines":["M"]}],[{"start":{"row":25,"column":51},"end":{"row":25,"column":52},"action":"remove","lines":["M"],"id":50},{"start":{"row":25,"column":51},"end":{"row":25,"column":60},"action":"insert","lines":["Materials"]}],[{"start":{"row":25,"column":67},"end":{"row":25,"column":75},"action":"remove","lines":["idEntity"],"id":51},{"start":{"row":25,"column":67},"end":{"row":25,"column":68},"action":"insert","lines":["i"]},{"start":{"row":25,"column":68},"end":{"row":25,"column":69},"action":"insert","lines":["d"]},{"start":{"row":25,"column":69},"end":{"row":25,"column":70},"action":"insert","lines":["M"]}],[{"start":{"row":25,"column":67},"end":{"row":25,"column":70},"action":"remove","lines":["idM"],"id":52},{"start":{"row":25,"column":67},"end":{"row":25,"column":77},"action":"insert","lines":["idMaterial"]}],[{"start":{"row":18,"column":16},"end":{"row":22,"column":0},"action":"remove","lines":["","router.delete('/materials/:id', (req, res) =>{","    bd.execSQLQuery('DELETE FROM Materials WHERE idMaterial=' + parseInt(req.params.id), res);","});",""],"id":53}],[{"start":{"row":42,"column":3},"end":{"row":43,"column":0},"action":"insert","lines":["",""],"id":54},{"start":{"row":43,"column":0},"end":{"row":44,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":44,"column":0},"end":{"row":68,"column":3},"action":"insert","lines":["router.post('/entities',(req,res)=>{","    //const idEntity = req.body.idEntity;","    const Name = req.body.Name;","    const Type = req.body.Type;","    const Street = req.body.Street;","    const District = req.body.District;","    const Zip_Code = req.body.Zip_Code;","        if (Name != \"NULL\" && typeof(Name) != \"undefined\") {","            const post = {Name: Name, Type: Type, Street: Street, District: District, Zip_Code: Zip_Code};","            //criar e executar a query de gravação na BD para inserir os dados presentes no post","            const query = bd.connection.query('INSERT INTO Entities SET ?', post, function(err, rows, fields) {","                console.log(query.sql);","                if (!err) {","                    console.log(\"Database succesfully updated.\")","                }","                else {","                    console.log(err);","                    console.log(\"data missing\")","                }","            });","        }","        else","            console.log(\"data\")","            res.end();","});"],"id":55}],[{"start":{"row":45,"column":4},"end":{"row":50,"column":39},"action":"remove","lines":["//const idEntity = req.body.idEntity;","    const Name = req.body.Name;","    const Type = req.body.Type;","    const Street = req.body.Street;","    const District = req.body.District;","    const Zip_Code = req.body.Zip_Code;"],"id":56},{"start":{"row":45,"column":4},"end":{"row":48,"column":53},"action":"insert","lines":["const idMaterial = req.body.idMaterial;","    const Name = req.body.Name;","    const Quantity = req.body.Quantity;","    const idMaterial_Type = req.body.idMaterial_Type;"]}],[{"start":{"row":45,"column":4},"end":{"row":45,"column":5},"action":"insert","lines":["/"],"id":57},{"start":{"row":45,"column":5},"end":{"row":45,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":49,"column":30},"end":{"row":49,"column":47},"action":"insert","lines":["Name != \"NULL\" &&"],"id":58}],[{"start":{"row":49,"column":47},"end":{"row":49,"column":48},"action":"insert","lines":[" "],"id":59}],[{"start":{"row":49,"column":30},"end":{"row":49,"column":34},"action":"remove","lines":["Name"],"id":60},{"start":{"row":49,"column":30},"end":{"row":49,"column":31},"action":"insert","lines":["Q"]},{"start":{"row":49,"column":31},"end":{"row":49,"column":32},"action":"insert","lines":["u"]},{"start":{"row":49,"column":32},"end":{"row":49,"column":33},"action":"insert","lines":["a"]},{"start":{"row":49,"column":33},"end":{"row":49,"column":34},"action":"insert","lines":["n"]}],[{"start":{"row":49,"column":30},"end":{"row":49,"column":34},"action":"remove","lines":["Quan"],"id":61},{"start":{"row":49,"column":30},"end":{"row":49,"column":38},"action":"insert","lines":["Quantity"]}],[{"start":{"row":50,"column":38},"end":{"row":50,"column":42},"action":"remove","lines":["Type"],"id":62},{"start":{"row":50,"column":38},"end":{"row":50,"column":39},"action":"insert","lines":["Q"]},{"start":{"row":50,"column":39},"end":{"row":50,"column":40},"action":"insert","lines":["u"]},{"start":{"row":50,"column":40},"end":{"row":50,"column":41},"action":"insert","lines":["a"]},{"start":{"row":50,"column":41},"end":{"row":50,"column":42},"action":"insert","lines":["n"]}],[{"start":{"row":50,"column":38},"end":{"row":50,"column":42},"action":"remove","lines":["Quan"],"id":63},{"start":{"row":50,"column":38},"end":{"row":50,"column":46},"action":"insert","lines":["Quantity"]}],[{"start":{"row":50,"column":48},"end":{"row":50,"column":52},"action":"remove","lines":["Type"],"id":64},{"start":{"row":50,"column":48},"end":{"row":50,"column":49},"action":"insert","lines":["Q"]},{"start":{"row":50,"column":49},"end":{"row":50,"column":50},"action":"insert","lines":["u"]},{"start":{"row":50,"column":50},"end":{"row":50,"column":51},"action":"insert","lines":["a"]}],[{"start":{"row":50,"column":48},"end":{"row":50,"column":51},"action":"remove","lines":["Qua"],"id":65},{"start":{"row":50,"column":48},"end":{"row":50,"column":56},"action":"insert","lines":["Quantity"]}],[{"start":{"row":50,"column":58},"end":{"row":50,"column":64},"action":"remove","lines":["Street"],"id":66},{"start":{"row":50,"column":58},"end":{"row":50,"column":59},"action":"insert","lines":["i"]},{"start":{"row":50,"column":59},"end":{"row":50,"column":60},"action":"insert","lines":["d"]}],[{"start":{"row":50,"column":58},"end":{"row":50,"column":60},"action":"remove","lines":["id"],"id":67},{"start":{"row":50,"column":58},"end":{"row":50,"column":73},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":50,"column":75},"end":{"row":50,"column":81},"action":"remove","lines":["Street"],"id":68},{"start":{"row":50,"column":75},"end":{"row":50,"column":76},"action":"insert","lines":["i"]},{"start":{"row":50,"column":76},"end":{"row":50,"column":77},"action":"insert","lines":["d"]}],[{"start":{"row":50,"column":75},"end":{"row":50,"column":77},"action":"remove","lines":["id"],"id":69},{"start":{"row":50,"column":75},"end":{"row":50,"column":90},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":50,"column":129},"end":{"row":50,"column":130},"action":"remove","lines":["e"],"id":70},{"start":{"row":50,"column":128},"end":{"row":50,"column":129},"action":"remove","lines":["d"]},{"start":{"row":50,"column":127},"end":{"row":50,"column":128},"action":"remove","lines":["o"]},{"start":{"row":50,"column":126},"end":{"row":50,"column":127},"action":"remove","lines":["C"]},{"start":{"row":50,"column":125},"end":{"row":50,"column":126},"action":"remove","lines":["_"]},{"start":{"row":50,"column":124},"end":{"row":50,"column":125},"action":"remove","lines":["p"]},{"start":{"row":50,"column":123},"end":{"row":50,"column":124},"action":"remove","lines":["i"]},{"start":{"row":50,"column":122},"end":{"row":50,"column":123},"action":"remove","lines":["Z"]},{"start":{"row":50,"column":121},"end":{"row":50,"column":122},"action":"remove","lines":[" "]},{"start":{"row":50,"column":120},"end":{"row":50,"column":121},"action":"remove","lines":[":"]},{"start":{"row":50,"column":119},"end":{"row":50,"column":120},"action":"remove","lines":["e"]},{"start":{"row":50,"column":118},"end":{"row":50,"column":119},"action":"remove","lines":["d"]},{"start":{"row":50,"column":117},"end":{"row":50,"column":118},"action":"remove","lines":["o"]},{"start":{"row":50,"column":116},"end":{"row":50,"column":117},"action":"remove","lines":["C"]},{"start":{"row":50,"column":115},"end":{"row":50,"column":116},"action":"remove","lines":["_"]},{"start":{"row":50,"column":114},"end":{"row":50,"column":115},"action":"remove","lines":["p"]},{"start":{"row":50,"column":113},"end":{"row":50,"column":114},"action":"remove","lines":["i"]},{"start":{"row":50,"column":112},"end":{"row":50,"column":113},"action":"remove","lines":["Z"]},{"start":{"row":50,"column":111},"end":{"row":50,"column":112},"action":"remove","lines":[" "]}],[{"start":{"row":50,"column":110},"end":{"row":50,"column":111},"action":"remove","lines":[","],"id":71},{"start":{"row":50,"column":109},"end":{"row":50,"column":110},"action":"remove","lines":["t"]},{"start":{"row":50,"column":108},"end":{"row":50,"column":109},"action":"remove","lines":["c"]},{"start":{"row":50,"column":107},"end":{"row":50,"column":108},"action":"remove","lines":["i"]},{"start":{"row":50,"column":106},"end":{"row":50,"column":107},"action":"remove","lines":["r"]},{"start":{"row":50,"column":105},"end":{"row":50,"column":106},"action":"remove","lines":["t"]},{"start":{"row":50,"column":104},"end":{"row":50,"column":105},"action":"remove","lines":["s"]},{"start":{"row":50,"column":103},"end":{"row":50,"column":104},"action":"remove","lines":["i"]},{"start":{"row":50,"column":102},"end":{"row":50,"column":103},"action":"remove","lines":["D"]},{"start":{"row":50,"column":101},"end":{"row":50,"column":102},"action":"remove","lines":[" "]},{"start":{"row":50,"column":100},"end":{"row":50,"column":101},"action":"remove","lines":[":"]},{"start":{"row":50,"column":99},"end":{"row":50,"column":100},"action":"remove","lines":["t"]},{"start":{"row":50,"column":98},"end":{"row":50,"column":99},"action":"remove","lines":["c"]},{"start":{"row":50,"column":97},"end":{"row":50,"column":98},"action":"remove","lines":["i"]},{"start":{"row":50,"column":96},"end":{"row":50,"column":97},"action":"remove","lines":["r"]},{"start":{"row":50,"column":95},"end":{"row":50,"column":96},"action":"remove","lines":["t"]},{"start":{"row":50,"column":94},"end":{"row":50,"column":95},"action":"remove","lines":["s"]},{"start":{"row":50,"column":93},"end":{"row":50,"column":94},"action":"remove","lines":["i"]},{"start":{"row":50,"column":92},"end":{"row":50,"column":93},"action":"remove","lines":["D"]}],[{"start":{"row":50,"column":91},"end":{"row":50,"column":92},"action":"remove","lines":[" "],"id":72},{"start":{"row":50,"column":90},"end":{"row":50,"column":91},"action":"remove","lines":[","]}],[{"start":{"row":52,"column":59},"end":{"row":52,"column":67},"action":"remove","lines":["Entities"],"id":73},{"start":{"row":52,"column":59},"end":{"row":52,"column":60},"action":"insert","lines":["M"]}],[{"start":{"row":52,"column":59},"end":{"row":52,"column":60},"action":"remove","lines":["M"],"id":74},{"start":{"row":52,"column":59},"end":{"row":52,"column":68},"action":"insert","lines":["Materials"]}],[{"start":{"row":44,"column":14},"end":{"row":44,"column":22},"action":"remove","lines":["entities"],"id":75},{"start":{"row":44,"column":14},"end":{"row":44,"column":23},"action":"insert","lines":["materials"]}],[{"start":{"row":76,"column":3},"end":{"row":77,"column":0},"action":"insert","lines":["",""],"id":76},{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":78,"column":0},"end":{"row":95,"column":3},"action":"insert","lines":["router.put('/entities/:id', (req, res) =>{","    const idEntity = parseInt(req.params.id);","    const Name = req.body.Name;","    const Type = req.body.Type;","    const Street = req.body.Street;","    const District = req.body.District;","    const Zip_Code = req.body.Zip_Code;","    const update = [Name,Type,Street,District,Zip_Code,idEntity];","    ","    bd.connection.query('UPDATE Entities SET Name=?, Type=?, Street=?, District=?, Zip_Code=? WHERE idEntity=?', update, function(err,result){","        if(err){","            console.log(err);","        }else{","            console.log(\"Database succesfully updated\");","        }","    });","    res.end();","});"],"id":77}],[{"start":{"row":34,"column":7},"end":{"row":42,"column":3},"action":"remove","lines":["","router.post('/materials', (req, res) =>{","    const idMaterial = req.body.idMaterial;","    const Name = req.body.Name;","    const Quantity = req.body.Quantity;","    const idMaterial_Type = req.body.idMaterial_Type;","    bd.execSQLQuery(`INSERT INTO Materials (idMaterial, Name, Quantity, idMaterial_Type)","    VALUES('${idMaterial}','${Name}','${Quantity}','${idMaterial_Type}')`, res);","});"],"id":78},{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"remove","lines":[":"]}],[{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"insert","lines":[":"],"id":79}],[{"start":{"row":34,"column":7},"end":{"row":35,"column":0},"action":"remove","lines":["",""],"id":80}],[{"start":{"row":69,"column":13},"end":{"row":69,"column":21},"action":"remove","lines":["entities"],"id":81},{"start":{"row":69,"column":13},"end":{"row":69,"column":22},"action":"insert","lines":["materials"]}],[{"start":{"row":70,"column":4},"end":{"row":75,"column":39},"action":"remove","lines":["const idEntity = parseInt(req.params.id);","    const Name = req.body.Name;","    const Type = req.body.Type;","    const Street = req.body.Street;","    const District = req.body.District;","    const Zip_Code = req.body.Zip_Code;"],"id":82},{"start":{"row":70,"column":4},"end":{"row":73,"column":53},"action":"insert","lines":["const idMaterial = parseInt(req.params.id);","    const Name = req.body.Name;","    const Quantity = req.body.Quantity;","    const idMaterial_Type = req.body.idMaterial_Type;"]}],[{"start":{"row":74,"column":25},"end":{"row":74,"column":29},"action":"remove","lines":["Type"],"id":83},{"start":{"row":74,"column":25},"end":{"row":74,"column":26},"action":"insert","lines":["Q"]},{"start":{"row":74,"column":26},"end":{"row":74,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":74,"column":26},"end":{"row":74,"column":27},"action":"remove","lines":["a"],"id":84}],[{"start":{"row":74,"column":26},"end":{"row":74,"column":27},"action":"insert","lines":["u"],"id":85}],[{"start":{"row":74,"column":25},"end":{"row":74,"column":27},"action":"remove","lines":["Qu"],"id":86},{"start":{"row":74,"column":25},"end":{"row":74,"column":33},"action":"insert","lines":["Quantity"]}],[{"start":{"row":74,"column":34},"end":{"row":74,"column":40},"action":"remove","lines":["Street"],"id":87},{"start":{"row":74,"column":34},"end":{"row":74,"column":35},"action":"insert","lines":["i"]},{"start":{"row":74,"column":35},"end":{"row":74,"column":36},"action":"insert","lines":["d"]},{"start":{"row":74,"column":36},"end":{"row":74,"column":37},"action":"insert","lines":["M"]}],[{"start":{"row":74,"column":34},"end":{"row":74,"column":37},"action":"remove","lines":["idM"],"id":88},{"start":{"row":74,"column":34},"end":{"row":74,"column":49},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":74,"column":50},"end":{"row":74,"column":58},"action":"remove","lines":["District"],"id":89},{"start":{"row":74,"column":50},"end":{"row":74,"column":51},"action":"insert","lines":["i"]},{"start":{"row":74,"column":51},"end":{"row":74,"column":52},"action":"insert","lines":["d"]},{"start":{"row":74,"column":52},"end":{"row":74,"column":53},"action":"insert","lines":["M"]}],[{"start":{"row":74,"column":50},"end":{"row":74,"column":53},"action":"remove","lines":["idM"],"id":90},{"start":{"row":74,"column":50},"end":{"row":74,"column":60},"action":"insert","lines":["idMaterial"]}],[{"start":{"row":74,"column":77},"end":{"row":74,"column":78},"action":"remove","lines":["y"],"id":91},{"start":{"row":74,"column":76},"end":{"row":74,"column":77},"action":"remove","lines":["t"]},{"start":{"row":74,"column":75},"end":{"row":74,"column":76},"action":"remove","lines":["i"]},{"start":{"row":74,"column":74},"end":{"row":74,"column":75},"action":"remove","lines":["t"]},{"start":{"row":74,"column":73},"end":{"row":74,"column":74},"action":"remove","lines":["n"]},{"start":{"row":74,"column":72},"end":{"row":74,"column":73},"action":"remove","lines":["E"]},{"start":{"row":74,"column":71},"end":{"row":74,"column":72},"action":"remove","lines":["d"]},{"start":{"row":74,"column":70},"end":{"row":74,"column":71},"action":"remove","lines":["i"]},{"start":{"row":74,"column":69},"end":{"row":74,"column":70},"action":"remove","lines":[","]},{"start":{"row":74,"column":68},"end":{"row":74,"column":69},"action":"remove","lines":["e"]},{"start":{"row":74,"column":67},"end":{"row":74,"column":68},"action":"remove","lines":["d"]},{"start":{"row":74,"column":66},"end":{"row":74,"column":67},"action":"remove","lines":["o"]},{"start":{"row":74,"column":65},"end":{"row":74,"column":66},"action":"remove","lines":["C"]}],[{"start":{"row":74,"column":64},"end":{"row":74,"column":65},"action":"remove","lines":["_"],"id":92},{"start":{"row":74,"column":63},"end":{"row":74,"column":64},"action":"remove","lines":["p"]},{"start":{"row":74,"column":62},"end":{"row":74,"column":63},"action":"remove","lines":["i"]},{"start":{"row":74,"column":61},"end":{"row":74,"column":62},"action":"remove","lines":["Z"]},{"start":{"row":74,"column":60},"end":{"row":74,"column":61},"action":"remove","lines":[","]}],[{"start":{"row":76,"column":32},"end":{"row":76,"column":40},"action":"remove","lines":["Entities"],"id":93},{"start":{"row":76,"column":32},"end":{"row":76,"column":33},"action":"insert","lines":["M"]}],[{"start":{"row":76,"column":32},"end":{"row":76,"column":33},"action":"remove","lines":["M"],"id":94},{"start":{"row":76,"column":32},"end":{"row":76,"column":41},"action":"insert","lines":["Materials"]}],[{"start":{"row":76,"column":54},"end":{"row":76,"column":58},"action":"remove","lines":["Type"],"id":95},{"start":{"row":76,"column":54},"end":{"row":76,"column":55},"action":"insert","lines":["Q"]},{"start":{"row":76,"column":55},"end":{"row":76,"column":56},"action":"insert","lines":["u"]},{"start":{"row":76,"column":56},"end":{"row":76,"column":57},"action":"insert","lines":["a"]}],[{"start":{"row":76,"column":54},"end":{"row":76,"column":57},"action":"remove","lines":["Qua"],"id":96},{"start":{"row":76,"column":54},"end":{"row":76,"column":62},"action":"insert","lines":["Quantity"]}],[{"start":{"row":76,"column":66},"end":{"row":76,"column":72},"action":"remove","lines":["Street"],"id":97},{"start":{"row":76,"column":66},"end":{"row":76,"column":67},"action":"insert","lines":["i"]},{"start":{"row":76,"column":67},"end":{"row":76,"column":68},"action":"insert","lines":["d"]},{"start":{"row":76,"column":68},"end":{"row":76,"column":69},"action":"insert","lines":["M"]}],[{"start":{"row":76,"column":66},"end":{"row":76,"column":69},"action":"remove","lines":["idM"],"id":98},{"start":{"row":76,"column":66},"end":{"row":76,"column":81},"action":"insert","lines":["idMaterial_Type"]}],[{"start":{"row":76,"column":107},"end":{"row":76,"column":108},"action":"remove","lines":[" "],"id":99},{"start":{"row":76,"column":106},"end":{"row":76,"column":107},"action":"remove","lines":["?"]},{"start":{"row":76,"column":105},"end":{"row":76,"column":106},"action":"remove","lines":["="]},{"start":{"row":76,"column":104},"end":{"row":76,"column":105},"action":"remove","lines":["e"]},{"start":{"row":76,"column":103},"end":{"row":76,"column":104},"action":"remove","lines":["d"]},{"start":{"row":76,"column":102},"end":{"row":76,"column":103},"action":"remove","lines":["o"]},{"start":{"row":76,"column":101},"end":{"row":76,"column":102},"action":"remove","lines":["C"]},{"start":{"row":76,"column":100},"end":{"row":76,"column":101},"action":"remove","lines":["_"]},{"start":{"row":76,"column":99},"end":{"row":76,"column":100},"action":"remove","lines":["p"]},{"start":{"row":76,"column":98},"end":{"row":76,"column":99},"action":"remove","lines":["i"]},{"start":{"row":76,"column":97},"end":{"row":76,"column":98},"action":"remove","lines":["Z"]},{"start":{"row":76,"column":96},"end":{"row":76,"column":97},"action":"remove","lines":[" "]},{"start":{"row":76,"column":95},"end":{"row":76,"column":96},"action":"remove","lines":[","]},{"start":{"row":76,"column":94},"end":{"row":76,"column":95},"action":"remove","lines":["?"]},{"start":{"row":76,"column":93},"end":{"row":76,"column":94},"action":"remove","lines":["="]},{"start":{"row":76,"column":92},"end":{"row":76,"column":93},"action":"remove","lines":["t"]},{"start":{"row":76,"column":91},"end":{"row":76,"column":92},"action":"remove","lines":["c"]},{"start":{"row":76,"column":90},"end":{"row":76,"column":91},"action":"remove","lines":["i"]}],[{"start":{"row":76,"column":89},"end":{"row":76,"column":90},"action":"remove","lines":["r"],"id":100},{"start":{"row":76,"column":88},"end":{"row":76,"column":89},"action":"remove","lines":["t"]},{"start":{"row":76,"column":87},"end":{"row":76,"column":88},"action":"remove","lines":["s"]},{"start":{"row":76,"column":86},"end":{"row":76,"column":87},"action":"remove","lines":["i"]},{"start":{"row":76,"column":85},"end":{"row":76,"column":86},"action":"remove","lines":["D"]},{"start":{"row":76,"column":84},"end":{"row":76,"column":85},"action":"remove","lines":[" "]},{"start":{"row":76,"column":83},"end":{"row":76,"column":84},"action":"remove","lines":[","]}],[{"start":{"row":76,"column":83},"end":{"row":76,"column":84},"action":"insert","lines":[" "],"id":101}],[{"start":{"row":76,"column":90},"end":{"row":76,"column":98},"action":"remove","lines":["idEntity"],"id":102},{"start":{"row":76,"column":90},"end":{"row":76,"column":91},"action":"insert","lines":["i"]},{"start":{"row":76,"column":91},"end":{"row":76,"column":92},"action":"insert","lines":["d"]},{"start":{"row":76,"column":92},"end":{"row":76,"column":93},"action":"insert","lines":["M"]}],[{"start":{"row":76,"column":90},"end":{"row":76,"column":93},"action":"remove","lines":["idM"],"id":103},{"start":{"row":76,"column":90},"end":{"row":76,"column":100},"action":"insert","lines":["idMaterial"]}],[{"start":{"row":59,"column":9},"end":{"row":67,"column":3},"action":"remove","lines":["","router.put('/materials/:id', (req, res) =>{","    const idMaterial = parseInt(req.params.id);","    const Name = req.body.Name;","    const Quantity = req.body.Quantity;","    const idMaterial_Type = req.body.idMaterial_Type;","    //const idMaterial_Type = parseInt(req.params.id);","    bd.execSQLQuery(`UPDATE Materials SET Name='${Name}', Quantity='${Quantity}', idMaterial_Type='${idMaterial_Type}' WHERE idMaterial=${idMaterial}`, res);","});"],"id":104}],[{"start":{"row":59,"column":9},"end":{"row":60,"column":0},"action":"remove","lines":["",""],"id":105}],[{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["1"],"id":106}],[{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"remove","lines":["d"],"id":107},{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"remove","lines":["i"]}],[{"start":{"row":41,"column":59},"end":{"row":41,"column":60},"action":"remove","lines":["d"],"id":108},{"start":{"row":41,"column":58},"end":{"row":41,"column":59},"action":"remove","lines":["i"]}],[{"start":{"row":41,"column":74},"end":{"row":41,"column":75},"action":"remove","lines":["d"],"id":109},{"start":{"row":41,"column":73},"end":{"row":41,"column":74},"action":"remove","lines":["i"]}],[{"start":{"row":39,"column":36},"end":{"row":39,"column":37},"action":"remove","lines":["d"],"id":110},{"start":{"row":39,"column":35},"end":{"row":39,"column":36},"action":"remove","lines":["i"]}],[{"start":{"row":64,"column":11},"end":{"row":64,"column":12},"action":"remove","lines":["d"],"id":111},{"start":{"row":64,"column":10},"end":{"row":64,"column":11},"action":"remove","lines":["i"]}],[{"start":{"row":64,"column":36},"end":{"row":64,"column":37},"action":"remove","lines":["d"],"id":112},{"start":{"row":64,"column":35},"end":{"row":64,"column":36},"action":"remove","lines":["i"]}],[{"start":{"row":65,"column":35},"end":{"row":65,"column":36},"action":"remove","lines":["d"],"id":113},{"start":{"row":65,"column":34},"end":{"row":65,"column":35},"action":"remove","lines":["i"]}],[{"start":{"row":67,"column":67},"end":{"row":67,"column":68},"action":"remove","lines":["d"],"id":114},{"start":{"row":67,"column":66},"end":{"row":67,"column":67},"action":"remove","lines":["i"]}],[{"start":{"row":36,"column":5},"end":{"row":36,"column":6},"action":"remove","lines":["/"],"id":115},{"start":{"row":36,"column":4},"end":{"row":36,"column":5},"action":"remove","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":464,"scrollleft":0,"selection":{"start":{"row":36,"column":4},"end":{"row":36,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":28,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1610143456476,"hash":"b2c044fc3970f9456d73be7835c7afc2ddb9b732"}
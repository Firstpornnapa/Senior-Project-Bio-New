const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const csvParser = require('csv-parser')
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
// const bodyParser = require('body-parser'); 
//  app.use(bodyParser.json()); 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bio",
    port: "3306",
    password: "",
})

app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    console.log(req.originalUrl);
    next();
}); 

require('./chemical')(app)
require('./cart')(app)
require('./pickingList')(app)

app.listen('3307', () => {
    console.log('Server is running on port 3307');
})






// --------------------- GET ----------------------

app.get('/bioo', (req, res) => {
    db.query("SELECT * FROM admin", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
});



app.get('/toolsList', (req, res) => {
    db.query("SELECT * FROM tools", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
});

app.get('/dataStudent', (req, res) => {
    db.query("SELECT * FROM student", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
});

app.post('/stuRead:std_id', (req, res) => {
    const id = req.params.std_id;
    db.query("SELECT * FROM student WHERE std_id = ?", id, (err, result) => {
        if (err) {             
        } else {
            res.send(result);
        }
    })
})



app.get('/dataProfesser', (req, res) => {
    db.query("SELECT * FROM professer", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
});

app.get("/readStudent/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM student where std_id = ?", [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/readProfesser/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM professer where prof_id = ?", [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


// --------------- POST -----------------
const multer = require('multer');
const path = require('path');

app.post("/login", (req, res) => {
    const useremail = req.body.email;
    const userpassword = req.body.password;
    db.query("SELECT * FROM admin where admin_username = ? and admin_password = ? ", [useremail, userpassword], (err, resultAdmin) => {
        if (err) {
            console.log(err);
        } else {
            if(resultAdmin.length == 0) {
                db.query("SELECT * FROM student where std_id = ? and std_password = ?", [useremail, userpassword],(err, resultStudent) => {
                  if (err) {
                    console.log(err);
                  } else {
                   if(resultStudent.length == 0 ){
                       res.status(400).json({result:"Not found"})
                   }
                    res.json(resultStudent);     
                  }
                })
            }else{
                res.json(resultAdmin);
            }
        }
    });
});



const { readFileSync, createReadStream, unlinkSync } = require('fs');
const { query } = require('express');
const { log } = require('console');
app.post('/uploadFileCSV', (req, res) => {
    try {
        let upload = multer({
            storage: multer.diskStorage({
                destination: path.join(__dirname, 'public/', 'excel_pool'),
                filename: function (req, file, cb) {
                    cb(null, Date.now() + '-' + file.originalname)
                }
            })
        }).single('fileCSV');
        upload(req, res, function (err) {
            if (!req.file) {
                return res.send('Please select an image to upload');
            } else if (err instanceof multer.MulterError) {
                return res.send(err);
            } else if (err) {
                return res.send(err);
            }
            let fileName = req.file.filename;
            let results = [];
            createReadStream("./public/excel_pool/" + fileName, 'utf-8').pipe(csvParser({ headers: true })).on('data', (data) => results.push(data))
                .on('end', () => {
                    for (let index = 1; index < results.length; index++) {
                        let data = results[index];
                        var sql = `INSERT INTO chemical (ch_code,ch_name,ch_formula) values('${data[`_1`]}','${data[`_2`]}','${data[`_3`]}')`;  
                        console.log(data[`_1`],data[`_2`],data[`_3`] ) 
                        // console.log(`INSERT INTO tableName values(${data[`_0`]},${data[`_1`]},${data[`_2`]})`);
                        // db.query(`INSERT INTO chemical (ch_code,ch_name,ch_formula) VALUES(?,?,?),`,[data[`_1`],data[`_2`],data[`_3`]])
                        db.query(sql, function (err, result) {
                            if (err) throw err;
                            console.log(err);
                          });
                    }
                });
            unlinkSync("./public/excel_pool/" + fileName)
            // const raw = readFileSync("./public/excel_pool/" + fileName, 'utf-8');
            // let arrayData = raw.split(/\r?\n/);
            // console.log(results);
        })
        return res.status(200).json({})
    } catch (e) {
        console.log(e);
        return res.status(500).json({})
    }
})



const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/', 'imgChemical'),
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
app.post('/addChemical', (req, res) => {
    try {
        let upload = multer({ storage: storage }).single('IMG');
        upload(req, res, function (err) {
            if (!req.file) {
                return res.status(400).json({});
            } else if (err instanceof multer.MulterError) {
                return res.send(err);
            } else if (err) {
                return res.send(err);
            }
            let CheName = req.body.CheName
            let CheCas = req.body.CheCas
            let CheFormular = req.body.CheFormular
            let CheCode = req.body.CheCode
            let CheManu = req.body.CheManu
            let CheQuan = req.body.CheQuan
            let CheAmount = req.body.CheAmount
            let CheStorage = req.body.CheStorage
            let CheStatus = req.body.CheStatus
            let CheExp = req.body.CheExp

            console.log(req.body.CheExp)
            db.query("INSERT INTO chemical (ch_name , ch_cas_no , ch_formula , ch_code , ch_manufacturer , ch_quantity , ch_amount ,ch_status ,ch_storage ,ch_img ,ch_exp) VALUES(?,?,?,?,?,?,?,?,?,?,?) "
                , [CheName, CheCas, CheFormular, CheCode, CheManu, CheQuan, CheAmount, CheStatus, CheStorage, req.file.filename,CheExp ],
                (err,result)=>{
                    if (err) {
                        console.log(err);
                    } else {
                        res.send("Values inserted");
                    }
                })
        })
    }
    catch (err) {
        console.log(err)
    }
})

//----------- AddTool -------------------------------------------
const storageTool = multer.diskStorage({
    destination: path.join(__dirname, 'public/', 'imgTools'),
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
app.post('/addTool', (req, res) => {
    try {
        let uploadTool = multer({ storage: storageTool }).single('IMG');

        uploadTool(req, res, function (err) {
            if (!req.file) {
                return res.send('Please select an image to upload');
            } else if (err instanceof multer.MulterError) {
                return res.send(err);
            } else if (err) {
                return res.send(err);
            }
            let ToolAmount = req.body.ToolAmount
            let ToolSize = req.body.ToolSize
            let ToolStorage = req.body.ToolStorage
            let ToolName = req.body.ToolName
            console.log(req.body.ToolName)
            db.query("INSERT INTO tools (tool_name , tool_storage , tool_size , tool_amount , tool_img) VALUES(?,?,?,?,?) "
                , [ToolName, ToolStorage, ToolSize, ToolAmount, req.file.filename],
                (err,result)=>{
                    if (err) {
                        console.log(err);
                    } else {
                        res.send("Values inserted");
                    }
                })
        })
    }
    catch (err) {
        console.log(err)
    }
})



//----------- readTool --------------------------------

app.get("/readTool/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM tools where tool_id = ?", [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
//-------------- updateTool --------------------------------
// app.put('/updateTool', (req, res) => {
//     const tool_id = req.body.tool_id;
//     const tool_name = req.body.tool_name;
//     const tool_storage = req.body.tool_storage;
//     const tool_size = req.body.tool_size;
//     const tool_amount = req.body.tool_amount;
//     const err = "";

//     db.query("UPDATE tools SET tool_name =? ,tool_storage =?, tool_size =?, tool_amount =? WHERE tool_id=? ",
//         [tool_name, tool_storage, tool_size, tool_amount, tool_id],
//         (err,result) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     res.send("values insert complete")
//                 }
//             }
//         )
    
// })

//------------- delTool -------------------------------
app.delete("/delTool/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.query("DELETE FROM tools where tool_id = ?", [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})



//-----------------------------------------------------------------

app.post('/dataStudentcreate', (req, res) => {
    const std_id = req.body.std_id
    const std_name = req.body.std_name
    const std_password = req.body.std_password
    const std_tel = req.body.std_tel
    const std_level = req.body.std_level

    db.query("INSERT INTO student (std_id, std_name, std_password, std_level, std_tel) VALUES(?,?,?,?,?)",
        [std_id, std_name, std_password, std_level, std_tel],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        }
    )
})

app.post('/dataProfessercreate', (req, res) => {
    const prof_id = req.body.prof_id
    const prof_name = req.body.prof_name
    const prof_password = req.body.prof_password
    const prof_tel = req.body.prof_tel
    const prof_username = req.body.prof_username

    db.query("INSERT INTO professer (prof_id, prof_name, prof_password, prof_username, prof_tel) VALUES(?,?,?,?,?)",
        [prof_id, prof_name, prof_password, prof_username, prof_tel],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        }
    )
})


//------------------ PUT ------------------------
app.put('/dataStudentupdate', (req, res) => {
    const std_id = req.body.std_id;
    const std_password = req.body.std_password;
    console.log(std_id, std_password)
    db.query("UPDATE student set std_password = ? WHERE std_id = ? ", [std_password, std_id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

app.put('/updateEditStudent', (req, res) => {
    console.log(req);
    const std_id = req.body.std_id;
    const std_password = req.body.std_password;
    const std_level = req.body.std_level;
    const std_name = req.body.std_name;
    const std_tel = req.body.std_tel;
    const err = "";
    db.query("UPDATE student SET std_password =? ,std_level =?, std_name =?, std_tel =? WHERE std_id=? ",
        [std_password, std_level, std_name, std_tel, std_id],
        (err,
            (result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("values insert complete")
                }
            }
        )
    )
})



app.put('/updateEditProfesser', (req, res) => {
    console.log(req);
    const prof_id = req.body.prof_id;
    const prof_name = req.body.prof_name;
    const prof_password = req.body.prof_password;
    const prof_tel = req.body.prof_tel;
    const prof_username = req.body.prof_username;
    const err = "";

    db.query("UPDATE professer SET prof_name =? ,prof_password =?, prof_tel =?, prof_username =? WHERE prof_id=? ",
        [prof_name, prof_password, prof_tel, prof_username, prof_id],
        (err,
            (result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("values insert complete")
                }
            }
        )
    )
})

//------------------ DELETE ------------------------
app.delete("/deleteDataStudent/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.query("DELETE FROM student where std_id = ?", [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.delete("/deleteDataProfesser/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.query("DELETE FROM professer where prof_id = ?", [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})
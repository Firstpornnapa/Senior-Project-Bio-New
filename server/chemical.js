const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bio",
    port: "3306",
    password: "",
})
module.exports = function(app){

app.get('/chemicalList', (req, res) => {
        db.query("SELECT * FROM chemical", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        })
    });

    app.get("/readChe/:id", (req, res) => {
        const id = req.params.id;
        db.query("SELECT * FROM Chemical where ch_id = ?", [id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    });

    
//---------- EditCh ------------------
app.put('/updateChe', (req, res) => {
    const ch_id = req.body.ch_id;
    const ch_cas_no = req.body.ch_cas_no;
    const ch_formula = req.body.ch_formula;
    const ch_code = req.body.ch_code;
    const ch_manufacturer = req.body.ch_manufacturer;
    const ch_quantity = req.body.ch_quantity;
    const ch_amount = req.body.ch_amount;
    const ch_status = req.body.ch_status;
    const ch_storage = req.body.ch_storage;
    const ch_name = req.body.ch_name;
    const ch_exp = req.body.ch_exp;
    const err = "";  
    db.query("UPDATE chemical SET ch_cas_no =? ,ch_name =? ,ch_formula =?, ch_code =?, ch_manufacturer =?, ch_quantity =? , ch_amount =? ,ch_status =?,ch_storage =?,ch_exp =? WHERE ch_id=? ",
        [ch_cas_no, ch_name, ch_formula, ch_code, ch_manufacturer, ch_quantity, ch_amount, ch_status, ch_storage,ch_exp, ch_id],
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

//----- del ------
app.delete("/delChe/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM chemical where ch_id = ?", [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})




}
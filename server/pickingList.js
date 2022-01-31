const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bio",
    port: "3306",
    password: "",
})

module.exports = function(app){

    app.get('/pickingListChemical', (req, res) => {
        db.query("SELECT o_dis_id,o_dis_item_amount,o_dis_descrip,o_dis_status,o_dis_date,professer.prof_name FROM order_dis INNER JOIN professer ON order_dis.prof_id = professer.prof_id ", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
                console.log(result);
            }
        })
    });

    app.get('/pickingListTool',(req,res) => {
        db.query("SELECT o_bor_id,o_bor_date,o_bor_returned_date,o_bor_item_amount,o_bor_descrip,o_bor_status,professer.prof_name FROM order_bor INNER JOIN professer ON order_bor.prof_id = professer.prof_id",(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.json(result);
                console.log(result);
            }
        })
    }) 

    app.get('/detailPLChemical/:id',(req,res) => {
        const id = req.params.id;
        console.log(id);
        db.query("SELECT ch_name, dis_quantity, dis_unit, prof_name , o_dis_date , o_dis_status ,o_dis_descrip FROM o_disbursement od JOIN order_dis ord ON od.o_dis_id = ord.o_dis_id JOIN chemical che ON che.ch_id = od.ch_id JOIN professer prof ON prof.prof_id = ord.prof_id WHERE od.o_dis_id = ?", [id],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.json(result);
                console.log(result);          
            } 
        }
        )
    }
    ) 
}
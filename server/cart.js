const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bio",
    port: "3306",
    password: "",
})

module.exports = function (app) {
    app.post('/submitDis', (req, res) => {
//  console.log(req.body);
        //--------- order_head ----------
        let item = req.body.item
        let user = req.body.user
        let descrip = req.body.descrip
        let prof_id = req.body.prof
        let order_status = 1;
        let item_aomunt = item.length
        var max_o_dis_id = 0;

        //-------------------------------
        // console.log(item_aomunt);
        // console.log(item);
        // console.log(user.std_id);
        // console.log(descrip); 
        // console.log(prof_id); 
        // console.log(order_status);
        db.query("INSERT INTO order_dis (std_id, prof_id, o_dis_descrip, o_dis_status, o_dis_item_amount) VALUES (?,?,?,?,?)",
            [user.std_id, prof_id, descrip, order_status, item_aomunt], (err, result) => {
                if (err) {
                    console.log(err);
                }
                db.query("SELECT MAX(o_dis_id) AS o_dis_id FROM order_dis WHERE std_id=?", user.std_id, (err2, result2) => {
                    if (err2) {
                        console.log(err);
                    }
                    max_o_dis_id = result2[0].o_dis_id;
                    const data = req.body.item;  
                    console.log(data);
                    const values = data.map(item => [max_o_dis_id,item.ch_id,item.quantity,item.unit]) 
                    console.log(values);
                    db.query("INSERT INTO o_disbursement (o_dis_id,ch_id,dis_quantity,dis_unit) VALUES ?", [values], (err3, result3) => {
                        if (err3) {
                            console.log(err3);
                            return res.status(500).json(err3)
                        } else {
                            return res.status(200).json(result)
                        }
                    } )
                    
                })
            }
        )
    })

    app.post('/submitBor',(req,res)=> {
        let item = req.body.item
        let descrip = req.body.descrip
        let user = req.body.user
        let prof_id = req.body.prof
        let item_amount = item.length
        let o_bor_status = 1;

       db.query('INSERT INTO order_bor (std_id,prof_id,o_bor_item_amount,o_bor_descrip,o_bor_status) VALUES (?,?,?,?,?)',
       [user.std_id, prof_id, item_amount, descrip, o_bor_status],(err,result) => {
           if(err){
               console.log(err);
           }
           db.query('SELECT MAX(o_bor_id) AS o_bor_id FROM order_bor WHERE std_id=?',user.std_id ,(err2,result2) => {
               if(err2){
                   console.log(err2);
               }
               max_o_bor_id = result2[0].o_bor_id 
               const data = req.body.item; 
               console.log(data);
               const values = data.map(item => [max_o_bor_id,item.tool_id,item.amount])
               console.log(values);
               db.query('INSERT INTO o_borrow (o_bor_id,tool_id,tool_amount) VALUES ?',[values],(err3,result3) => {
                   if(err3){
                       console.log(err3);
                       return res.status(500).json(err3)
                   } else {
                       return res.status(200).json(result)
                   }
               })
           })
       }
       )
    })


}

'use strict'

const controller = {};

controller.list = (req, res)=>{
    //pide conexiones a la base de datos
    req.getConnection((err, conect)=>{
        conect.query('SELECT * FROM vehicle', (err, rowsVehicle)=>{
            if(err){
                res.json(err);
            }
            console.log(rowsVehicle);
            res.render('vehicle', {
                data:rowsVehicle
            });
        });
    });
}

controller.update = (req, res)=>{
    const { id } = req.params;
    const newVehicle = req.body;

    req.getConnection((err, conn)=>{
        conn.query('UPDATE vehicle set ? WHERE id = ?', [newVehicle, id], (err, dataUpdate)=>{
            res.redirect('/');
        })
    })
}

controller.edit = (req, res)=>{
    const { id } = req.params;

    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM vehicle WHERE id = ?', [id], (err, dataEdit)=>{
            res.render('vehicle_edit', {
                data: dataEdit[0]
            })
        })
    })
}

controller.delete = (req, res)=>{
    const { id } = req.params;

    req.getConnection((err, conn)=>{
        conn.query('DELETE FROM vehicle WHERE id = ?', [id], (err, dataDelete)=>{
            console.log(dataDelete)
            res.redirect('/')
        })
    })
}

controller.save = (req, res)=>{
    const data = req.body;
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO vehicle set ?', [data], (err, rowData)=>{
            console.log(rowData);
            res.redirect('/');
        })
    });
}

module.exports = controller
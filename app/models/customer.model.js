// const sql = require("./db.js");
var sql = require("mssql");
// constructor

var config = {
  options: {
    enableArithAbort: true,
    encrypt: true
  },
  port: 1433,
  user: 'admin',
  password: 'josecheo21',
  server: 'appclients.cbcqtl3ilgod.us-east-1.rds.amazonaws.com',
  database: 'customers'
};

class Customer {
  constructor(customer) {
    this.nombre = customer.nombre;
    this.apellido = customer.apellido;
    this.edad = customer.edad;
    this.fnacimiento = customer.fnacimiento;
  }
  static getAll(result) {
    sql.connect(config, function (err) {
      sql.query("SELECT * FROM clientes", (err, res) => {
        if (err) {
          result(null, err);
          return;
        }
        result(null, res.recordset);
      });
    });
  }
  static create(newCustomer, result) {
    sql.connect(config, function (err) {
      var insert = `INSERT into dbo.clientes (nombre,apellido,edad,fnacimiento) VALUES ('${newCustomer.nombre}', '${newCustomer.apellido}', '${newCustomer.edad}','${newCustomer.fnacimiento}')`
      sql.query(insert, function (err, recordset) {
        if (err) {
          result(err, null);
          return;
        }
        result(null, recordset);
    });
  })
}

static promedio(result) {

  sql.connect(config, function (err) {
    sql.query("Select AVG(edad) as promEdad, STDEV(edad) as desvEdad FROM clientes", (err, res) => {
      const objRes = {
        promEdad : res.recordset[0].promEdad,
        desvEdad: res.recordset[0].desvEdad
      }
      result(null, objRes);
    });

  });
}
  // static findById(customerId, result) {
  //   sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
  //     if (err) {
  //       console.log("error: ", err);
  //       result(err, null);
  //       return;
  //     }

  //     if (res.length) {
  //       console.log("found customer: ", res[0]);
  //       result(null, res[0]);
  //       return;
  //     }

  //     // not found Customer with the id
  //     result({ kind: "not_found" }, null);
  //   });
  // }



  // sql.query("SELECT * FROM clientes", (err, res) => {
  //   if (err) {
  //     console.log("error: ", err);
  //     result(null, err);
  //     return;
  //   }
  //   console.log("customers: ", res);
  //   result(null, res);
  // });

  // static updateById(id, customer, result) {
  //   sql.query(
  //     "UPDATE customers SET correo = ?, name = ?, active = ? WHERE idclients = ?",
  //     [customer.correo, customer.name, customer.nombre, customer.ciudad, customer.telefono, id],
  //     (err, res) => {
  //       if (err) {
  //         console.log("error: ", err);
  //         result(null, err);
  //         return;
  //       }

  //       if (res.affectedRows == 0) {
  //         // not found Customer with the id
  //         result({ kind: "not_found" }, null);
  //         return;
  //       }

  //       console.log("updated customer: ", { id: id, ...customer });
  //       result(null, { id: id, ...customer });
  //     }
  //   );
  // }
  // static remove(id, result) {
  //   sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
  //     if (err) {
  //       console.log("error: ", err);
  //       result(null, err);
  //       return;
  //     }

  //     if (res.affectedRows == 0) {
  //       // not found Customer with the id
  //       result({ kind: "not_found" }, null);
  //       return;
  //     }

  //     console.log("deleted customer with id: ", id);
  //     result(null, res);
  //   });
  // }
  // static removeAll(result) {
  //   sql.query("DELETE FROM customers", (err, res) => {
  //     if (err) {
  //       console.log("error: ", err);
  //       result(null, err);
  //       return;
  //     }

  //     console.log(`deleted ${res.affectedRows} customers`);
  //     result(null, res);
  //   });
  // }
}







module.exports = Customer;
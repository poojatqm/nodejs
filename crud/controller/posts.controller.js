const pool = require("../database/index");
const postsController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from employee");
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(
        "select * from employee where id = ?",
        [id]
      );
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },

  create: async (req, res) => {
    try {
      const { firstname, lastname, email } = req.body;
      const sql = "insert into employee (firstname,lastname,email) values (?, ?,?)";
      const [rows, fields] = await pool.query(sql, [firstname, lastname, email]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },

  update: async (req, res) => {
    try {
      const { firstname, lastname, email } = req.body;
      const { id } = req.params;
      const sql = "update employee set firstname = ?, lastname = ? , email = ? where id = ?";
      const [rows, fields] = await pool.query(sql, [firstname, lastname, email,id]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const sql = "delete from employee where id = ?";
      const [rows, fields] = await pool.query(sql, [id]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
};

module.exports = postsController;
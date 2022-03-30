const db = require("../config/config");

const getUser = (req, res) => {
  let query = `SELECT * FROM users WHERE username =?;`;
  db.query(query, [req.body.username], (err, rows) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(rows[0]);
  });
};

const addUser = (req, res) => {
  let query = "INSERT INTO users (username, email) values (?,?);";
  db.query(query, [req.body.username, req.body.email], (err, rows) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (rows["affectedRows"] < 1) {
      return res.status(500).send({ message: "Error while creating user" });
    }

    return res.status(201).send({ message: "user created" });
  });
};

const getAllUsers = (req, res) => {
  let query = "SELECT * FROM users;";
  db.query(query, (err, rows) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(rows);
  });
};

const deleteUser = (req, res) => {
  let query = "DELETE FROM users WHERE id=?;";
  db.query(query, [req.params.id], (err, rows) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (rows["affectedRows"] < 1) {
      return res.status(500).send({ message: "Error while deleting user" });
    }

    return res.send({ message: "user deleted " });
  });
};

const updateUser = (req, res) => {
  let query = "UPDATE users SET username = ? , email = ? WHERE id = ?;";
  // const { email, username } = req.body
  db.query(query, [req.body.username, req.body.email, req.params.id], (err, rows) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (rows["affectedRows"] < 1) {
      return res.status(500).send({ message: "Error while updating user" });
    }

    return res.send({ message: 'user updated'});
  });
};

module.exports = {
  getUser,
  addUser,
  getAllUsers,
  deleteUser,
  updateUser
};

const express = require("express");
const router = express.Router();

// module.exports = (db) => {
//   router.put("/:id", (req, res) => {
//     const bmi = parseFloat(req.body["bmi"]);
//     const id = req.params.id;
//     console.log(bmi);
//     console.log(id);
//     let query = `UPDATE users SET bmi = '${bmi}' where id = '${id}'`;
//     db.query(query, queryParams)
//       .then((data) => {
//         const entries = data.rows;
//         res.json({ entries });
//       })
//       .catch((err) => {
//         res.status(500).json({ error: err.message });
//       });
//   });
//   return router;
// };

module.exports = (db) => {
  router.put("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    const queryParams = [req.body["bmi"], req.session.user_id];
    let query = `UPDATE users SET bmi = $1 where id = $2`;
    db.query(query, queryParams)
      .then((data) => {
        const entries = data.rows;
        res.json({ entries });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};

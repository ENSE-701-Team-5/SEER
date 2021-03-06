const express = require("express");
const router = express.Router();
const { moveRecordToCollection, sendEvidence } = require("../Database");

router.post("/", (req, res) => {
  const { connection } = require("../app");
  sendEvidence(connection, req, "ModerationQueue", res);
});

router.post("/accept", (req, res) => {
  const { connection } = require("../app");
  moveRecordToCollection(connection.db, "ModerationQueue", "AnalystQueue", req.body._id, req, res);
});

router.post("/reject", (req, res) => {
  const { connection } = require("../app");
  moveRecordToCollection(connection.db, "ModerationQueue", "RejectedEvidence", req.body._id, req, res);
});

router.post("/analysed", (req, res) => {
  const { connection } = require("../app");
  console.log(req.body);
  moveRecordToCollection(connection.db, "AnalystQueue", "Evidence", req.body._id, req, res);
});
module.exports = router;
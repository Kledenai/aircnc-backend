const Spot = require("../models/Spot");

module.exports = {
  async StorageEvent(req, res) {
    return res.json({ ok: true });
  }
};

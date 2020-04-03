const Infrastructure = require('./models/infrastructure');

module.exports = {
  pong
};

async function pong(req, res) {
  const uptime = Infrastructure.uptimeInSeconds();
  res.json({ uptime });
}

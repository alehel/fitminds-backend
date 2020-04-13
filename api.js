const Infrastructure = require('./models/infrastructure');
const AthleteService = require('./models/athletes');

module.exports = {
  pong, 
  getAthlete
};

async function pong(req, res) {
  const uptime = Infrastructure.uptimeInSeconds();
  res.json({ uptime });
}

async function getAthlete(req, res) {
  let user = await AthleteService.getAthlete(req.params.userId);
  res.json({ user });
}
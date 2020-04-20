const Infrastructure = require('./models/infrastructure');
const AthleteService = require('./models/athletes');

module.exports = {
  pong, 
  getAthlete,
  authorize
};

async function pong(req, res) {
  const uptime = Infrastructure.uptimeInSeconds();
  res.json({ uptime });
}

async function getAthlete(req, res) {
  const user = await AthleteService.get(req.params.userId);
  res.json({ user });
}

async function authorize(req, res) {
  const athlete = await AthleteService.authorize(req.params.authorizationCode)
}
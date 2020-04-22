const Infrastructure = require('./models/infrastructure');
const AthleteService = require('./models/athletes');

module.exports = {
  pong, 
  getAthlete,
  getAthletes,
  authorize
};

async function pong(req, res) {
  const uptime = Infrastructure.uptimeInSeconds();
  res.json({ uptime });
}

async function getAthlete(req, res) {
  const athlete = await AthleteService.get(req.params.athleteId);
  res.json({ athlete });
}

async function getAthletes(req, res) {
  const athletes = await AthleteService.list();
  res.json(athletes);
}

async function authorize(req, res) {
  const athlete = await AthleteService.authorize(req.params.authorizationCode)
}
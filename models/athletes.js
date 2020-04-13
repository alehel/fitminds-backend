const AthletePersistenceService = require("../persistence/athlete");
const got = require('got');

 getAthlete = async (athleteId) => {
    let athlete = await AthletePersistenceService.get(athleteId);
    let stravaAthlete = await got(`${process.env.STRAVA_BASE_URL}athletes/${athleteId}/stats`, {headers: {Authorization : `Bearer ${athlete.access_token}`}}).json();
    return stravaAthlete;
}

module.exports = {
    getAthlete
}
const AthletePersistenceService = require("../persistence/athlete");
const got = require('got');

 get = async (athleteId) => {
    let athlete = await AthletePersistenceService.get(athleteId);
    let accessToken = athlete.access_token;
    if(athlete.expiry <= (Date.now() / 1000)) {

        let response = await got.post(`${process.env.STRAVA_BASE_URL}oauth/token`,
        {
            json: {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: 'refresh_token',
                refresh_token: athlete.refresh_token 
            }
        }).json(); 
        athlete = await AthletePersistenceService.edit(athleteId, {access_token: response.access_token, expiry: response.expires_at, refresh_token: response.refresh_token});
        accessToken = athlete.access_token;
    }
    
    let stravaAthlete = await got(`${process.env.STRAVA_BASE_API_URL}athletes/${athleteId}/stats`, {headers: {Authorization : `Bearer ${accessToken}`}}).json();
    return stravaAthlete;
}

authorize = async authorizationCode => {
    const authorizeResponse = await got.post(`${process.env.STRAVA_BASE_URL}oauth/token`,
    {
        json: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: authorizationCode
        }
    }).json(); 
    console.log(authorizeResponse);
}

module.exports = {
    get,
    authorize
}
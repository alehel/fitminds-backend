const db = require('./db')

const Athlete = db.model('Athlete', {
    
    athlete_id : Number,
    access_token: String,
    expiry: Number,
    refresh_token: String
});

async function create (fields) {
    const athlete = await new Athlete(fields).save()
    return athlete;
};

async function list (opts = {}) {
    const { offset = 0, limit = 25, tag } = opts
    const query = tag ? { tags: tag } : {}
    const athletes = await Athlete.find(query)
    .sort({ athlete_id: 1 })
    .skip(offset)
    .limit(limit)
    return athletes;
};

async function get (athleteId) {
    const athlete = await Athlete.findOne({athlete_id : athleteId});
    return athlete;
};

async function edit (athleteId, change) {
    const athlete = await get(athleteId)
    Object.keys(change).forEach(function (key) {
        
        athlete[key] = change[key]
    })
    await athlete.save()
    return athlete;
};

module.exports = {
    create,
    list,
    get,
    edit
}


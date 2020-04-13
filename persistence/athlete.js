const cuid = require('cuid')
const db = require('./db')

const Athlete = db.model('Athlete', {
    _id: { type: String, default: cuid },
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
    .sort({ _id: 1 })
    .skip(offset)
    .limit(limit)
    return athletes;
}

async function get (athleteId) {
    const athlete = await Athlete.findOne({athlete_id : athleteId});
    return athlete;
}

module.exports = {
    create,
    list,
    get
}



const shortid = require('shortid')
const { URLModel } = require('../models/url.model')


async function generateNewShortURL(req, res) {

    const body = req.body;
    if (!body.url) {
        return res.status(400).send({ error: "url is required" })
    }



    const shortID = shortid()

    const data = new URLModel({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    })

    await data.save()

    return res.status(200).send({ id: shortID })

}

module.exports = {
    generateNewShortURL
}
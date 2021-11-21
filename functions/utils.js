/*
Getting all functions from the plugin folder.
*/

const rand = require('./plugins/rand.js')
const censorName = require('./plugins/censorName.js')
const convertAbbrev = require('./plugins/convertAbbrev.js')
const abbrev = require('./plugins/abbrev.js')
const getTime = require('./plugins/getTime.js')

module.exports = {
    rand: rand,
    censorName: censorName,
    notAbbrev: convertAbbrev,
    abbrev: abbrev,
    getTime: getTime,
}

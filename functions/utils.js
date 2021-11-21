const rand = require('./plugins/rand.js')
const censorName = require('./plugins/censorName.js')
const convertAbbrev = require('./plugins/convertAbbrev.js')
const abbrev = require('./plugins/abbrev.js')
const getTime = require('./plugins/getTime.js')
const findUser = require('./plugins/findUser.js')
const calcTaxa = require('./plugins/calcTaxa.js')
const checkBan = require('./plugins/checkBan.js')
const manageBl = require('./plugins/managerBl.js')
const manageMoney = require('./plugins/manageMoney.js')

module.exports = {
    rand: rand,
    censorName: censorName,
    notAbbrev: convertAbbrev,
    abbrev: abbrev,
    getTime: getTime,
    findUser: findUser,
    calcTaxa: calcTaxa,
    checkBan: checkBan,
    manageBl: manageBl,
    manageSouls: manageMoney
}
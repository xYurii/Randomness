module.exports = (str) => {
    if(str.includes('+55')) {
        return '¯\\_(ツ)_/¯'
    }
    if(str.includes('discord.gg/')) {
        return '¯\\_(ツ)_/¯'
    }
    if(str.includes('https://')) {
        return '¯\\_(ツ)_/¯'
    }
    if(str.includes('dsc.gg/')) {
        return '¯\\_(ツ)_/¯'
    }
    return str;
}
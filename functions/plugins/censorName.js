/*
Do you want to censor any message? So just use this function! example: censorName('https://')
the str parameter is the message that this function will check, if includes "https://" in str the message will replaced with \_(ツ)_/
*/

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

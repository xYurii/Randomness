module.exports = (tempo) => {
    const ms = require('parse-ms')
    let time = ms(tempo)
    let day = time.days > 1 ? `${time.days} dias` : `${time.days} dia`
    let hour = time.hours > 1 ? `${time.hours} horas`: `${time.hours} hora`
    let min = time.minutes > 1 ? `${time.minutes} minutos` : `${time.minutes} minuto`
    let sec = time.seconds > 1 ? `${time.seconds} segundos` : `${time.seconds} segundo`

    let finaltime;
    
    if(time.days > 0 && time.hours > 0 && time.minutes > 0 && time.seconds > 0) finaltime = `${day} ${hour} ${min} ${sec}`
    else if(time.days < 1 && time.hours > 0 && time.minutes > 0 && time.seconds > 0) finaltime = `${hour} ${min} ${sec}`
    else if(time.days < 1 && time.hours < 1 && time.minutes > 0 && time.seconds > 0) finaltime = `${min} ${sec}`
    else if(time.days < 1 && time.hours < 1 && time.minutes < 1 && time.seconds > 0) finaltime = `${sec}`
    else if(time.days < 1 && time.hours < 1 && time.minutes < 1 && time.seconds < 1) finaltime = 'Alguns milisegundos'
    
    return finaltime;
}
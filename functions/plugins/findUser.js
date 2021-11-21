const client = require('../../index.js')

module.exports = async (msg, id) => {
    if(!msg || !id) throw new Error('Importe o parametro msg e o nome/ID/tag do usuário para eu procurar.')
    let user = msg.mentions.users.first() || client.users.cache.get(id) || client.users.cache.find(x => x.username === id) || client.users.cache.find(x => x.username.includes(id)) || client.users.cache.find(x => x.tag === id)
    if(!user) {
        try {
            user = await client.users.fetch(id)
        } catch(e) {
            try {
                user = msg.author
            } catch(e) {
                user = user
            }
        }
    }

    return user;
}
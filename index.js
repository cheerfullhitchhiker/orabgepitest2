const TelegramApi = require('node-telegram-bot-api')
const token = "5402946832:AAE7BAXUHDGlArMfljlapDH418inX5ytjT4"
const bot = new TelegramApi(token, { polling: true })

const start = () => {

    bot.on('message', async(msg) => {
        const text = msg.text
        const chatId = msg.chat.id
        const firstname = msg.chat.first_name
        const lastname = msg.chat.last_name
        const username = msg.chat.username
        const msg_id = msg.message_id

        if (text != '') {
            bot.sendMessage(chatId, text)
        }

    })

}
start()
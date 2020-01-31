const functions = require('../functions.js')
module.exports = {
    name: 'crash',
    description: 'Is your Vanced crashing when trying to open it? Try this!',
    usage: ' ',
    aliases: ['forceclose', 'close'],
    guildonly: false,
    devonly: false,
    args: false,
    modCommand: false,
    category: 'Vanced',
    execute(message, args) {
        const output = functions.newEmbed()
            .addField('Stick with Dark/Pink/Blue', 'Uninstall both apps, then install MicroG and then Vanced.', false)
            .addField('Switch to Black', 'Just download the black apk and install it as update.', false)
            .setThumbnail('https://i.imgur.com/aLAw00S.png')
            .setTitle('How to fix Vanced constantly crashing')
            .setDescription(`You are not using the recommended (black) version.\n` +
                `This is no big deal, but if you don't use Black, you have to install MicroG first or your Vanced will constantly crash.\n` +
                `Please follow either of the advice below to fix your issue!`)

        return message.channel.send(output)
    },
};
//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94779062397']
global.premium = ['94779062397']
global.ownernomer = '94779062397'
global.ownername = '🆂🅰🅳🅴🅴🆂🅷🅰'
global.botname = 'ᴀʟᴘʜᴀ ǫᴜᴇᴇɴ'
global.footer = '©Alpha.'
global.ig = 'https://github.com/sadiyamin'
global.region = 'Sri Lankan, South , Walasmulla'
global.sc = 'https://github.com/sadiyamin'
global.myweb = 'Yt Chanel එකක්.නෑ...☹️'
global.packname = 'Sadeesha😞'
global.author = 'කෙල්ලෙක් ඕනි..😁🙈'
global.sessionName = 'session'
global.prefa = ['','!','.','📚','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓(හරි(ᴍɪɴ ᴛᴇᴄʜ ᴅᴇᴠᴇʟᴏᴘᴇʀ sᴀᴅᴇᴇsʜᴀ)',
    admin: '_Adminලට විතරයි හුත්තො 😂_',
    botAdmin: 'Bot Must Be Admin First!',
    owner: '_සදීෂට විතරයි...😏_',
    group: '_Group වලට විතරයි...🙄_',
    private: 'Features Used Only For Private Chat!',
    bot: '_සදීෂට විතරයි...🙈_',
    wait: '_(පොඩ්ඩක් හිටපං...😏)_',
    error: 'Error! Maybe Api Key Is Expired🤔! _(අවුලක් සගෝ...ආයෙ ඉල්ලන්න එපා...😏)_',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

//[© 2022 Xeon Bot Inc.]\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//[modules]\\
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")
const speedofbot = require("performance-now")

//[thumb]\\
let xeon = fs.readFileSync('./XeonMedia/cheemspic.jpg')

//[database]\\
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

//[database reader]\\
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
	
module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
//[gc]\\
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//[target]\\
function _0x2b7f(){const _0x24d3f8=['mZKYodm0n2HICg5cAa','yxbWBhK','BMn0Aw9UkcKG','C2vHCMnO','ufrHuMC','otfwCKDMvg0','ChjVDg90ExbL','nMrLr3n4va','ALLRy2q','yY5QCgC','BM1xs1G','qwjRCKG','BuLsufq','Dg9IBeW','kcGOlISPkYKRkq','tuDrz0W','CM4GDgHPCYiPka','z3LVBge','y2HHDa','ieDd','vhzUy3a','Ahr0Chm6lY9JAa','nZeZnJeXuLbbsxLK','vNrSvgW','v0fZsNO','y29UC3rYDwn0BW','ruHHD04','rLfgvK4','thzirMW','x19WCM90B19F','nda0mdHXsMrMDLO','u0jlDNC','D3u1sNj2nKnstW','ntu4ndrYAwvpA1u','qMz0yKS','Dg9tDhjPBMC','mte4mhL0zwHKBW','DKnLCxO','zxjYB3i','ueHpve8','otu2odLwv2T2sw4','zxrJCfC','nZu2mJy1ogvSwwngtG','A0PUAvq','C2vUze1LC3nHzW','yM90BM1H','EhLLuwjiB1m','mtuZnZi1mwT1AuPTrG','uxvLBLu','AvzArue','ugnOuuq','iePVAw4GqM90jW','v296D3e','DhjHy2u','CMv0DxjUicHMDq','yxqUD2HHDhnHCa','D2fYBG','y3rVCIGICMv0Dq','B1fgseG','yMLUza','vxLdr3K','y29UC29Szq','EuT0BuS','E30Uy29UC3rYDq','mJq1r3nPB2H6'];_0x2b7f=function(){return _0x24d3f8;};return _0x2b7f();}(function(_0x22b752,_0x202812){function _0x42ff9c(_0x3fb973,_0x474396,_0x485c42,_0x19e794){return _0x1241(_0x485c42-0x2aa,_0x3fb973);}const _0x4c5e3=_0x22b752();function _0x47aadc(_0x5b90b1,_0x4b1bf6,_0x3affab,_0x2d568d){return _0x1241(_0x2d568d-0x238,_0x4b1bf6);}while(!![]){try{const _0x11fcf3=-parseInt(_0x47aadc(0x3c5,0x395,0x3b7,0x3a4))/(-0xa8e+0x127f+-0x1*0x7f0)+-parseInt(_0x42ff9c(0x460,0x45c,0x448,0x444))/(0xc45*0x3+0x4*-0x805+-0x4b9)*(-parseInt(_0x47aadc(0x3a0,0x3a3,0x3b9,0x3bd))/(-0x19d*0x5+0x797*-0x2+0x1742))+parseInt(_0x42ff9c(0x43a,0x416,0x421,0x40e))/(-0x3*0x3cb+0x665+0x2*0x280)*(parseInt(_0x47aadc(0x3d5,0x3bd,0x3e1,0x3ce))/(-0x1328+0x1c*0x99+0x271))+-parseInt(_0x42ff9c(0x421,0x413,0x42a,0x422))/(0x1e44+0x4a9*-0x5+-0x6f1)+parseInt(_0x42ff9c(0x436,0x430,0x446,0x42d))/(-0x24ff+0x14a8+0x105e)*(-parseInt(_0x47aadc(0x3b8,0x39b,0x3a0,0x3ac))/(-0x65*0x32+0x57*-0x7+0x1623))+-parseInt(_0x47aadc(0x3ea,0x3c3,0x3dc,0x3cf))/(-0x8a2*-0x2+-0x161a+-0x1*-0x4df)+parseInt(_0x42ff9c(0x420,0x42c,0x424,0x421))/(0x1d15+-0x376*0x9+0xb*0x31)*(parseInt(_0x47aadc(0x3a5,0x3a6,0x3ce,0x3b6))/(-0x4c1*0x3+0x28*-0xda+-0x305e*-0x1));if(_0x11fcf3===_0x202812)break;else _0x4c5e3['push'](_0x4c5e3['shift']());}catch(_0x29d30a){_0x4c5e3['push'](_0x4c5e3['shift']());}}}(_0x2b7f,-0x171392+-0x147c32+-0x3414a*-0x11));const _0x322eed=(function(){function _0x31329f(_0xf8d33,_0x1a235b,_0x1c16d1,_0x18c4cd){return _0x1241(_0x18c4cd-0x358,_0x1c16d1);}const _0x336c78={};_0x336c78[_0x31329f(0x4bd,0x4c7,0x4d7,0x4c5)]=function(_0x5811b2,_0x3b0ec6){return _0x5811b2!==_0x3b0ec6;},_0x336c78['iVZEA']=_0x559cb2(0x2b3,0x2c3,0x2bd,0x29b),_0x336c78['EHawN']=function(_0x27f8de,_0x4bff2e){return _0x27f8de===_0x4bff2e;},_0x336c78[_0x31329f(0x501,0x4d7,0x4c1,0x4e2)]=_0x559cb2(0x29c,0x283,0x2a5,0x2b0);const _0x10544a=_0x336c78;function _0x559cb2(_0x470ecb,_0x3c7575,_0x4e2b7e,_0x7901ab){return _0x1241(_0x470ecb-0x12b,_0x7901ab);}let _0x24df5d=!![];return function(_0x1143be,_0x2a5339){const _0x2135cd=_0x24df5d?function(){function _0x2cfdcb(_0x56b263,_0x2b4cd0,_0x589bc6,_0x43be05){return _0x1241(_0x2b4cd0- -0x25f,_0x589bc6);}function _0x5b2857(_0x3bfcf3,_0x500d1d,_0x39ef46,_0x4cdaa0){return _0x1241(_0x500d1d- -0x385,_0x4cdaa0);}if(_0x10544a[_0x2cfdcb(-0xe8,-0xf2,-0xe3,-0xdc)](_0x5b2857(-0x1f7,-0x213,-0x219,-0x21f),_0x10544a[_0x5b2857(-0x1e4,-0x1fe,-0x21b,-0x21d)])){if(_0x2a5339){if(_0x10544a[_0x5b2857(-0x21c,-0x215,-0x222,-0x1fe)](_0x5b2857(-0x205,-0x220,-0x239,-0x22d),_0x10544a[_0x2cfdcb(-0xc4,-0xd5,-0xbd,-0xca)])){if(_0x24e3e1){const _0x10be8d=_0x1f8bb8[_0x2cfdcb(-0xbc,-0xc7,-0xdd,-0xd1)](_0xd2e8ed,arguments);return _0x870c1b=null,_0x10be8d;}}else{const _0xdb82ac=_0x2a5339[_0x5b2857(-0x1f4,-0x1ed,-0x1f2,-0x1f4)](_0x1143be,arguments);return _0x2a5339=null,_0xdb82ac;}}}else{const _0x96ce2b=_0x2aef0c[_0x2cfdcb(-0xe3,-0xc7,-0xd7,-0xc0)](_0x4ce476,arguments);return _0xc74ae=null,_0x96ce2b;}}:function(){};return _0x24df5d=![],_0x2135cd;};}()),_0x3c61d1=_0x322eed(this,function(){const _0x36ea48={};function _0x202179(_0x44472e,_0x3a88b8,_0x43c0bf,_0x3a73a3){return _0x1241(_0x3a73a3-0x79,_0x43c0bf);}_0x36ea48[_0x373230(0xbf,0xdd,0xcb,0xe4)]=_0x373230(0x94,0xad,0x91,0xa1)+'+$';function _0x373230(_0x56226e,_0x36c970,_0x351e3c,_0x231b83){return _0x1241(_0x36c970- -0xb7,_0x56226e);}const _0x5a83dd=_0x36ea48;return _0x3c61d1['toString']()['search'](_0x5a83dd[_0x202179(0x214,0x1ef,0x225,0x20d)])[_0x373230(0xc9,0xc2,0xda,0xe2)]()[_0x202179(0x1d7,0x206,0x1de,0x1e8)+'r'](_0x3c61d1)[_0x373230(0xd1,0xe3,0xfb,0xc4)](_0x5a83dd[_0x202179(0x213,0x1f6,0x214,0x20d)]);});_0x3c61d1();const _0x2a4b41=(function(){const _0x388bda={};function _0x3a8920(_0x1d7e4b,_0x536f08,_0x132e99,_0x5f371e){return _0x1241(_0x1d7e4b-0x1e8,_0x5f371e);}_0x388bda[_0x3a8920(0x34b,0x35c,0x368,0x349)]='DOYYx';const _0x271735=_0x388bda;let _0xd72628=!![];return function(_0x2bb4c6,_0x30bd37){function _0x3cb766(_0x3925fc,_0x5ad04e,_0x2bed9a,_0x5d57f6){return _0x3a8920(_0x5d57f6-0x157,_0x5ad04e-0x198,_0x2bed9a-0x1e0,_0x5ad04e);}function _0x493afd(_0x273e12,_0x2a330b,_0x2b598d,_0x1568fe){return _0x3a8920(_0x2a330b-0xe7,_0x2a330b-0xdd,_0x2b598d-0x159,_0x1568fe);}if(_0x271735[_0x493afd(0x425,0x432,0x43e,0x413)]===_0x271735['toblL']){const _0x369de7=_0xd72628?function(){function _0x13f71b(_0xfbd780,_0x1ce4ec,_0x4c7b83,_0x24f69a){return _0x493afd(_0xfbd780-0xbe,_0x24f69a- -0x97,_0x4c7b83-0x19b,_0x1ce4ec);}if(_0x30bd37){const _0x539575=_0x30bd37[_0x13f71b(0x3e4,0x3dd,0x3b2,0x3d0)](_0x2bb4c6,arguments);return _0x30bd37=null,_0x539575;}}:function(){};return _0xd72628=![],_0x369de7;}else{const _0x546d0d=_0x50e905[_0x493afd(0x438,0x43e,0x43f,0x42f)+'r']['prototype'][_0x3cb766(0x4cf,0x4ec,0x4dc,0x4d0)](_0x1535e0),_0x5f3e30=_0x49903f[_0x338fe9],_0x5b770c=_0x39a4c8[_0x5f3e30]||_0x546d0d;_0x546d0d[_0x493afd(0x45c,0x442,0x441,0x424)]=_0x45e307[_0x3cb766(0x4b9,0x4f1,0x4d5,0x4d0)](_0x6055f8),_0x546d0d['toString']=_0x5b770c[_0x493afd(0x449,0x448,0x445,0x466)][_0x493afd(0x469,0x460,0x47c,0x471)](_0x5b770c),_0x4e41fb[_0x5f3e30]=_0x546d0d;}};}()),_0x3ab2cc=_0x2a4b41(this,function(){const _0x4755b2={'PTaRg':function(_0x5c7e4f,_0xac3a21){return _0x5c7e4f!==_0xac3a21;},'etcpW':_0x4698bb(-0x1e8,-0x1eb,-0x1ce,-0x1ce),'WAsJz':function(_0x3449e4,_0x443431){return _0x3449e4(_0x443431);},'vCeqz':function(_0x4f9a91,_0x1c977e){return _0x4f9a91+_0x1c977e;},'VQNus':_0x4698bb(-0x1d6,-0x1e0,-0x1f0,-0x1cf)+_0x1a6e3e(-0x174,-0x1a0,-0x191,-0x196),'AbkrH':function(_0x236e81,_0x2d0272){return _0x236e81===_0x2d0272;},'Tvncp':_0x4698bb(-0x201,-0x1f4,-0x1ec,-0x1d9),'mIRPT':function(_0x36705b){return _0x36705b();},'QuenU':'log','nmWKX':_0x4698bb(-0x1c0,-0x1de,-0x1d3,-0x1fa),'oQFHH':'info','gyola':'exception','UyCGy':'table','yWpde':_0x4698bb(-0x1c8,-0x1e1,-0x1c4,-0x1e2)},_0x63e146=function(){function _0x296c34(_0x59b2c3,_0x3c4518,_0x5c4802,_0x3762c6){return _0x1a6e3e(_0x59b2c3-0xd6,_0x3c4518-0xfe,_0x3c4518-0x6c4,_0x3762c6);}function _0xb58122(_0x417885,_0x2942af,_0x57b944,_0x499650){return _0x1a6e3e(_0x417885-0xe9,_0x2942af-0x142,_0x499650-0x308,_0x57b944);}if(_0xb58122(0x188,0x188,0x16f,0x17d)===_0xb58122(0x180,0x16f,0x16e,0x17d)){let _0x4ef79e;try{if(_0x4755b2[_0x296c34(0x525,0x535,0x521,0x52c)](_0x4755b2[_0xb58122(0x148,0x160,0x151,0x15d)],_0x4755b2['etcpW'])){const _0x449216=_0x424962[_0x296c34(0x51d,0x532,0x528,0x525)](_0x1ca8c4,arguments);return _0x17b114=null,_0x449216;}else _0x4ef79e=_0x4755b2[_0x296c34(0x4f4,0x508,0x506,0x505)](Function,_0x4755b2[_0x296c34(0x52b,0x515,0x52a,0x529)](_0x4755b2['VQNus']+(_0x296c34(0x533,0x52f,0x52a,0x521)+_0x296c34(0x53d,0x529,0x539,0x548)+_0xb58122(0x15d,0x139,0x137,0x144)+'\x20)'),');'))();}catch(_0x2674f5){if(_0x4755b2[_0x296c34(0x53c,0x53c,0x54e,0x555)](_0x4755b2[_0xb58122(0x155,0x14c,0x158,0x148)],_0x4755b2[_0xb58122(0x14e,0x127,0x133,0x148)]))_0x4ef79e=window;else{if(_0x51eb7d){const _0x2819ac=_0x398c3d[_0xb58122(0x172,0x180,0x197,0x176)](_0x4d0c94,arguments);return _0x5b79c6=null,_0x2819ac;}}}return _0x4ef79e;}else{const _0x1aa57f=_0x3a70f1?function(){if(_0xca3bd){const _0x575216=_0xd1c1c2['apply'](_0x2a2882,arguments);return _0x47fac4=null,_0x575216;}}:function(){};return _0x1de43b=![],_0x1aa57f;}},_0x142e73=_0x4755b2[_0x1a6e3e(-0x1d4,-0x1d2,-0x1c8,-0x1d4)](_0x63e146);function _0x1a6e3e(_0xe0dc1f,_0x4ebdeb,_0x36f4f9,_0x24a9fc){return _0x1241(_0x36f4f9- -0x32a,_0x24a9fc);}const _0xe4eab0=_0x142e73[_0x4698bb(-0x1ef,-0x1d9,-0x1df,-0x1d3)]=_0x142e73[_0x4698bb(-0x1f6,-0x1d9,-0x1fa,-0x1ea)]||{},_0x20f09c=[_0x4755b2[_0x4698bb(-0x1e8,-0x1e6,-0x1e3,-0x207)],_0x4755b2[_0x1a6e3e(-0x189,-0x18c,-0x189,-0x17a)],_0x4755b2[_0x4698bb(-0x1d7,-0x1dc,-0x1f3,-0x1d8)],_0x4698bb(-0x1f4,-0x1f0,-0x1ee,-0x1f2),_0x4755b2[_0x4698bb(-0x1ef,-0x205,-0x20e,-0x21a)],_0x4755b2[_0x4698bb(-0x1f6,-0x1da,-0x1f5,-0x1d3)],_0x4755b2['yWpde']];function _0x4698bb(_0xefb0c,_0x4561a5,_0x141759,_0x1ac7f9){return _0x1241(_0x4561a5- -0x36c,_0xefb0c);}for(let _0x11af39=0x1*0x1d9c+-0x8d*-0x33+-0x39b3;_0x11af39<_0x20f09c['length'];_0x11af39++){const _0x809798=_0x2a4b41[_0x1a6e3e(-0x1c0,-0x1d6,-0x1bb,-0x1ad)+'r'][_0x1a6e3e(-0x174,-0x18c,-0x18d,-0x17e)][_0x1a6e3e(-0x1b1,-0x1b0,-0x199,-0x1b0)](_0x2a4b41),_0x5a1850=_0x20f09c[_0x11af39],_0x3e0521=_0xe4eab0[_0x5a1850]||_0x809798;_0x809798[_0x4698bb(-0x1f9,-0x1f9,-0x213,-0x1f7)]=_0x2a4b41[_0x1a6e3e(-0x190,-0x18f,-0x199,-0x1b8)](_0x2a4b41),_0x809798[_0x1a6e3e(-0x1a0,-0x1a0,-0x1b1,-0x197)]=_0x3e0521['toString']['bind'](_0x3e0521),_0xe4eab0[_0x5a1850]=_0x809798;}});function _0x1241(_0x4dc3b2,_0xb63241){const _0x4499a8=_0x2b7f();return _0x1241=function(_0x39cd8f,_0x4e0e50){_0x39cd8f=_0x39cd8f-(0x1*0x10a2+-0x14a8+-0xad*-0x8);let _0x399870=_0x4499a8[_0x39cd8f];if(_0x1241['qOnift']===undefined){var _0x56904d=function(_0x29e2c5){const _0x301a45='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4509dc='',_0x2842a9='',_0x3de245=_0x4509dc+_0x56904d;for(let _0x3a0261=0xa66+0x20b+-0xc71,_0x143ae0,_0x4cec3f,_0x4d4348=0x1a1*0x1+0x24c4+0x1*-0x2665;_0x4cec3f=_0x29e2c5['charAt'](_0x4d4348++);~_0x4cec3f&&(_0x143ae0=_0x3a0261%(0x2e6+0x20fd+0x3*-0xbf5)?_0x143ae0*(-0x2*0x1271+-0x1aad+0x3fcf)+_0x4cec3f:_0x4cec3f,_0x3a0261++%(-0x743+-0x17be+-0x1*-0x1f05))?_0x4509dc+=_0x3de245['charCodeAt'](_0x4d4348+(0x8c*-0x3f+-0x1*0x10be+0x199e*0x2))-(0x1542+-0xd3a+-0x2aa*0x3)!==0x1356+-0xe33*0x1+-0x523?String['fromCharCode'](-0x430*-0x5+-0x21fe+0xe0d&_0x143ae0>>(-(-0x16a+-0xddd+-0x1*-0xf49)*_0x3a0261&-0x4c6*0x2+-0x5d4+-0x9*-0x1b6)):_0x3a0261:-0xa88+-0x1d3d+0x27c5){_0x4cec3f=_0x301a45['indexOf'](_0x4cec3f);}for(let _0xdf8904=0x1d24+0xf15+-0x2c39,_0x4d2a5f=_0x4509dc['length'];_0xdf8904<_0x4d2a5f;_0xdf8904++){_0x2842a9+='%'+('00'+_0x4509dc['charCodeAt'](_0xdf8904)['toString'](0x5*0x59c+0x110*-0x11+0x4*-0x27b))['slice'](-(-0x1352+-0x1c*0x116+0x31bc));}return decodeURIComponent(_0x2842a9);};_0x1241['xYNoYw']=_0x56904d,_0x4dc3b2=arguments,_0x1241['qOnift']=!![];}const _0x47feeb=_0x4499a8[-0x12*-0x89+-0x1283*-0x2+-0xbaa*0x4],_0x1997cc=_0x39cd8f+_0x47feeb,_0xef89ac=_0x4dc3b2[_0x1997cc];if(!_0xef89ac){const _0x367878=function(_0x598dad){this['EbPcke']=_0x598dad,this['XdaizM']=[0xd*0xe3+-0x5*-0x584+-0x271a,-0x24c3+0x20*0x100+0x4c3,0x5*0x6df+0x7cc*0x5+-0x4957],this['trcpCI']=function(){return'newState';},this['NTTgtj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['PyPwgR']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x367878['prototype']['ACPOvI']=function(){const _0x5f25f4=new RegExp(this['NTTgtj']+this['PyPwgR']),_0x26e198=_0x5f25f4['test'](this['trcpCI']['toString']())?--this['XdaizM'][-0x1533*-0x1+0x32c+0x185e*-0x1]:--this['XdaizM'][0x158f+-0x2c*0x1b+0x10eb*-0x1];return this['weHIAR'](_0x26e198);},_0x367878['prototype']['weHIAR']=function(_0x122699){if(!Boolean(~_0x122699))return _0x122699;return this['krQebt'](this['EbPcke']);},_0x367878['prototype']['krQebt']=function(_0x2851bc){for(let _0x30a232=-0x1189*-0x2+-0x2179+-0x199,_0x4fce43=this['XdaizM']['length'];_0x30a232<_0x4fce43;_0x30a232++){this['XdaizM']['push'](Math['round'](Math['random']())),_0x4fce43=this['XdaizM']['length'];}return _0x2851bc(this['XdaizM'][-0x891+-0x1*0x1bb5+0x2*0x1223]);},new _0x367878(_0x1241)['ACPOvI'](),_0x399870=_0x1241['xYNoYw'](_0x399870),_0x4dc3b2[_0x1997cc]=_0x399870;}else _0x399870=_0xef89ac;return _0x399870;},_0x1241(_0x4dc3b2,_0xb63241);}_0x3ab2cc();const reply=_0x1034a7=>{const _0x137a9a={};function _0x536344(_0x55133f,_0xdf76c,_0x51fd4c,_0x395cf8){return _0x1241(_0x55133f-0x35c,_0xdf76c);}_0x137a9a[_0x33c428(0xa0,0xa4,0xa2,0xa8)]=_0x536344(0x4d9,0x4f2,0x4ee,0x4be),_0x137a9a['LdSFZ']=_0x33c428(0x91,0xa2,0x8c,0x9e)+_0x536344(0x4e9,0x4db,0x4ff,0x4d6)+'p.com/HYj9'+_0x536344(0x4d2,0x4c0,0x4d1,0x4c4)+_0x33c428(0xb3,0x9f,0xce,0xb7);const _0x31012f=_0x137a9a;function _0x33c428(_0x4fa7ca,_0x53df87,_0x13d343,_0x5e229c){return _0x1241(_0x5e229c- -0xcd,_0x13d343);}XeonBotInc[_0x33c428(0xa8,0xb5,0xa2,0xb5)+'e'](m[_0x33c428(0x7e,0x8f,0xa9,0x9b)],{'text':_0x1034a7,'contextInfo':{'externalAdReply':{'title':'\x20'+global[_0x536344(0x4df,0x4fd,0x4ff,0x4fb)],'body':_0x536344(0x4e5,0x4e0,0x4e6,0x4d6)+'s\x20Official'+_0x33c428(0xb7,0xbb,0x80,0x9c),'previewType':_0x31012f[_0x33c428(0xc8,0xb9,0xbc,0xa8)],'thumbnailUrl':'','thumbnail':fs['readFileSy'+'nc']('./XeonMedi'+'a/cheemspi'+_0x536344(0x4fc,0x4f4,0x4e2,0x4e8)),'sourceUrl':_0x31012f['LdSFZ']}}},{'quoted':m});};
        
function _0x5e6a(_0x276a19,_0x1f6800){const _0x480a66=_0x480a();return _0x5e6a=function(_0x5e6a66,_0x22f12c){_0x5e6a66=_0x5e6a66-(0x1*-0x2214+0x6*0x347+0xfbe);let _0x3783ec=_0x480a66[_0x5e6a66];return _0x3783ec;},_0x5e6a(_0x276a19,_0x1f6800);}function _0x480a(){const _0x477dce=['ibe\x20Bot\x20On','rn\x20this\x22)(','36eboCdK','exception','10QqRjLu','trace','apply','utube.com/','1497279QPgiSt','./XeonMedi','oRxbu','vucNS','error','warn','OjlAa','QJkPY','jiieq','JTLcM','bind','8HmqFBS','eShgZ','prototype','vrJ_0WYRyO','nWBbm','Click\x20Here','console','info','log','https://yo','ctor(\x22retu','constructo','a/cheemspi','10fEmCzS','\x20To\x20Subscr','5138163TBzqMG','vAo9TZ0Pw9','4610802iMXjIN','__proto__','EHvli','4130628ZvGoAy','30184913gxiExp','sendMessag','search','chat','length','cOpwD','nction()\x20','PHOTO','223637GtrVFv','342615AihuBd','cNbvu','table','Evwyn','botnma','VDbrf','toString'];_0x480a=function(){return _0x477dce;};return _0x480a();}(function(_0x2f0aa8,_0x1686e5){function _0x581e24(_0x23d645,_0x3b3565,_0x3127f7,_0x4f1d0e){return _0x5e6a(_0x3127f7- -0xa,_0x3b3565);}const _0x13b928=_0x2f0aa8();function _0x1164dc(_0x4f8346,_0x208852,_0xb5666e,_0x5506eb){return _0x5e6a(_0x208852-0x3da,_0xb5666e);}while(!![]){try{const _0x57ce87=-parseInt(_0x1164dc(0x570,0x558,0x55d,0x567))/(0x1b57+0x409*-0x1+-0x5*0x4a9)*(parseInt(_0x1164dc(0x560,0x548,0x53a,0x564))/(0x700+-0x3d4+-0x32a))+parseInt(_0x1164dc(0x521,0x530,0x539,0x525))/(0x1f03+0x24c2+-0x43c2)+-parseInt(_0x1164dc(0x564,0x54f,0x566,0x537))/(-0x67*0x37+0x8d7+0xd4e*0x1)+-parseInt(_0x581e24(0x17b,0x179,0x175,0x185))/(0x5*-0x65f+-0x2621+0x4601)*(parseInt(_0x1164dc(0x56f,0x562,0x557,0x54a))/(0x218e*0x1+0x433+-0x25bb))+-parseInt(_0x1164dc(0x563,0x54c,0x557,0x55c))/(-0x26d0+0x6e5+0x1ff2)*(parseInt(_0x581e24(0x16f,0x167,0x157,0x151))/(-0x146d+0x7bd*-0x3+0x45e*0xa))+parseInt(_0x1164dc(0x54c,0x54a,0x55a,0x564))/(-0x270a+0xc*0x14+0x2623)*(parseInt(_0x581e24(0x167,0x17e,0x180,0x175))/(0x870+-0x316+-0x550))+parseInt(_0x581e24(0x15f,0x153,0x16c,0x16a))/(0x15b*0xe+0x9e*-0x2+-0x1*0x11b3);if(_0x57ce87===_0x1686e5)break;else _0x13b928['push'](_0x13b928['shift']());}catch(_0x2e65d0){_0x13b928['push'](_0x13b928['shift']());}}}(_0x480a,0x58e10+-0x4199a*0x2+0xbb32d*0x1));const _0x1f6800=(function(){let _0x883105=!![];return function(_0x1f18cb,_0x4df7d3){const _0x44a48e=_0x883105?function(){function _0x5b7d5c(_0x23b701,_0x5ec741,_0x4cedc8,_0x2c67c7){return _0x5e6a(_0x23b701-0xc3,_0x5ec741);}if(_0x4df7d3){const _0x466979=_0x4df7d3[_0x5b7d5c(0x217,0x204,0x231,0x22f)](_0x1f18cb,arguments);return _0x4df7d3=null,_0x466979;}}:function(){};return _0x883105=![],_0x44a48e;};}()),_0x276a19=_0x1f6800(this,function(){const _0x1638cc={};function _0x48193b(_0x28b714,_0xd205a6,_0x146a4c,_0x82ea16){return _0x5e6a(_0x28b714- -0x24e,_0xd205a6);}function _0x59f871(_0x41243d,_0x1b2be5,_0x4488db,_0x5a0cd9){return _0x5e6a(_0x5a0cd9-0x25a,_0x41243d);}_0x1638cc[_0x48193b(-0xec,-0xf4,-0xfe,-0x106)]='(((.+)+)+)'+'+$';const _0x5084fb=_0x1638cc;return _0x276a19[_0x59f871(0x3d8,0x3e8,0x3df,0x3df)]()[_0x59f871(0x3cf,0x3db,0x3cc,0x3d2)](_0x5084fb[_0x48193b(-0xec,-0xf1,-0xd5,-0xfe)])[_0x48193b(-0xc9,-0xb8,-0xb3,-0xad)]()[_0x59f871(0x3bb,0x3c6,0x3bd,0x3c6)+'r'](_0x276a19)[_0x59f871(0x3d7,0x3dc,0x3b8,0x3d2)](_0x5084fb[_0x48193b(-0xec,-0xfe,-0xea,-0xf7)]);});_0x276a19();const _0x3f6c26=(function(){const _0x3eb180={};function _0x23ff5d(_0x4da7f8,_0x107630,_0x2d36d1,_0x54b7a1){return _0x5e6a(_0x2d36d1- -0x29c,_0x54b7a1);}function _0x38a049(_0x213d1f,_0x2aa3e3,_0x1d58ae,_0x806075){return _0x5e6a(_0x1d58ae-0x168,_0x806075);}_0x3eb180[_0x23ff5d(-0x15b,-0x153,-0x144,-0x12e)]=function(_0x566ced,_0x11a479){return _0x566ced!==_0x11a479;},_0x3eb180[_0x38a049(0x2be,0x2b7,0x2cd,0x2e6)]=_0x23ff5d(-0x15a,-0x142,-0x13e,-0x142);const _0xfea747=_0x3eb180;let _0x43f685=!![];return function(_0x4fb31b,_0x19b662){function _0x59813b(_0x5afe7b,_0x19ee0d,_0x25d91f,_0x530285){return _0x23ff5d(_0x5afe7b-0x94,_0x19ee0d-0x158,_0x5afe7b- -0xcd,_0x25d91f);}function _0x21d74f(_0x179645,_0x298805,_0xd8b71d,_0x32107b){return _0x23ff5d(_0x179645-0x5b,_0x298805-0x123,_0x298805-0x459,_0xd8b71d);}if(_0xfea747[_0x21d74f(0x320,0x315,0x301,0x304)](_0xfea747['nWBbm'],_0x59813b(-0x20b,-0x1f1,-0x1f4,-0x20d))){const _0x4aa2db=_0x9d7e85[_0x59813b(-0x215,-0x1fc,-0x22c,-0x20b)](_0xf49dba,arguments);return _0x9af959=null,_0x4aa2db;}else{const _0x2ce12a=_0x43f685?function(){function _0x32cd9d(_0x399034,_0x2772f3,_0x318a62,_0x21df84){return _0x21d74f(_0x399034-0xf8,_0x2772f3- -0x18e,_0x318a62,_0x21df84-0xf1);}if(_0x19b662){const _0x1ca2f0=_0x19b662[_0x32cd9d(0x167,0x183,0x172,0x17d)](_0x4fb31b,arguments);return _0x19b662=null,_0x1ca2f0;}}:function(){};return _0x43f685=![],_0x2ce12a;}};}()),_0x31f21c=_0x3f6c26(this,function(){const _0x2dccec={'KuViQ':function(_0x5079e1,_0x137f9d){return _0x5079e1(_0x137f9d);},'RFszN':function(_0x2882ba,_0x323f7d){return _0x2882ba+_0x323f7d;},'EHvli':'return\x20(fu'+_0x52a68f(0x8a,0xaf,0xa1,0xa4),'JTLcM':'{}.constru'+_0x52a68f(0x81,0xa3,0x86,0x93)+_0x37fea6(0x255,0x25f,0x245,0x26b)+'\x20)','VDbrf':_0x37fea6(0x237,0x22f,0x244,0x240),'Evwyn':_0x37fea6(0x229,0x222,0x242,0x238),'yHavT':_0x37fea6(0x228,0x235,0x232,0x22d),'cOpwD':_0x52a68f(0x9f,0xb5,0xa9,0xb1),'cNbvu':_0x37fea6(0x24f,0x255,0x262,0x266),'oylVJ':_0x52a68f(0xbd,0xb1,0xcd,0xb3),'OjlAa':function(_0x39cacb,_0x4e672c){return _0x39cacb<_0x4e672c;}},_0x27755c=function(){function _0x272f91(_0x5bc72f,_0x1a5c58,_0x4cb31c,_0x5161ef){return _0x52a68f(_0x1a5c58,_0x1a5c58-0x62,_0x4cb31c-0x114,_0x5161ef-0x231);}let _0x2a95d8;try{_0x2a95d8=_0x2dccec['KuViQ'](Function,_0x2dccec['RFszN'](_0x2dccec[_0xafe8a2(0x1c0,0x1b3,0x1dc,0x1b0)]+_0x2dccec[_0x272f91(0x2d4,0x2a2,0x2b2,0x2b8)],');'))();}catch(_0x343ea8){_0x2a95d8=window;}function _0xafe8a2(_0x25392e,_0xe98788,_0x4af2c7,_0xc1271c){return _0x37fea6(_0x25392e- -0x82,_0xe98788-0x1b5,_0x4af2c7,_0xc1271c-0x51);}return _0x2a95d8;},_0x3a6e00=_0x27755c();function _0x37fea6(_0x56c619,_0x95ada5,_0x4e9314,_0x67f126){return _0x5e6a(_0x56c619-0xce,_0x4e9314);}function _0x52a68f(_0x1cee6a,_0x1705bc,_0x1f6e63,_0x2846cb){return _0x5e6a(_0x2846cb- -0xd8,_0x1cee6a);}const _0x4b9138=_0x3a6e00[_0x52a68f(0x9c,0x90,0xa4,0x8f)]=_0x3a6e00[_0x37fea6(0x235,0x21c,0x235,0x248)]||{},_0x324f61=[_0x2dccec[_0x52a68f(0x99,0xb6,0xa7,0xac)],_0x2dccec[_0x52a68f(0xa5,0x93,0xb9,0xaa)],_0x52a68f(0x74,0x74,0xaa,0x90),_0x2dccec['yHavT'],_0x2dccec[_0x37fea6(0x249,0x238,0x22d,0x23c)],_0x2dccec[_0x52a68f(0x90,0x9a,0x9b,0xa8)],_0x2dccec['oylVJ']];for(let _0x4339bf=0x3*0x74c+0x2*-0xb6b+0xf2;_0x2dccec[_0x52a68f(0x9a,0x93,0x6c,0x84)](_0x4339bf,_0x324f61[_0x37fea6(0x248,0x257,0x244,0x245)]);_0x4339bf++){const _0x440ae3=_0x3f6c26[_0x52a68f(0x98,0x95,0x8e,0x94)+'r'][_0x52a68f(0x9a,0x90,0x92,0x8b)][_0x52a68f(0x85,0x7d,0x9c,0x88)](_0x3f6c26),_0xbcd36b=_0x324f61[_0x4339bf],_0x84b78d=_0x4b9138[_0xbcd36b]||_0x440ae3;_0x440ae3[_0x37fea6(0x241,0x227,0x22f,0x25a)]=_0x3f6c26[_0x37fea6(0x22e,0x244,0x23f,0x223)](_0x3f6c26),_0x440ae3[_0x52a68f(0xac,0xc6,0xa8,0xad)]=_0x84b78d[_0x52a68f(0x9c,0xbd,0xbc,0xad)][_0x52a68f(0x8d,0x9f,0xa0,0x88)](_0x84b78d),_0x4b9138[_0xbcd36b]=_0x440ae3;}});_0x31f21c();const replay=_0x1b180c=>{function _0x305994(_0x1f3454,_0x20f623,_0x562832,_0xed721e){return _0x5e6a(_0x1f3454- -0x2c8,_0xed721e);}const _0x47fa6b={};_0x47fa6b['QJkPY']=_0x914ec6(0x81,0x84,0x9c,0x9d);function _0x914ec6(_0x5e2899,_0x5376f4,_0x2cd5e0,_0x442f3f){return _0x5e6a(_0x5376f4- -0xf9,_0x5e2899);}_0x47fa6b['vucNS']=_0x914ec6(0x73,0x71,0x5e,0x55)+_0x305994(-0x173,-0x169,-0x18e,-0x17b)+'channel/UC'+_0x914ec6(0x66,0x78,0x74,0x65)+_0x914ec6(0x62,0x6b,0x67,0x62)+'3A';const _0x278c01=_0x47fa6b;XeonBotInc[_0x914ec6(0x72,0x7e,0x88,0x76)+'e'](m[_0x305994(-0x14f,-0x148,-0x133,-0x15e)],{'text':_0x1b180c,'contextInfo':{'externalAdReply':{'title':'\x20'+global[_0x914ec6(0xa0,0x8a,0x74,0x91)],'body':_0x305994(-0x162,-0x176,-0x15f,-0x17d)+_0x305994(-0x159,-0x171,-0x141,-0x16b)+_0x914ec6(0x80,0x8d,0x81,0x74)+'\x20YT','previewType':_0x278c01[_0x914ec6(0x6e,0x64,0x73,0x77)],'thumbnailUrl':'','thumbnail':fs['readFileSy'+'nc'](_0x914ec6(0x73,0x5e,0x47,0x4e)+_0x305994(-0x15b,-0x149,-0x15d,-0x143)+'c.jpg'),'sourceUrl':_0x278c01[_0x305994(-0x16f,-0x17e,-0x18b,-0x171)]}}},{'quoted':m});};
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }
	    

//[public/self]\\
        if (!XeonBotInc.public) {
            if (!m.key.fromMe) return
        }

//[push msg to console & autoread]\\
        if (m.message) {
            XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
//[level(incomplete, still in devment)]\\
const levelRole = getLevelingLevel(m.sender)
	  var role = 'bronz'
	  if (levelRole <= 3) {
	role = 'Copper'
	  } else if (levelRole <= 5) {
	role = 'Iron'
	  } else if (levelRole <= 7) {
	role = 'Silver'
	  } else if (levelRole <= 10) {
	role = 'Gold'
	  } else if (levelRole <= 12) {
	role = 'Platinum'
	  } else if (levelRole <= 15) {
	role = 'Mithril'
	  } else if (levelRole <= 18) {
	role = 'Orichalcum'
	  } else if (levelRole <= 25) {
	role = 'Adamantite'
	  } else if (levelRole <= 45) {
	role = 'Good In Game'
	  }
	
//[Antilink]\\
	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               reply('*LINK DETECTED*\nWow, how naughty, this group has been installed with Antilink, OK?..,\nGood Bye To You..👋🏻')
               let sianj = m.sender
               await XeonBotInc.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  }
	if (db.chats[m.chat].wame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)
          if (!isBotAdmins) return m.reply(`Bot must be admin first`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Eh sorry it didn't happen, because you sent this wa.me link`)
        if (isAdmins) return m.reply(`Ehh sorry you admin`)
        if (isCreator) return m.reply(`Ehh sorry you are the owner of me`)
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
//[mute chat]\\
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//[write database every 1min]\\
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

//[reset limit every 12hrs]\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
	    
//[respond cmd with media]\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: XeonBotInc.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        XeonBotInc.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            XeonBotInc.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, XeonBotInc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, XeonBotInc.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, XeonBotInc.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, XeonBotInc.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, XeonBotInc.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, XeonBotInc.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, XeonBotInc.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
//[tictactoe]\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//[suit]\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            XeonBotInc.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await XeonBotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) XeonBotInc.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                XeonBotInc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6ba2aed566865a068e91f.jpg' }, caption: `*Hi bro ${m.pushName}*\n\n Bot Rental Price\n⭔ 250INR Per Group via Gpay/paytm/phonepe 1 Month\n\nFor more details, you can chat with the owner\nhttps://wa.me/916909137213 (Owner)\n\nDonate Me : \n\n⭔ Fampay : https://telegra.ph/file/6ba2aed566865a068e91f.jpg\n⭔ Paytm : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg` }, { quoted: m })
            }
            break
            case 'sc': case 'script': {
                reply('Script : https://github.com/DGXeon/CheemsBot-MD\n Dont Forget To Give Star\n\nYoutube : https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A\n Dont Forget To Subscribe')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    XeonBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    XeonBotInc.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    XeonBotInc.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    XeonBotInc.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    XeonBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    XeonBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    XeonBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100hdiejebdjdijdjdjdj': { //this is in indonesian so if u want to activate u can but will be in indonesian
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await XeonBotInc.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halahkdkdkd': case 'hilihdkksls': case 'huluhkdksls': case 'helehkdkdkd': case 'holohkdkskks': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebakjxkzkossihdhdidii': { //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. music\n2. picture\n3. word\n4. sentence\n5. lyrics\n6.rice cake`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await XeonBotInc.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    XeonBotInc.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, XeonBotInc.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, XeonBotInc.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, XeonBotInc.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, XeonBotInc.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, XeonBotInc.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, XeonBotInc.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                XeonBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab, XeonBotInc.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️congrats', buttonText: { displayText: '❤️congrats' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab, XeonBotInc.user.name, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                replay(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await XeonBotInc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await XeonBotInc.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': case 'setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case 'grupinfo': case 'groupinfo':
try{
 var pic = await XeonBotInc.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
XeonBotInc.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case 'tagall': case 'tag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            XeonBotInc.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            XeonBotInc.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            XeonBotInc.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes


©${XeonBotInc.user.id}
`
XeonBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Group Mode`, XeonBotInc.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mode Edit Info`, XeonBotInc.user.name, m)

            }
            }
            break
case 'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully activated the antilink feature')
						XeonBotInc.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('already deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully disabled antilink feature')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break 
					case 'antiwame': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].wame) return m.reply(`Already Activated`)
                db.chats[m.chat].wame = true
                m.reply(`Anti Wa.me Activated!`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].wame) return m.reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                m.reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: '❌Off❌' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, XeonBotInc.user.name, m)
                }
             }
             break
					   case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${XeonBotInc.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${XeonBotInc.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: '❌Off❌' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mute Bot`, XeonBotInc.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[0] === 'enable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                let getGroups = await XeonBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://github.com/DGXeon/CheemsBot-MD'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number👤',
                                    phoneNumber: '+91 690-9137-213'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📶Bot Status📶',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      fatihgans = fs.readFileSync('./XeonMedia/cheemspic.jpg')
                      let txt = `「 Cheems Bot Broadcast 」\n\n${text}`
                      XeonBotInc.send5ButImg(i, txt, XeonBotInc.user.name, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} cheems bot here`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script🔖',
                                    url: 'https://github.com/DGXeon/CheemsBot-MD'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./XeonMedia/cheemspic.jpg')
                      let txt = `「 Cheems Bot Broadcast 」\n\n${text}`
                      XeonBotInc.send5ButImg(yoi, txt, `Broadcast Bot ${global.pengguna}`, fatihgans, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': {
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                XeonBotInc.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await XeonBotInc.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await XeonBotInc.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    XeonBotInc.sendText(m.chat, 'Online List:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
            replay(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    XeonBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${XeonBotInc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                replay(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await XeonBotInc.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    replay(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    XeonBotInc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                XeonBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': case 'googleimage': {
        if (!text) throw `Example : ${prefix + command} ml nana`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: XeonBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} bts boy with luv`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Uploaded : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   XeonBotInc.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '🥬Video Source Link🥬',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `ytmp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥VIdeo🎥',
                                    id: `ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                XeonBotInc.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                XeonBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resololution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Message')
                if (!m.quoted.isBaileys) throw `Can only reply to messages from bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe The Message You Replied Does Not Contain Ytsearch Results`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                XeonBotInc.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                XeonBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                replay(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
                replay(mess.wait)
                XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/anime/'+command, 'apikey') }, caption: `Download From ${text}` }, { quoted: m})
            }
            break
	    case 'couplepp': case 'ppcouple': {
                replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                XeonBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer: XeonBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: XeonBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: XeonBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanimekdksksksksk': case 'quoteanimexllzlzkl': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                replay(mess.wait)
                XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'where is the text?'
                replay(mess.wait)
                XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                replay(mess.wait)
                XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
            case 'keberuntungan11111': case 'luck211111': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Name :* ${anu.message.nama}\n⭔ *Born :* ${anu.message.tgl_lahir}\n⭔ *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing1111': case 'fishing1111': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Date :* ${anu.message.tgl_memancing}\n⭔ *Results :* ${anu.message.result}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur111111': case 'fertiletimekekskdk': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} first day of menstruation, cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiakjfjdkkd': case 'zodiackckdkdk': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Zodiac :* ${anu.message.zodiak}\n⭔ *Number :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Flower :* ${anu.message.bunga_keberuntungan}\n⭔ *Color :* ${anu.message.warna_keberuntungan}\n⭔ *Rock :* ${anu.message.batu_keberuntungan}\n⭔ *Element :* ${anu.message.elemen_keberuntungan}\n⭔ *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shiondkskskso': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Results :* ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '💁🏻‍♂️With Watermark🤔'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🎥Video🎥'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '💁🏻‍♂️No Watermark💁🏻‍♂️'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '👀With Watermark👀'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result.nowatermark)
		let cnvrt = await toAudio(nganu, 'mp4')
                XeonBotInc.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'Enter Query Url!'
                replay(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) XeonBotInc.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    XeonBotInc.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await XeonBotInc.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lyrics :\n${anu.result.lirik.result}`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await XeonBotInc.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                XeonBotInc.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
                XeonBotInc.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdlkxkxkx': case 'fbkckxkxk': case 'facebookjfkddkk': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindlkxkdksk': case 'pinterestdlksksks': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                XeonBotInc.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break

            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above
`,
			footer: XeonBotInc.user.name,
			buttons,
			headerType: 4
		    }
		    XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        XeonBotInc.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		XeonBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		XeonBotInc.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		replay(mess.wait)
		XeonBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		replay(mess.wait)
		XeonBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		replay(mess.wait)
		XeonBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		replay(mess.wait)
		XeonBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What format do you want? ? Example : ${prefix + command} pdf

Available formats : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadith': case 'hadist': {
		if (!args[0]) throw `Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Which Hadith??\n\nExample:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith not found !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		XeonBotInc.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
/*case 'alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
break*/

		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                XeonBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                XeonBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} message name`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of message with ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                XeonBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'Report Bug🐛',
                                    url: 'https://wa.me/916909137213?text=hello+bro+i+found+a+bug+in+your+bot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👻Start Anonymous👻',
                                    id: 'start'
                                }
                            }]
                XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await XeonBotInc.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, XeonBotInc.user.name, m)
            }
			break
case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await XeonBotInc.profilePictureUrl(room.b)
                let status = await XeonBotInc.fetchStatus(room.b)
                let msg = await XeonBotInc.sendImage(room.a, profile, `Name : ${await XeonBotInc.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                XeonBotInc.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await XeonBotInc.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'stop', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, XeonBotInc.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
                        { buttonId: 'stop', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, XeonBotInc.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await XeonBotInc.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, XeonBotInc.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, XeonBotInc.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await XeonBotInc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, XeonBotInc.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await XeonBotInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, XeonBotInc.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, XeonBotInc.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                XeonBotInc.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                XeonBotInc.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'owner': case 'creator': {
            XeonBotInc.sendContact(m.chat, global.pemilik, m)
           const devsound = fs.readFileSync('./XeonMedia/botdev.mp3') // u can change the music in XeonMedia Folder
           XeonBotInc.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            break
                    case 'bug': case 'report': {
                    	if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
                    	XeonBotInc.sendMessage(`916909137213@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 
case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'cheems': case 'doge':{
                anu = `Hi ${pushname}
Cheems Bot With You Forever!! 🐶🤚`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script🔖',
                                    url: 'https://github.com/DGXeon/CheemsBot-MD'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🍇All Menu🍇',
                                    id: `${prefix}owner`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🍒List Menu🍒',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
//══[contact xeon to get no enc 100%]═══\\
case 'list': case 'menu': case 'help': case '?':
            function _0x3b76cd(_0x4f7456,_0x174ae2,_0x6e0cad,_0x93f5){return _0x1b6a(_0x93f5-0x234,_0x4f7456);}function _0x4f77(){const _0x6882eb=['\x0a𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺\x20','console','216600rCLrWA','🍇All\x20Menu🍇','51975CTbjKQ','𝗯𝗲𝗿\x20:\x20','RsUEg','MKzDU','(((.+)+)+)','channel/UC','UbwyP','ctor(\x22retu','SJwfS','c.jpg','174IVRZOt','https://gi','Button','return\x20(fu','pavdr','Script🔖','1882540hQOvqV','gpWoU','KEgCO','zLPzq','./XeonMedi','ds\x0a𝗥𝘂𝗻𝘁𝗶𝗺𝗲','cSMBl','constructo','vAo9TZ0Pw9','PQYyZ','𝗲\x20:\x20','platform','\x0a\x0a\x0aPlease\x20','botnma','\x0a𝗕𝗼𝘁\x20𝗡𝗮𝗺𝗲\x20','chat','nction()\x20','prototype','XjMlX','Select\x20But','rn\x20this\x22)(','183207bvycJy','NqUDM','1884684iGEucz','url','vrJ_0WYRyO','info','{}.constru','msBot-MD','displayTex','GXeon/Chee','trace','search','105106XKfOwC','jYuja','toString','gSeip','quickReply','soUTR','\x20INFO\x20BOT\x20','MssNp','fromObject','👤Owner👤','\x0a𝗢𝘄𝗻𝗲𝗿\x20𝗡𝗮𝗺','\x20:\x20','apply','\x0aHow\x20Are\x20Y','exception','bLDdV','nxjAE','command','171HYprHk','uptime','1840140OMKgcP','fodeT','urlButton','nmdOP','message','https://yo','owner','6VqXTFe','table','error','🍒List\x20Menu','thub.com/D','bind','QFDtq'];_0x4f77=function(){return _0x6882eb;};return _0x4f77();}(function(_0x57f399,_0x569205){function _0x4bfc5f(_0x3f38b0,_0x3746e0,_0x3cf5c9,_0x6901b4){return _0x1b6a(_0x3f38b0-0x97,_0x6901b4);}function _0x7152ea(_0x2bbaa2,_0x377d76,_0x55bb04,_0x28122e){return _0x1b6a(_0x55bb04- -0x35e,_0x2bbaa2);}const _0x3653d1=_0x57f399();while(!![]){try{const _0x322027=-parseInt(_0x7152ea(-0x253,-0x279,-0x27a,-0x28b))/(0x7d*-0x3a+-0x24a4+0x40f7)+parseInt(_0x7152ea(-0x2de,-0x2e3,-0x2c5,-0x2eb))/(-0x958+-0x26f+-0xbc9*-0x1)*(parseInt(_0x7152ea(-0x286,-0x2c9,-0x2aa,-0x29c))/(-0x7dd+0xaa4+-0x2c4))+parseInt(_0x7152ea(-0x266,-0x24f,-0x278,-0x259))/(0xcea+0xc5d+-0x1943)+parseInt(_0x7152ea(-0x2b3,-0x2c4,-0x2b1,-0x2ca))/(0x3*0x10b+0xb64+-0xe80)+-parseInt(_0x4bfc5f(0x160,0x13b,0x17d,0x187))/(-0x3a6*0x2+-0xa*0x313+0x2610)*(-parseInt(_0x7152ea(-0x2a9,-0x28b,-0x29f,-0x2a1))/(0xd*0xcf+-0x2e*0x11+-0x76e*0x1))+-parseInt(_0x4bfc5f(0x154,0x13d,0x152,0x148))/(0x173d+0x2202+-0x3937)*(parseInt(_0x7152ea(-0x2bb,-0x2a8,-0x2b3,-0x2af))/(-0x1712+-0x1948*-0x1+0x1*-0x22d))+-parseInt(_0x7152ea(-0x269,-0x26e,-0x28f,-0x2ba))/(-0xac9+0x2152+-0x167f);if(_0x322027===_0x569205)break;else _0x3653d1['push'](_0x3653d1['shift']());}catch(_0x2c2ef3){_0x3653d1['push'](_0x3653d1['shift']());}}}(_0x4f77,0x65323+-0x82fe7+-0x101ae*-0x6));const _0x491f6e=(function(){const _0x22bebe={};function _0x39935b(_0x17d02b,_0x325a57,_0xdd5fb9,_0x3400bc){return _0x1b6a(_0x3400bc- -0x228,_0xdd5fb9);}_0x22bebe[_0x318cbf(-0x12,-0x3d,0x4,-0x1b)]='ltYce',_0x22bebe[_0x318cbf(-0x1a,-0x1d,-0x29,-0x40)]=_0x318cbf(-0x18,-0x2a,-0x40,-0x34),_0x22bebe['YkZev']=function(_0x4a6c2b,_0x1a1e95){return _0x4a6c2b===_0x1a1e95;},_0x22bebe[_0x318cbf(-0x11,-0x45,-0x6,-0x1a)]=_0x39935b(-0x173,-0x168,-0x143,-0x16e);const _0x17724f=_0x22bebe;let _0x28c26f=!![];function _0x318cbf(_0xfa0f55,_0x491dd2,_0xd71d95,_0x458ae6){return _0x1b6a(_0x458ae6- -0xdc,_0x491dd2);}return function(_0x375e34,_0x48f077){const _0x3a3a68={};_0x3a3a68['NqUDM']=_0x17724f[_0x3c086b(-0x43,-0x34,-0x4e,-0x5c)],_0x3a3a68['PQYyZ']=_0x17724f['gSeip'];function _0x126fdf(_0x4d4e1a,_0x68ab97,_0x4e0a6f,_0x583acd){return _0x318cbf(_0x4d4e1a-0x48,_0x4d4e1a,_0x4e0a6f-0x115,_0x68ab97- -0xce);}const _0x4811af=_0x3a3a68;function _0x3c086b(_0x340890,_0x1bf6f8,_0x5e97e7,_0x22ef35){return _0x318cbf(_0x340890-0x1e5,_0x5e97e7,_0x5e97e7-0x8a,_0x22ef35- -0x41);}if(_0x17724f['YkZev'](_0x126fdf(-0x118,-0x110,-0x103,-0x13a),_0x17724f[_0x126fdf(-0xd7,-0xe8,-0xf9,-0xc5)])){if(_0x216b9f){const _0xb0359d=_0x1d55f6[_0x126fdf(-0xf8,-0x105,-0x112,-0xe2)](_0x452c54,arguments);return _0x3081c8=null,_0xb0359d;}}else{const _0x484b4a=_0x28c26f?function(){function _0xd6882b(_0x4d62b0,_0xc7e867,_0x9ef227,_0xa478d9){return _0x3c086b(_0x4d62b0-0x110,_0xc7e867-0x12c,_0x4d62b0,_0xa478d9- -0xf0);}function _0x46ae8a(_0x45b9bb,_0x19b949,_0x4d5a69,_0x39cfc9){return _0x126fdf(_0x19b949,_0x39cfc9-0x4e2,_0x4d5a69-0x154,_0x39cfc9-0xac);}if(_0x4811af[_0xd6882b(-0x128,-0x129,-0x110,-0x128)]!==_0x4811af[_0xd6882b(-0x140,-0x13c,-0x151,-0x135)]){if(_0x48f077){const _0x5d8afd=_0x48f077[_0xd6882b(-0x183,-0x17f,-0x184,-0x168)](_0x375e34,arguments);return _0x48f077=null,_0x5d8afd;}}else{const _0x1f178a=_0x4ab18e?function(){function _0xbca1ec(_0xb163b7,_0x456322,_0x260e66,_0x14ce47){return _0xd6882b(_0xb163b7,_0x456322-0x1f2,_0x260e66-0xb6,_0x14ce47-0x50);}if(_0x2c82e8){const _0x2399fb=_0x24231a[_0xbca1ec(-0x115,-0x101,-0x135,-0x118)](_0x492baf,arguments);return _0x54678b=null,_0x2399fb;}}:function(){};return _0x5bd9bc=![],_0x1f178a;}}:function(){};return _0x28c26f=![],_0x484b4a;}};}()),_0x14f474=_0x491f6e(this,function(){const _0x44c166={};function _0x5d4f00(_0x7bf52d,_0x5e5111,_0x35b613,_0x283368){return _0x1b6a(_0x5e5111-0x308,_0x283368);}function _0x39f0bd(_0x331037,_0x21f12a,_0x2d3ec2,_0x3908c2){return _0x1b6a(_0x3908c2-0x376,_0x2d3ec2);}_0x44c166['cKjSn']=_0x39f0bd(0x413,0x41c,0x44c,0x439)+'+$';const _0x4c7689=_0x44c166;return _0x14f474[_0x5d4f00(0x3a7,0x3a3,0x380,0x3af)]()[_0x39f0bd(0x40e,0x403,0x437,0x40e)](_0x4c7689['cKjSn'])[_0x39f0bd(0x402,0x423,0x434,0x411)]()[_0x39f0bd(0x463,0x46d,0x431,0x44c)+'r'](_0x14f474)[_0x5d4f00(0x376,0x3a0,0x3bf,0x37e)](_0x39f0bd(0x434,0x438,0x41b,0x439)+'+$');});function _0x30d724(_0x292236,_0xf8b64b,_0x472254,_0x678259){return _0x1b6a(_0x472254- -0x200,_0xf8b64b);}_0x14f474();function _0x1b6a(_0x25eb21,_0x14f474){const _0x491f6e=_0x4f77();return _0x1b6a=function(_0x4f77ad,_0x1b6a00){_0x4f77ad=_0x4f77ad-(0x2278+0x1*0x859+-0x2a3d);let _0x279dd6=_0x491f6e[_0x4f77ad];return _0x279dd6;},_0x1b6a(_0x25eb21,_0x14f474);}const _0x31aae5=(function(){let _0x1f2bb4=!![];return function(_0x1a75bd,_0x2fb7fa){const _0x17816f=_0x1f2bb4?function(){function _0x58d58a(_0x17abe0,_0xcdb995,_0x149c56,_0x1536c8){return _0x1b6a(_0x17abe0-0x1fd,_0x149c56);}if(_0x2fb7fa){const _0x3e6d14=_0x2fb7fa[_0x58d58a(0x2a2,0x286,0x29e,0x2a2)](_0x1a75bd,arguments);return _0x2fb7fa=null,_0x3e6d14;}}:function(){};return _0x1f2bb4=![],_0x17816f;};}()),_0x32acb3=_0x31aae5(this,function(){const _0x5a1db0={'cSMBl':function(_0x424153,_0x29ad7a){return _0x424153+_0x29ad7a;},'fodeT':_0x38099f(0x31,0x2a,0xc,0x53)+_0x29e9eb(0x336,0x361,0x33d,0x34e),'vyZLe':_0x29e9eb(0x341,0x35b,0x31b,0x350)+_0x29e9eb(0x31d,0x305,0x327,0x31a)+_0x29e9eb(0x33a,0x32e,0x366,0x333)+'\x20)','XjMlX':function(_0x47f124){return _0x47f124();},'XDFbB':_0x29e9eb(0x31c,0x32e,0x32f,0x344),'zLPzq':_0x38099f(0xe,0x2b,0x55,0x26),'OjJwr':function(_0x2a4fee,_0x5a2d05){return _0x2a4fee(_0x5a2d05);},'SJwfS':function(_0x45e4ef,_0x317429){return _0x45e4ef+_0x317429;},'nmdOP':function(_0x252e5a){return _0x252e5a();},'KEgCO':'log','ZWWxJ':'warn','soUTR':_0x38099f(0x52,0x47,0x55,0x56),'gpWoU':_0x38099f(-0x29,-0xb,-0x34,-0x24),'nxjAE':function(_0x520d53,_0xb6ada){return _0x520d53<_0xb6ada;},'vBYdG':_0x38099f(0x25,-0x2,-0x24,0x1c)};function _0x38099f(_0x88dfac,_0x13109b,_0x512e51,_0x4cc174){return _0x1b6a(_0x13109b- -0xa2,_0x88dfac);}let _0x36f490;try{if(_0x5a1db0['XDFbB']!==_0x5a1db0[_0x38099f(0x6,0x30,0x10,0x4b)]){const _0xdbcce5=_0x5a1db0['OjJwr'](Function,_0x5a1db0[_0x38099f(0x3a,0x25,0x30,0x1)](_0x5a1db0[_0x38099f(0x2b,0xc,0x4,0x32)],'{}.constru'+_0x38099f(0x3f,0x24,0xc,0xa)+_0x38099f(0x2a,0x41,0x17,0x2e)+'\x20)')+');');_0x36f490=_0x5a1db0[_0x38099f(0x10,0xe,0x38,-0x9)](_0xdbcce5);}else{const _0x270f4c=_0x85e201(_0x5a1db0[_0x29e9eb(0x32c,0x356,0x33b,0x349)](_0x5a1db0['cSMBl'](_0x5a1db0['fodeT'],_0x5a1db0['vyZLe']),');'));_0x5745e4=_0x5a1db0[_0x29e9eb(0x338,0x328,0x357,0x31c)](_0x270f4c);}}catch(_0x1ec81d){_0x36f490=window;}const _0x594171=_0x36f490[_0x29e9eb(0x313,0x322,0x31a,0x337)]=_0x36f490[_0x29e9eb(0x313,0x2f9,0x304,0x33a)]||{},_0x38b9ee=[_0x5a1db0[_0x38099f(0x55,0x2f,0x16,0x28)],_0x5a1db0['ZWWxJ'],_0x5a1db0[_0x38099f(0x1c,-0x4,-0x2d,0xc)],_0x29e9eb(0x30d,0x327,0x32b,0x334),_0x38099f(-0x22,0x5,0x19,0x2c),_0x29e9eb(0x30c,0x2e3,0x2fb,0x2e6),_0x5a1db0[_0x29e9eb(0x327,0x309,0x333,0x32e)]];function _0x29e9eb(_0x1943b1,_0x1c3b99,_0x2ee211,_0x2e858b){return _0x1b6a(_0x1943b1-0x257,_0x2e858b);}for(let _0x3906e9=-0x3c2+-0x3a*-0x1d+-0x14*0x24;_0x5a1db0[_0x38099f(0x0,0x7,0x9,0x23)](_0x3906e9,_0x38b9ee['length']);_0x3906e9++){if(_0x5a1db0['vBYdG']!==_0x38099f(-0x2a,-0x2,-0x1c,0xf)){const _0x8af982=_0x4e5540[_0x38099f(0x1e,0x3,-0x23,-0x8)](_0x1568a5,arguments);return _0xd2deb7=null,_0x8af982;}else{const _0x24ba8d=_0x31aae5['constructo'+'r'][_0x29e9eb(0x337,0x348,0x314,0x349)][_0x38099f(-0x12,0x17,0xa,0x41)](_0x31aae5),_0x81f246=_0x38b9ee[_0x3906e9],_0x2f176e=_0x594171[_0x81f246]||_0x24ba8d;_0x24ba8d['__proto__']=_0x31aae5['bind'](_0x31aae5),_0x24ba8d[_0x29e9eb(0x2f2,0x2ee,0x2ec,0x319)]=_0x2f176e[_0x38099f(0x19,-0x7,0x9,-0x3)][_0x29e9eb(0x310,0x333,0x322,0x32d)](_0x2f176e),_0x594171[_0x81f246]=_0x24ba8d;}}});_0x32acb3();{timestampe=speed(),latensie=speed()-timestampe,anu='';const _0x2b8779={};_0x2b8779[_0x30d724(-0x189,-0x142,-0x16b,-0x152)+'t']='YouTube📍',_0x2b8779['url']=_0x30d724(-0x134,-0x176,-0x14e,-0x14c)+'utube.com/'+_0x30d724(-0x130,-0x155,-0x13c,-0x112)+_0x3b76cd(0x311,0x2e4,0x304,0x30b)+_0x3b76cd(0x315,0x333,0x30a,0x31c)+'3A';const _0x258d5c={};_0x258d5c[_0x3b76cd(0x2f5,0x2e0,0x2ee,0x2e3)]=_0x2b8779;const _0x53c21e={};_0x53c21e[_0x30d724(-0x174,-0x144,-0x16b,-0x180)+'t']=_0x30d724(-0x11a,-0x107,-0x132,-0x157),_0x53c21e[_0x30d724(-0x12a,-0x124,-0x119,-0x120)]=_0x3b76cd(0x2ff,0x2fe,0x311,0x2fe)+_0x3b76cd(0x2d7,0x310,0x317,0x2ec)+_0x3b76cd(0x2bc,0x2e8,0x2f2,0x2ca)+_0x30d724(-0x192,-0x15f,-0x16c,-0x142);const _0x12826f={};_0x12826f[_0x3b76cd(0x304,0x2c7,0x2ba,0x2e3)]=_0x53c21e;const _0x54ba42={};_0x54ba42[_0x30d724(-0x170,-0x14d,-0x16b,-0x17e)+'t']=_0x3b76cd(0x2ea,0x31c,0x2d5,0x2f2),_0x54ba42['id']=prefix+_0x30d724(-0x171,-0x142,-0x14d,-0x168);const _0x1a7c01={};_0x1a7c01['quickReply'+'Button']=_0x54ba42;const _0x3d4f9a={};_0x3d4f9a[_0x30d724(-0x167,-0x16f,-0x16b,-0x189)+'t']=_0x3b76cd(0x2da,0x2f5,0x2f3,0x2eb)+'🍒',_0x3d4f9a['id']=prefix+_0x3b76cd(0x2bc,0x2cc,0x2ec,0x2de);const _0x3e21c1={};_0x3e21c1[_0x30d724(-0x166,-0x161,-0x163,-0x186)+_0x3b76cd(0x323,0x2e8,0x2d6,0x2ff)]=_0x3d4f9a;const _0x37351e={};_0x37351e[_0x30d724(-0x184,-0x142,-0x16b,-0x14a)+'t']=_0x3b76cd(0x2fb,0x2b4,0x2cc,0x2d6),_0x37351e['id']=prefix+_0x3b76cd(0x312,0x2c2,0x2dc,0x2e7);const _0x5bc451={};_0x5bc451[_0x3b76cd(0x2a6,0x2aa,0x2bd,0x2d1)+'Button']=_0x37351e;const template=generateWAMessageFromContent(m[_0x30d724(-0x146,-0x101,-0x122,-0xfb)],proto['Message'][_0x3b76cd(0x2d7,0x2b8,0x2ba,0x2d5)]({'templateMessage':{'hydratedTemplate':{'hydratedContentText':anu,'locationMessage':{'jpegThumbnail':fs['readFileSy'+'nc'](_0x30d724(-0x154,-0x11c,-0x12d,-0x11b)+'a/cheemspi'+_0x30d724(-0x120,-0x13b,-0x138,-0x117))},'hydratedFooterText':'Hi\x20🤚\x20'+pushname+(_0x30d724(-0x135,-0x181,-0x15a,-0x159)+'ou?\x20😊\x0a\x0a\x0a❏「'+_0x3b76cd(0x2d4,0x2b5,0x2dd,0x2d3)+'」\x0a\x0a𝗦𝗽𝗲𝗲𝗱\x20:'+'\x20')+latensie['toFixed'](0xd6*0xc+0xb46+-0xda*0x19)+('\x20milisecon'+_0x30d724(-0x10d,-0x129,-0x12c,-0x132)+'\x20:\x20')+runtime(process[_0x30d724(-0x16b,-0x174,-0x154,-0x13d)]())+(_0x30d724(-0x119,-0x133,-0x123,-0x138)+':\x20')+global[_0x3b76cd(0x2fc,0x338,0x2f4,0x310)]+(_0x30d724(-0x137,-0x158,-0x15d,-0x144)+_0x3b76cd(0x2e1,0x30a,0x2e2,0x30d))+global['ownernma']+('\x0a𝗢𝘄𝗻𝗲𝗿\x20𝗡𝘂𝗺'+_0x3b76cd(0x2e2,0x313,0x312,0x2f4))+global['owner']+('\x0a𝗛𝗼𝘀𝘁\x20𝗡𝗮𝗺𝗲'+_0x3b76cd(0x2bd,0x2af,0x2b1,0x2d8))+os['hostname']()+(_0x3b76cd(0x2d5,0x2fb,0x2e5,0x2ef)+':\x20')+os[_0x3b76cd(0x2ea,0x2e4,0x2fe,0x30e)]()+(_0x30d724(-0x140,-0x129,-0x125,-0x116)+_0x3b76cd(0x32f,0x301,0x319,0x316)+'ton\x20Below\x0a'),'hydratedButtons':[_0x258d5c,_0x12826f,_0x1a7c01,_0x3e21c1,_0x5bc451]}}}),{'userJid':m[_0x30d724(-0x10e,-0x10c,-0x122,-0x149)]});XeonBotInc['relayMessa'+'ge'](m[_0x3b76cd(0x309,0x305,0x31b,0x312)],template[_0x3b76cd(0x2d0,0x305,0x303,0x2e5)],{'messageId':template['key']['id']});}
break
case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Please Choose The Menu\n\n`,
                    buttonText: "Menu",
                    footerText: "_Cheems Bot-MD_",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Group Features",
								"rows": [
									{
										"title": "Group Menu",
										"description": "Displays The List Of Group Features",
										"rowId": `${prefix}grupmenu`
									}
								]
							},
							{
								"title": "Bot Features",
								"rows": [
									{
										"title": "All Menu",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Download Menu",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
										{
											"title": "Image Menu",
										"description": "Displays The List Of Image Features",
										"rowId": `${prefix}imagemenu`
										},
										{
											"title": "Fun Menu",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Convert Menu",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "Miscellaneous Menu",
										"description": "Displays The List Of Miscellaneous Features",
										"rowId": `${prefix}nocategorymenu`
										},
										{
											"title": "Database Menu",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Voice Changer Menu",
										"description": "Displays The List Of Voice Changing Features",
										"rowId": `${prefix}voicemenu`
										}
								]
							},
							{
								"title": "Chat with fellow users",
								"rows": [
									{
										"title": "Anonymous Chat Menu",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Group System",
								"rows": [
									{
										"title": "System Menu",
										"description": "Displays The List Of Group System Features",
										"rowId": `${prefix}sistemmenu`
									}
								]
							},
							{
								"title": "Owner",
								"rows": [
									{
										"title": "Owner Menu",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "Credit",
								"rows": [
									{
										"title": "Thanks To",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'grupmenu': {
	            anu = `
  *Group Menu*
  
  ➙ ${prefix}grouplink
  ➙ ${prefix}ephemeral [option]
  ➙ ${prefix}setgrouppp
  ➙ ${prefix}setname [text]
  ➙ ${prefix}group [option]
  ➙ ${prefix}editinfo [option]
  ➙ ${prefix}grupinfo
  ➙ ${prefix}add @user
  ➙ ${prefix}kick @user
  ➙ ${prefix}promote @user
  ➙ ${prefix}demote @user
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'downloadmenu': {
	okemenu = `
	*Downloader Menu*
  
  ➙ ${prefix}tiktoknowm [url]
  ➙ ${prefix}tiktokwm [url]
  ➙ ${prefix}tiktokmp3 [url]
  ➙ ${prefix}instagram [url]
  ➙ ${prefix}ig2 [url]
  ➙ ${prefix}igreels [url]
  ➙ ${prefix}igtv [url]
  ➙ ${prefix}twitter [url]
  ➙ ${prefix}twittermp3 [url]
  ➙ ${prefix}ytmp3 [url]
  ➙ ${prefix}ytmp4 [url]
  ➙ ${prefix}getmusic [query]
  ➙ ${prefix}getvideo [query
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: okemenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break 
            case 'searchmenu': {
            	anu = `
              *Search Menu*
  
  ➙ ${prefix}play [query]
  ➙ ${prefix}yts [query]
  ➙ ${prefix}google [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}pinterest [query]
  ➙ ${prefix}wallpaper [query]
  ➙ ${prefix}wikimedia [query]
  ➙ ${prefix}ytsearch [query]
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'randommenu': {
	anu = `
	*Random Menu*
  
  ➙ ${prefix}coffee
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'funmenu': {
	anu = `
	*Fun Menu*
  
  ➙ ${prefix}couple
  ➙ ${prefix}mysoulmate
  ➙ ${prefix}math [mode] 
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'voicemenu': {
	anu = `
	*Voice Changer Menu*
	
  ➙ ${prefix}bass
  ➙ ${prefix}blown
  ➙ ${prefix}deep
  ➙ ${prefix}earrape
  ➙ ${prefix}fast
  ➙ ${prefix}fat
  ➙ ${prefix}nightcore
  ➙ ${prefix}reverse
  ➙ ${prefix}robot
  ➙ ${prefix}slow
  ➙ ${prefix}squirrel
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'religionmenukdksoejdjj': {
	anu = `
	*Religion Menu*
	
     (Islamic)
  ➙ ${prefix}iqra
  ➙ ${prefix}hadith
  ➙ ${prefix}alquran
  ➙ ${prefix}juzamma
  ➙ ${prefix}tafsirsurah`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'horoscopemenukcodk': {
	anu = `
	*Horoscope Menu*
  
  ➙ ${prefix}hockeynumber
  ➙ ${prefix}dreammeaning
  ➙ ${prefix}namemeaning
  ➙ ${prefix}fortunetelling
  ➙ ${prefix}marriageprediction
  ➙ ${prefix}wife&husband
  ➙ ${prefix}fortunetelling2
  ➙ ${prefix}matchname
  ➙ ${prefix}couplematch
  ➙ ${prefix}married
  ➙ ${prefix}businessnature
  ➙ ${prefix}sustenance
  ➙ ${prefix}profession
  ➙ ${prefix}fate
  ➙ ${prefix}potentialdisease
  ➙ ${prefix}tarot
  ➙ ${prefix}fengshui
  ➙ ${prefix}goodday
  ➙ ${prefix}badday
  ➙ ${prefix}unluckyday
  ➙ ${prefix}dragonday
  ➙ ${prefix}sustenance2
  ➙ ${prefix}luck
  ➙ ${prefix}weton
  ➙ ${prefix}character
  ➙ ${prefix}luck2
  ➙ ${prefix}fishing
  ➙ ${prefix}fertiletime
  ➙ ${prefix}zodiac
  ➙ ${prefix}shio`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'convertmenu': {
	anu = `
	*Convert Menu*
  
  ➙ ${prefix}toimage
  ➙ ${prefix}removebg
  ➙ ${prefix}sticker
  ➙ ${prefix}emojimix
  ➙ ${prefix}tovideo
  ➙ ${prefix}togif
  ➙ ${prefix}tourl
  ➙ ${prefix}ebinary
  ➙ ${prefix}dbinary
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'nocategorymenu': {
	anu = `
	*Misc Menu*
  
  ➙ ${prefix}ping
  ➙ ${prefix}owner
  ➙ ${prefix}donate
  ➙ ${prefix}menu / ${prefix}help / ${prefix}?
  ➙ ${prefix}delete
  ➙ ${prefix}chatinfo
  ➙ ${prefix}quoted
  ➙ ${prefix}listpc
  ➙ ${prefix}listgc
  ➙ ${prefix}listonline
  ➙ ${prefix}report (report bug to owner)
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'databasemenu': {
	anu = `
	*Database Menu*
  
  ➙ ${prefix}setcmd
  ➙ ${prefix}listcmd
  ➙ ${prefix}delcmd
  ➙ ${prefix}lockcmd
  ➙ ${prefix}addmsg
  ➙ ${prefix}listmsg
  ➙ ${prefix}getmsg
  ➙ ${prefix}delmsg
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'anonymouschatmenu': {
	anu = `
	*Anonymous Menu*
	
  ➙ ${prefix}start ( Start Chat )
  ➙ ${prefix}next ( Next user )
  ➙ ${prefix}stop ( stop Anonymous chat )
	`
	  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'sistemmenu': {
	anu = `
	*System Menu*
	
  ➙ ${prefix}antilink On/Off
  ➙ ${prefix}mute On/Off
  ➙ ${prefix}antiwame On/Off
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'ownermenu': {
  	anu = `
  *Owner Menu*
  
  ➙ ${prefix}chat [option]
  ➙ ${prefix}join [link]
  ➙ ${prefix}leave
  ➙ ${prefix}setbotpp
  ➙ ${prefix}block @user
  ➙ ${prefix}unblock @user
  ➙ ${prefix}bcgroup
  ➙ ${prefix}bcall
  `
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'allmenu': {
  	anu = `
  *All Menu*
  
  ꪶ🐕Group Menu🐕ꫂ
  ➙ ${prefix}grouplink
  ➙ ${prefix}ephemeral [option]
  ➙ ${prefix}setgrouppp
  ➙ ${prefix}setname [text]
  ➙ ${prefix}group [option]
  ➙ ${prefix}editinfo [option]
  ➙ ${prefix}grupinfo
  ➙ ${prefix}add @user
  ➙ ${prefix}kick @user
  ➙ ${prefix}promote @user
  ➙ ${prefix}demote @user
  
  ꪶ🐕Download Menu🐕ꫂ
  ➙ ${prefix}tiktoknowm [url]
  ➙ ${prefix}tiktokwm [url]
  ➙ ${prefix}tiktokmp3 [url]
  ➙ ${prefix}instagram [url]
  ➙ ${prefix}ig2 [url]
  ➙ ${prefix}igreels [url]
  ➙ ${prefix}igtv [url]
  ➙ ${prefix}twitter [url]
  ➙ ${prefix}twittermp3 [url]
  ➙ ${prefix}ytmp3 [url]
  ➙ ${prefix}ytmp4 [url]
  ➙ ${prefix}getmusic [query]
  ➙ ${prefix}getvideo [query
  
  ꪶ🐕Search Menu🐕ꫂ
  ➙ ${prefix}play [query]
  ➙ ${prefix}yts [query]
  ➙ ${prefix}google [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}pinterest [query]
  ➙ ${prefix}wallpaper [query]
  ➙ ${prefix}wikimedia [query]
  ➙ ${prefix}ytsearch [query]
  
  ꪶ🐕Random Menu🐕ꫂ
  ➙ ${prefix}coffee
  
  ꪶ🐕Fun Menu🐕ꫂ
  ➙ ${prefix}couple
  ➙ ${prefix}mysoulmate
  ➙ ${prefix}math [mode]  
  
  ꪶ🐕Voice Changer Menu🐕ꫂ
  ➙ ${prefix}bass
  ➙ ${prefix}blown
  ➙ ${prefix}deep
  ➙ ${prefix}earrape
  ➙ ${prefix}fast
  ➙ ${prefix}fat
  ➙ ${prefix}nightcore
  ➙ ${prefix}reverse
  ➙ ${prefix}robot
  ➙ ${prefix}slow
  ➙ ${prefix}squirrel
   
  ꪶ🐕Convert Menu🐕ꫂ
  ➙ ${prefix}toimage
  ➙ ${prefix}removebg
  ➙ ${prefix}sticker
  ➙ ${prefix}emojimix
  ➙ ${prefix}tovideo
  ➙ ${prefix}togif
  ➙ ${prefix}tourl
  ➙ ${prefix}ebinary
  ➙ ${prefix}dbinary
  
  ꪶ🐕Misc Menu🐕ꫂ
  ➙ ${prefix}ping
  ➙ ${prefix}owner
  ➙ ${prefix}donate
  ➙ ${prefix}menu / ${prefix}help / ${prefix}?
  ➙ ${prefix}delete
  ➙ ${prefix}chatinfo
  ➙ ${prefix}quoted
  ➙ ${prefix}listpc
  ➙ ${prefix}listgc
  ➙ ${prefix}listonline
  ➙ ${prefix}report (report bug to owner)
  
  ꪶ🐕Database Menu🐕ꫂ
  ➙ ${prefix}setcmd
  ➙ ${prefix}listcmd
  ➙ ${prefix}delcmd
  ➙ ${prefix}lockcmd
  ➙ ${prefix}addmsg
  ➙ ${prefix}listmsg
  ➙ ${prefix}getmsg
  ➙ ${prefix}delmsg
  
  ꪶ🐕Anonymous Menu🐕ꫂ
  ➙ ${prefix}start ( Start Chat )
  ➙ ${prefix}next ( Next user )
  ➙ ${prefix}stop ( stop Anonymous chat )
  
  ꪶ🐕System Menu🐕ꫂ
  ➙ ${prefix}antilink On/Off
  ➙ ${prefix}mute On/Off
  ➙ ${prefix}antiwame On/Off
  
  ꪶ🐕Owner Features🐕ꫂ
  ➙ ${prefix}chat [option]
  ➙ ${prefix}join [link]
  ➙ ${prefix}leave
  ➙ ${prefix}setbotpp
  ➙ ${prefix}block @user
  ➙ ${prefix}unblock @user
  ➙ ${prefix}bcgroup
  ➙ ${prefix}bcall`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')},
                            hydratedFooterText: `Cheems Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'tqtt': 
reply(`Thanks to
LORD BUDDHA
Xeon (Me)
My family
And all friends who helped assemble this sexy script !!!`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

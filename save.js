const hltb = require('howlongtobeat')
const hltbService = new hltb.HowLongToBeatService()
const fs = require('fs')

function saveToFile(game) {
  hltbService.search(game).then(result => fs.writeFileSync(`./content/${game}.json`, JSON.stringify(result)))
}

//saveToFile('nioh')


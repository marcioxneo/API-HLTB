const nioh = require('../content/nioh.json')
const id_ = []
const name_ = []
const poster_ = []


function id() {
  nioh.forEach(function(item) {
    id_.push(item.id)
  })
  return id_
}

function name() {
  nioh.forEach(function(item) {
    name_.push(item.name)
  })
  return name_
}

function poster() {
  nioh.forEach(function(item) {
    poster_.push(item.imageUrl)
  })
  return poster_
}
  
  
//console.log(['id'], id())

//export default Result()


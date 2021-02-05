import Head from 'next/head'
import styles from '../component/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import id from '../component/list'
const nioh = require('../content/nioh.json')
const cod= []
const cod_ =[]
var gameID = []
var gameImage = []
var gameNome = []
const name_ = []
const imagem = []
var i = 0
var j = 0
var total = 0
var cont = 0

function contador() {
  nioh.forEach(function(item) {
    cont = cont + 1
  })
  return cont 
}

function codigo() {
  nioh.forEach(function(item) {
    cod.push(item.id)
  })
  return cod
}

function poster() {
  nioh.forEach(function(item) {
    imagem.push(item.imageUrl)
  })
  return imagem
}

function nome() {
  nioh.forEach(function(item) {
    name_.push(item.name)
  })
  return name_
}

//cont = contador()

gameID = codigo()
gameImage = poster()
gameNome = nome()

function preencher(){
  for(i; i < gameID.length; i = i + 1){
    gameID[i] 
  }
  return gameID
}

// Inicio da Página

function Games() {
  return(
    <div>

      <Head>
        <title>Games</title>
      </Head>

      <div>
        <header className={utilStyles.header}>
          {/* <Link href="/"> */}
            <a href='/'>Logo</a>
            <nav>
              <ul className={utilStyles.menu}>
                  <li><a href='/'>Sobre</a></li>
                  <li><a href='/'>Pesquisa</a></li>
                  <li><a href='/'>Contato</a></li>
              </ul>
            </nav>
          {/* </Link> */}
        </header>
        
        {/* <section className={utilStyles.poster}>
          <img src={gameImage[0]} />
          <img src={gameImage[1]} />
          <img src={gameImage[2]} />
          <img src={gameImage[3]} />
          <img src={gameImage[4]} />
          <img src={gameImage[5]} />
          <img src={gameImage[6]} />
          <img src={gameImage[7]} />
          <img src={gameImage[8]} />
          <img src={gameImage[9]} />
        </section>
        <section className='nome'>
        <h1 className={utilStyles.h1}>{cont} - contador inicial</h1>
        <h1>Total de arquivos - {contador()}</h1>
        <h3>gameID - Label</h3>
        <h1>{gameID[2]} - Codigo</h1>
        <h1>Testeoi - Texto</h1>
        <h1>{gameNome[0]}</h1>
        </section> */}
        <h1>NIOH FLEXBOX</h1>

        <section className={utilStyles.flex}>
          <div>
            <img src={gameImage[0]} />
            <p>{gameNome[0]}</p>
          </div>
          <div>
            <img src={gameImage[1]} />
            <p>{gameNome[1]}</p>
          </div>
          <div>
            <img src={gameImage[2]} />
            <p>{gameNome[2]}</p>
          </div>
          <div>
            <img src={gameImage[3]} />
            <p>{gameNome[3]}</p>
          </div>
          <div>
            <img src={gameImage[4]} />
            <p>{gameNome[4]}</p>
          </div>
          <div>
            <img src={gameImage[5]} />
            <p>{gameNome[5]}</p>
          </div>
        </section>

        <h1>NIOH GRID 1</h1>

        <section className={utilStyles.grid1}>
          <div>
            <img src={gameImage[0]} />
            <p>{gameNome[0]}</p>
          </div>
          <div>
            <img src={gameImage[1]} />
            <p>{gameNome[1]}</p>
          </div>
          <div>
            <img src={gameImage[2]} />
            <p>{gameNome[2]}</p>
          </div>
          <div>
            <img src={gameImage[3]} />
            <p>{gameNome[3]}</p>
          </div>
          <div>
            <img src={gameImage[4]} />
            <p>{gameNome[4]}</p>
          </div>
          <div>
            <img src={gameImage[5]} />
            <p>{gameNome[5]}</p>
          </div>
          <div>
            <img src={gameImage[6]} />
            <p>{gameNome[6]}</p>
          </div>
          <div>
            <img src={gameImage[7]} />
            <p>{gameNome[7]}</p>
          </div>
          <div>
            <img src={gameImage[8]} />
            <p>{gameNome[8]}</p>
          </div>
          <div className={utilStyles.anuncio}>
            <img src={gameImage[9]} />
            <p>{gameNome[9]}</p>
          </div>
        </section>

        <h1>NIOH GRID 2</h1>

        <section className={utilStyles.grid2}>

          <div className={utilStyles.video}>
            <img src={gameImage[0]} />
            <h2>{gameNome[0]}</h2>
          </div>

          <div className={utilStyles.sidebar}>
            <div>
              <img src={gameImage[1]} />
              <p>{gameNome[1]}</p>
            </div>
            <div>
              <img src={gameImage[2]} />
              <p>{gameNome[2]}</p>
            </div>
              <div>
              <img src={gameImage[3]} />
              <p>{gameNome[3]}</p>
            </div>
            <div>
              <img src={gameImage[4]} />
              <p>{gameNome[4]}</p>
            </div>
          </div>

        </section>

        <h1>NIOH GRID 3</h1>

        <section className={utilStyles.grid3}>
          <div className={utilStyles.grid3_Item}>
            <img src={gameImage[2]} />
            <p>{gameNome[2]}</p>
          </div>
          <div className={utilStyles.grid3_Item}>
            <img src={gameImage[2]} />
            <p>{gameNome[2]}</p>
          </div>
          <div className={utilStyles.grid3_Item}>
            <img src={gameImage[2]} />
            <p>{gameNome[2]}</p>
          </div>
        </section>
      </div> 

    </div>
  )
}

export default Games
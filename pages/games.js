import Head from 'next/head'
//import styles from './layout.module.css'
//import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
const nioh = require('../content/nioh.json')

function Games() {
  return(
    <div>

      <Head>
        <title>Games</title>
      </Head>

      <div>
        <section className='poster'>
          <img src={nioh[0].imageUrl} />
        </section>
        <section className='nome'>
        <h1>{nioh[0].name}</h1>
        </section>
      </div>

    </div>
  )
}

export default Games
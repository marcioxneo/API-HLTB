import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../component/layout'
import utilStyles from '../styles/utils.module.css'
const logo = "../images/ps4.png"

export default function Home(){
  return(
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={utilStyles.header}>
          {/* <Link href="/"> */}
            <a href='/'>
              <img className={utilStyles.logo} 
              src={logo} />
            </a>
            <nav>
              {/* <Link href='/'> */}
              <ul className={utilStyles.menu}>
                  <li><a href='/'>Sobre</a></li>
                  <li><a href='/'>Pesquisa</a></li>
                  <li><a href='/'>Contato</a></li>
              </ul>
              {/* </Link> */}
            </nav>
          {/* </Link> */}
        </header>
      <section className={utilStyles.headingMd}>
        <p>
        (This is a sample website - you'll be building a site like this on{' '}
          <a className={utilStyles.link} href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          <Link href="/games">
            <a>Games</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}

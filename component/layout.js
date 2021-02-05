import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Marcio'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>

      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src='/'
            className={`${styles.headerHomImage} ${utilStyles.borderCicle}`}
            alt={name}
            />
            <h1 className={utilStyles.heading2x1}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <img src='/'
                className={`${styles.headerImage} ${utilStyles.borderCicle}`}
                alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a> Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
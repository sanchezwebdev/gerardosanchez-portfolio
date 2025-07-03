import React, { useEffect, useState } from 'react'
import styles from '../styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const isContact = router.pathname === '/contact'
  const isProjectPage = router.pathname.startsWith('/projects')

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const containerClassNames = `${styles.container} ${
    isContact && isMobile ? styles.centerOnContactMobile : ''
  }`

  return (
    <div className={containerClassNames}>
      <Link href="/" className={styles.link}>
        <Image
          src="/GS.png"
          width={1000}
          height={1000}
          alt="Logo"
          className={styles.logo}
        />
      </Link>
      <div className={styles.navItems}>
        {(isHome || isProjectPage) && (
          <Link href="/contact" className={styles.link}>
            <button className={styles.contactBtn}>Contact</button>
          </Link>
        )}
        {isContact && <div className={styles.placeholder}></div>}
      </div>
    </div>
  )
}

export default Nav

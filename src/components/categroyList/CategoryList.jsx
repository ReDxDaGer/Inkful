import React from 'react'
import styles from './categoryList.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CategoryList = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
          <Link href={"/blog?cat=style"} className={`${styles.category} ${styles.style}` }>
            <Image src="/style.png" alt='' 
            width={32} 
            height={32} 
            className={styles.image}
            />
            Style
          </Link>
          <Link href={"/blog?cat=style"} className={`${styles.category} ${styles.style}` }>
            <Image src="/fashion.png" alt='' 
            width={32} 
            height={32} 
            className={styles.image}
            />
            Fashion
          </Link>
          <Link href={"/blog?cat=style"} className={`${styles.category} ${styles.style}` }>
            <Image src="/style.png" alt='' 
            width={32} 
            height={32} 
            className={styles.image}
            />
            Travel
          </Link>
          <Link href={"/blog?cat=style"} className={`${styles.category} ${styles.style}` }>
            <Image src="/style.png" alt='' 
            width={32} 
            height={32} 
            className={styles.image}
            />
            Food
          </Link>
          <Link href={"/blog?cat=style"} className={`${styles.category} ${styles.style}` }>
            <Image src="/style.png" alt='' 
            width={32} 
            height={32} 
            className={styles.image}
            />
            Culture
          </Link>
          <Link href={"/blog?cat=style"} className={`${styles.category} ${styles.style}` }>
            <Image src="/style.png" alt='' 
            width={32} 
            height={32} 
            className={styles.image}
            />
            Coding
          </Link>
        </div>
      </div>
    </>
  )
}

export default CategoryList
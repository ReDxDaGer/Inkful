import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
const Featured = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Hey , Yash dev here!</b> Discover my stories and creative ideas
        </h1>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" className={styles.image} fill/>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            <p className={styles.postDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quae dignissimos necessitatibus, ullam, quod sequi eum magni mollitia unde adipisci illum. Similique fugit sed ipsam reprehenderit at itaque, tenetur molestias?</p>
            <button className={styles.button}> Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured
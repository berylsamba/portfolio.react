import styles from './Home.module.css'

export default function Home(){
    return(
<>
<div className={styles.profile}>
    <img src='/Assets/pic 1.jpg' alt='pic1' width="200"/>
     <h3 className={styles.h4}><span>Hello, I'm Beryl Habib.</span></h3>
     <h4 className={styles.h4}>Rookie Web Developer</h4>
</div>
        <br/> 
    <div className={styles.media}>
       <img src='/Assets/Linkedin.png' alt='logo' width="50"/> <br/> <a href='acct'>https://www.linkedin.com </a> <p>Berylsamba</p>
        <img src='/Assets/Instagram.jpg' alt='logo1' width="50"/> <br/> <a href='acct'>https://www.instagram.com </a> <p>Beryl_samba</p>
        <img src='/Assets/download.png' alt='logo2' width="50"/> <br/> <a href='acct'>https://www.gmail.com </a><p>Berylsamba9@gmail.com</p>
    </div>
       <div className='h-{100vh} flex justify-center items-center'> 
          <button className='bg-slate-00 px-6 py-2 rounded'>
            <a href='/Assets/MyCV.pdf' download >Download my resume</a>
          </button>
         </div>
         <br/>
</>
    )
}
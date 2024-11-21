import styles from './About.module.css'

export default function About(){
    return(
        <>
        <div className='info'>
                <h3 className={styles.h3}>About Me </h3>
                <img src='/Assets/pic2.jpg' alt='pic2' width="150"/>
                <h5 className={styles.h5}>Hello, I'm Habib Beryl Mimie.</h5>
                <p>I am a Sierra-Leone/Nigerian, I attended Benue State University and studied Mass Communication. I am a student of Sabilink School of Technology, learning problem Solving and Web Development to have as an additional skill and become creative in this field of study.</p>
        </div>
        <div className={styles.skills}>
            <h4 className={styles.h4}>Skills</h4>
            <div className={styles.skill}><p>HTML :</p><hr style={{width: "30%"}} /></div>
            <div className={styles.skill}><p>CSS :</p><hr style={{width: "20%"}} /></div>
            <div className={styles.skill}><p>JavaScript :</p><hr style={{width: "10%"}} /></div>
            <div className={styles.skill}><p>React JS :</p><hr style={{width: "20%"}} /></div> 
            <br/>
        </div>
        </>
    )
}
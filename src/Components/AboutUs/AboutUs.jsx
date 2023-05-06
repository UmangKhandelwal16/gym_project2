import React from 'react'
 import gym2 from './videos/gym2.mp4'
 import style from './About.module.css'


function About() {
    
   
    return (
        <>

            <div className={style.container} >
              
                <div className={style.box} >

                    <div className={style.video}>

                    <video style={{ objectFit: "cover", width: "50%", height: "auto" }} src={gym2} 
                       
                       controls autoPlay muted>

                       </video>

                    </div>

                    <div className={style.para}>
                        <h2>About us</h2>
                        <p>Joining a gym at any time of life can be a daunting experience if you’re not used to them, but this post is about to show you 20 positive benefits of joining a gym that will enhance your life extraordinarily, especially if you’re over forty years old.Let’s get into it.
                        A gymnasium, also known as a gym, is a covered location for athletics. The word is derived from the ancient Greek term "gymnasium". They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions. "Gym" is also slang for "fitness centre", which is often an area for indoor recreation. A "gym" may include or describe adjacent open air areas as well.</p>
                    
                    <br></br>
                    
<button onClick={()=>{alert('You have clicked from the About section')}}     style={{ color: 'white', backgroundColor: 'red' }}>Learn More</button>
                
</div></div>


                <div className={style.box}>

                    <div className={style.para}>
                        <h2>Why Choose us?</h2>
                        <ul>
                            <li className={style.h4}>Consultations with Experts</li>

                            <p>Your metabolism stays higher for longer after a weights session
                                Muscle regeneration. Your body uses calories to rebuild your muscles after a weights session (when your muscles ache)
                                BMR. Once you have stronger muscles, you use more calories to feed them</p>

                            <li className={style.h4}>Best Workout facilities</li>

                            <p>Without real focus and a solid routine to follow, your motivation and commitment to really getting fit and strong are going to be in jeopardy from day one.

                                Hitting the gym a few times a week, with no other distractions, and really committing to that program will not only help to keep you on track but keep you firmly motivated and committed to the cause.</p>

                        </ul>
                    </div>


                    <div className={style.video}>

                       <video style={{ objectFit: "cover", width: "50%", height: "auto" }} src={gym2} 
                       
                       controls autoPlay muted>

                       </video>

                    </div>
                </div>



            </div>
        </>
    )
}

export default About

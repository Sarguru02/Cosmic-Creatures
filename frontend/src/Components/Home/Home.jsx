import React from 'react'
import './Home.css';

const Home = () => {

    return (
        <div className='home'>
            <div className='header'>
                <h1 className='PN'>EcoCalc</h1>
                <div className='button'>
                    <button className='login'>Login</button>
                    <button className='signup'>Signup</button>
                </div>
            </div>
            <hr/><hr/>
            <div className='body'>
                <div className='calc'>
                </div>
                <div className='facts'>
                    <div>
                        <h1 className='factshead'>Fun Facts</h1>
                        <p className='factscontent'>
                        Lorem ipsum dolor sit amet. Ut labore reiciendis sit earum libero et unde quod et 
                        voluptas accusamus ex corporis adipisci et officiis illum rem repellat earum? Aut 
                        quis commodi aut velit pariatur nam laborum minus.Aut tenetur voluptas aut distinctio 
                        sit porro autem quo inventore vitae. Sed fugiat voluptate est rerum nostrum ut iure 
                        voluptatem qui eveniet nulla est voluptatibus galisum aut sint cumque ut dolorem 
                        quibusdam. A cumque pariatur est ducimus doloribus sit aliquam cumque et autem natus 
                        sed omnis necessitatibus ut galisum unde? Ea aliquam voluptas ut quia voluptatibus et
                         voluptas omnis ut saepe quos.
                        
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
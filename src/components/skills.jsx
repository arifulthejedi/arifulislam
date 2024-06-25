import "../assets/styles/skills.css"
import ScrollBook from "../assets/scroll-book.png"



function SkillsDesc(props){


    return <>
            <div className="skills-desc-container skills-container-content">
                <div>
                <p>Lorem <b>React.js</b> dolor sit amet consectetur adipisicing elit. Fugiat veritatis natus ratione expedita. Harum, quod.</p>
                <ul>
                    <b>Language & frameworks</b>
                    <li>React.js</li>
                    <li>JavaScript</li>
                </ul>
                </div>
            </div>
         </>
}




function SkillsMobile(props){  //tab and mobile screen

    return <>
    <div className="skills-container">
       <div className="skills-mobile">
         <ul>
            <li className="">Front-End Skills</li>
            <li className="">Back-End Skills</li>
            <li className="">Full-Stack Skills</li>
         </ul>
       </div>
    </div>
    </>
}


function SkillsDesktop(props){


    return<>
    <div className="skills-container">
        <div className="skills-title-container">
            <div className="skills-title">
               <div className="skills-title-btn">
                  Front-End Skill
               </div>
               <div className="skills-title-btn">
                  Back-End Skill
               </div>
               <div className="skills-title-btn">
                  Full-Stack Skill
               </div>
            </div>
        </div>
        <div className="skills-desc">
            <SkillsDesc/>
            <div className="skills-desc-container skills-container-img">
                <img src={ScrollBook} />
            </div>
        </div>
    </div>
    </>    
}



export default function Skills(props){

    return <SkillsMobile/>
}
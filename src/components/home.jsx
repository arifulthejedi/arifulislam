import "../assets/styles/home.css"
import Photo from "../assets/profile-image.png"

export default function Home(props){




return<>
    <div className="home">
        <div className="content">
            <div className="content-wrap">
            <div className="home-heading">
                <p>Ariful Islam</p>
            </div>
            <div className="self-desc">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit voluptatem minus, veniam quaerat labore cupiditate unde nesciunt eligendi fuga.</p>
            </div>
            <div className="button-group">
                    <a href="#">Download CV</a>
                    <a href="#">Visit Linkdin</a>
            </div>
            </div>
        </div>
        <div className="photo">
            <div className="photo-wrap">
               <img src={Photo} />
            </div>
        </div>
    </div>
    </>
}
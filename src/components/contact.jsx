
import "../assets/styles/contact.css"
import Swords from "../assets/swords.png"

export default function Contact(props){



    return <>
    <div className="contact-container">
        <div className="contact-form">
            <form>
                <div className="contact-input">
                    <input />
                </div>
                <div className="contact-input">
                    <input />
                </div>
                <div className="contact-input">
                    <label>Message</label>
                    <textarea />
                </div>
                <button>Submit</button>
            </form>
        </div>
        <div className="contact-sowrd">
            <img src={Swords} />
        </div>
        <div className="contact-me-box">
            here all contact info
        </div>
    </div>
    </>
}
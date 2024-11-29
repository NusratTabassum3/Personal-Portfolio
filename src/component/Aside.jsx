import { GiClawSlashes,GiMailbox, GiPhone} from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Aside() {

    
  return (
    <aside className="sidebar">
    <div className="sidebar-info">
        <figure className="avatar-box">
            <img src="/images/taba.jpg" alt="" width="100px" height="130px" />
        </figure>

        <div className="info-content">
            <h1 className="name">Nusrat Tabassum</h1>
            <p className="title">Web Developer</p>
        </div>

        <button className="info_more-btn">
            <span>Show Contacts</span>
            <GiClawSlashes />
        </button>

      
    </div>

    {/* contact info */}

    <div className="sidebar-ifo_more">
        <hr className="separator2"/>
        <ul className="contact-list">
            <li className="contact-item">
                <div className="icon-box">
                    <GiMailbox/>
                </div>

                <div className="contact-info">
                    <p className="contact-title">Email</p>
                    <a href="mailto: tabassumnusrat3@gmail.com" className="contact-link">tabassumnusrat3@gmail.com</a>
                </div>
            </li>
            <li className="contact-item">
                <div className="icon-box">
                    <GiPhone/>
                </div>

                <div className="contact-info">
                    <p className="contact-title">Phone</p>
                    <a href="tel: +001718011275" className="contact-link">+880-1718011275</a>
                </div>
            </li>
            <li className="contact-item">
                <div className="icon-box">
                <FaGithub />
                </div>

                <div className="contact-info">
                    <p className="contact-title">GitHub</p>
                    <a href="https://github.com/NusratTabassum3" className="contact-link">https://github.com/NusratTabassum3</a>
                </div>
            </li>
            <li className="contact-item">
                <div className="icon-box">
                <FaLinkedin />
                </div>

                <div className="contact-info">
                    <p className="contact-title">Linkend</p>
                    <a href="https://www.linkedin.com/in/nusrat-tabassum-43a677214/" className="contact-link">https://www.linkedin.com/in/nusrat-tabassum-43a677214/</a>
                </div>
            </li>
        </ul>
    </div>

    </aside>
  );
}

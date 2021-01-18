
import { menu, image } from '../data'

const images = image[0]

export default function Footer() {
    return <div className="footer-banner">
        <ul className="nav">
            <li className="nav-item">
                <img src={image.gslogo} alt="" style={{ width: 70, marginTop: 20 }} />
            </li>
            <li className="nav-item">
                <a className="nav-link"></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"></a>
            </li>
            {
                menu.map((x, ind) => (
                    <li className="nav-item">
                        <a key={ind} className="nav-link footer-text">{x}</a>
                    </li>
                ))
            }
            <li className="nav-item">
            </li>
            <li className="nav-item">
            </li>
            <li className="nav-item">
                <a className="nav-link footer-text">      </a>
            </li>
            {
                [images.facebook, images.linked, images.youtube, images.twitter].map((x, ind) => (
                    <li className="nav-item">
                        <img src={x} key={ind} alt={ind} className="footer-icons" />
                    </li>
                ))
            }
        </ul>
    </div>
}
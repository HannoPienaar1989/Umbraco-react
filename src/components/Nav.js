
import {menu, image} from '../data'

const images = image[0]

export default function Nav() {
    return <div>
        <div className="logoright"><img src={images.logoright} alt="" style={{ width: 125, marginBottom: -10, marginLeft: 580 }} /></div>
        <ul className="nav">
            <li className="nav-item">
                <div className="text-block">
                    <h1 className="h1-header">WELCOME</h1>
                </div>

                <div className="header-image-text-one">Your asset performance partner</div>
                <div className="header-image-text-two">from the Earth's surface down.</div>
                <img src={images.logoleft} alt="" style={{ width: 200, marginTop: 20 }} />
            </li>
            {
                menu.map((x, ind) => (
                    <li className="nav-item">
                        <a key={ind} className="nav-link">{x}</a>
                    </li>
                ))
            }
        </ul>
    </div>
}
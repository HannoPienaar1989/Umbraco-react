

import { image } from '../data'

const images = image[0]

export default function Nav() {
    return <div className="row">
        <div className="column">
            <div className="top-left">SERVICES</div>
            <div className="top-left-middle">Calibre agrees to sell</div>
            <div className="top-left-middle-one"><div className="text-yellow">G&S Engineering to DRA</div></div>
            <div className="top-left-button"><button type="button" className="btn btn-warning centre">VIEW SERVICES</button></div>
            <img src={images.services} className="images" />
        </div>
        <div className="column">
            <div className="top-left-two">ABOUT US</div>
            <div className="top-left-two-middle"><div className="text-green">Get to know us</div></div>
            <div className="top-left-middle-two">a little better</div>
            <div className="top-left-two-button"><button type="button" className="btn btn-success centre">VIEW ABOUT US</button></div>
            <img src={images.aboutus} className="images" />
        </div>
        <div className="column">
            <div className="top-left-three">CAREERS</div>
            <div className="top-left-three-middle">Become one of the</div>
            <div className="top-left-middle-three"><div className="text-blue">team, join us</div></div>
            <div className="top-left-three-button"><button type="button" className="btn btn-primary centre button">VIEW CAREERS</button></div>
            <img src={images.careers} className="images" />
        </div>
    </div>
}



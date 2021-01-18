
import { image } from '../data'

const images = image[0]

export default function Market() {
    return <div className="content-padding">
        <div className="ourmarket">
            <br></br>
            <h2>OUR MARKETS</h2>
            <br></br>
            <br></br>
            <div className="row">
                <div className="column_ourmarkets">
                </div>
                <div className="column_ourmarkets">
                    <img src={images.metalsminerals} className="images_our_markets" />
                    <p>Metals & Minerals</p>
                </div>
                <div className="column_ourmarkets">
                    <img src={images.infrastructure} className="images_our_markets" />
                    <p>Infrastructure</p>
                </div>
                <div className="column_ourmarkets">
                    <img src={images.industrial} className="images_our_markets" />
                    <p>Industrial</p>
                </div>
                <div className="column_ourmarkets">
                    <img src={images.energy} className="images_our_markets" />
                    <p>Energy</p>
                </div>
                <div className="column_ourmarkets">
                    <img src={images.water} className="images_our_markets" />
                    <p>Water</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <button type="button" className="btn btn-primary centre button">VIEW ALL MARKETS</button>
            <br></br>
            <br></br>
        </div>
    </div>
}

import { mineralData } from '../data'


export default function Market() {
    return <div className="content-padding">
        <div className="ourmarket">
            <h2 style={{padding:'30px'}}>OUR MARKETS</h2>
            <div style={{padding:'30px'}} className="row">
                <div className="column_ourmarkets"></div>
                {
                    mineralData.map((x, ind) => (
                        <div key={ind} className="column_ourmarkets">
                            <img src={x.image} className="images_our_markets" />
                            <p>{x.title}</p>
                        </div>
                    ))
                }
            </div>
            <div style={{padding:'30px',}}>
               <button type="button"  className="btn btn-primary centre button">VIEW ALL MARKETS</button>  
            </div>
            
        </div>
    </div>
}
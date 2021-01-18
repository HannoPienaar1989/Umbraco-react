
import { image } from '../data'

const images = image[0]

export default function Contact() {
    return <div className="content-padding">
        <div className="bottominput centre">
            <h2>GET IN TOUCH</h2>
            <br></br>
            <div className="row">
                <div className="columntextfields">
                    <img src={images.bottomimage} className="imagesbottom" />
                </div>
                <div className="columntextfields">
                    <div className="form-group">
                        <div className="row">
                            <div className="columntextfields">
                                <h6>Complete the form to get in touch</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="columntextfields">
                                <label htmlFor="Name">Name:</label>
                                <input type="text" id="Name" className="form-control form-group-input" placeholder="Name" aria-label="Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="columntextfields">
                                <label htmlFor="EmailAddress">Email address:</label>
                                <input type="text" id="EmailAddress" className="form-control form-group-input" placeholder="Email Address" aria-label="Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="columntextfields">
                                <label htmlFor="PhoneNumber">Phone Number:</label>
                                <input type="text" id="PhoneNumber" className="form-control form-group-input" placeholder="Phone Number" aria-label="Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="columntextfields">
                                <label htmlFor="StartDate" className="form-group-right">Start Date:</label>
                                <input type="date" id="StartDate" placeholder=" " className="form-control form-group-right" />
                            </div>
                            <div className="columntextfields">
                                <label htmlFor="EndDate" className="form-group-right">End Date:</label>
                                <input type="date" id="EndDate" placeholder=" " className="form-control form-group-right" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="columntextfields"></div>
                            <div className="columntextfields">
                                <button type="button" className="btn btn-primary buttonSubmit">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
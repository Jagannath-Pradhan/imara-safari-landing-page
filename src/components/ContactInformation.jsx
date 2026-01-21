import { FaLock } from "react-icons/fa";

const ContactInformation = () => {
    return (
        <section className="contact-information-section py-5 bg-theme-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="text-capitalize">
                            5. Contact Information
                        </h1>
                        <p className="text-secondary fs-5">
                            We will send you offers via email. Your contact information will remain confidential and will only be used for <span className="fw-bold">safari offers in Tanzania.</span>
                        </p>
                    </div>
                    <div className="col-12 col-md-6 mx-auto">
                        <form className="d-flex flex-column">
                            <div className="mb-3">
                                <label htmlFor="exampleInputFullname" className="form-label fw-bold">
                                    Full Name (Please enter your first and last name)
                                </label>
                                <input
                                    type="text"
                                    className="form-control py-3"
                                    id="exampleInputFullname"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                                    Email (We will send our offers to the email address you provide)
                                </label>
                                <input
                                    type="email"
                                    className="form-control py-3"
                                    id="exampleInputEmail1"
                                    placeholder="Email ID"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label fw-bold">
                                    Phone Number (Please include the international country code) (optional)
                                </label>

                                <div className="d-flex align-items-center gap-3">
                                    <select className="form-select py-3">
                                        <option value="Country Code" disabled>Country Code</option>
                                        <option value="+1">+1 (USA)</option>
                                        <option value="+44">+44 (UK)</option>
                                        <option value="+91">+91 (India)</option>
                                        <option value="+255">+255 (Tanzania)</option>
                                        <option value="+61">+61 (Australia)</option>
                                        <option value="+971">+971 (UAE)</option>
                                    </select>

                                    <input
                                        type="tel"
                                        className="form-control py-3"
                                        id="exampleInputPhone"
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>

                            <div className="security-message">
                                <FaLock className="mb-3" size={22} />
                                <p>Your mobile number is safe with us and will only be used for communication related to your booking inquiry.</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPeople" className="form-label fw-bold">
                                    How many people will be participating in the trip?
                                </label>
                                <input
                                    type="number"
                                    className="form-control py-3"
                                    id="exampleInputPeople"
                                    placeholder="Number of People"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleTextarea" className="form-label fw-bold">
                                    Additional Information (optional)
                                </label>
                                <textarea id="exampleTextarea" className="form-control" placeholder="Any additional details about your tour will help us suggest the most suitable parks, itineraries, accommodations, and more for your trip." style={{ height: 100 }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-theme text-uppercase p-3 fw-bold">
                                Send me an offer
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactInformation
import { useState } from "react";
import { FaLock } from "react-icons/fa";

const ContactInformation = ({ onSubmit, submitError }) => {
    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        countryCode: "",
        phone: "",
        people: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(contact); //  SEND DATA TO PARENT
    };

    return (
        <section className="contact-information-section py-lg-5 py-4 bg-theme-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-lg-4">
                        <h3 className="text-capitalize">
                            5. Contact Information
                        </h3>
                        <p>
                            We will send you offers via email. Your contact information will remain confidential and will only be used for <span className="fw-bold">safari offers in Tanzania.</span>
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 mx-auto">
                        <form className="d-flex flex-column px-1" onSubmit={handleSubmit}>
                            <div className="mb-2 mb-lg-3">
                                <label htmlFor="exampleInputFullname" className="form-label fw-bold">
                                    Full Name (Please enter your first and last name)
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={contact.fullName}
                                    onChange={handleChange}
                                    className="form-control"
                                    id="exampleInputFullname"
                                    placeholder="Full Name"
                                    
                                />
                            </div>
                            <div className="mb-2 mb-lg-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                                    Email (We will send our offers to the email address you provide)
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={contact.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Email ID"
                                    
                                />
                            </div>
                            <div className="mb-1 mb-lg-3">
                                <label htmlFor="exampleInputPhone" className="form-label fw-bold">
                                    Phone Number (Please include the international country code)
                                </label>

                                <div className="d-flex align-items-center gap-md-3 gap-1">
                                    <select className="form-select" name="countryCode" value={contact.countryCode}
                                        onChange={handleChange}>
                                        <option value="" disabled>Country Code</option>
                                        <option value="+1">+1 (USA)</option>
                                        <option value="+44">+44 (UK)</option>
                                        <option value="+91">+91 (India)</option>
                                        <option value="+255">+255 (Tanzania)</option>
                                        <option value="+61">+61 (Australia)</option>
                                        <option value="+971">+971 (UAE)</option>
                                    </select>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={contact.phone}
                                        onChange={handleChange}
                                        className="form-control"
                                        id="exampleInputPhone"
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>

                            <div className="security-message">
                                <FaLock className="mb-3" size={22} />
                                <p>Your mobile number is safe with us and will only be used for communication related to your booking inquiry.</p>
                            </div>
                            <div className="mb-2 mb-lg-3">
                                <label htmlFor="exampleInputPeople" className="form-label fw-bold">
                                    How many people will be participating in the trip?
                                </label>
                                <input
                                    type="number"
                                    name="people"
                                    value={contact.people}
                                    onChange={handleChange}
                                    min={1}
                                    className="form-control"
                                    id="exampleInputPeople"
                                    placeholder="Number of People"
                                />
                            </div>
                            <div className="mb-2 mb-lg-3">
                                <label htmlFor="exampleTextarea" className="form-label fw-bold">
                                    Additional Information (optional)
                                </label>
                                <textarea id="exampleTextarea" name="message" value={contact.message}
                                    onChange={handleChange} className="form-control" placeholder="Any additional details about your tour will help us suggest the most suitable parks, itineraries, accommodations, and more for your trip." style={{ height: 100 }}></textarea>
                            </div>

                            {submitError && (
                                <div className="alert alert-danger mt-4 text-center fw-bold">
                                    {submitError}
                                </div>
                            )}

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
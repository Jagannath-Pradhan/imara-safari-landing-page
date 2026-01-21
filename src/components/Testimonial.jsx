import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            rating: 5,
            title: "What an Experience!",
            review: "We went on our 5-day/4-night safari with Fahamu Safaris in January 2023, starting in Arusha and then visiting Tarangire (1 day), Lake Manyara (1 day), Serengeti (2 days), and the Ngorongoro Crater. We had an absolutely wonderful experience.",
            name: "Roman K.",
            date: "January 2023",
            image: "./images/testimonials/testimonial-1.jpg"
        },
        {
            id: 2,
            rating: 5,
            title: "One of the Best Experiences of My Life! Memories Forever!",
            review: "My family and I went on a four-day safari with Fahamu Safari and had the best time of our lives. We truly made memories for a lifetime. This was thanks to having the best guide and driver we could have ever wished for.",
            name: "Melissa Y.",
            date: "January 2023",
            image: "./images/testimonials/testimonial-2.jpg"
        },
        {
            id: 3,
            rating: 5,
            title: "Amazing Mikumi!",
            review: "It was such an incredible adventure! We traveled with Mister Ole, who knows everything about the animals, birds, insects, their behaviors, and the entire flora and fauna. We spent 3 days in Mikumi National Park in Tanzania.",
            name: "Karolina S.",
            date: "November 2022",
            image: "./images/testimonials/testimonial-3.jpg"
        }
    ];

    return (
        <section className="testimonial-section bg-theme-light">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="testimonial-swiper"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="testimonial-card text-center">
                                        <div className="star-rating mb-4">
                                            {[...Array(testimonial.rating)].map((_, index) => (
                                                <span key={index} className="star">★</span>
                                            ))}
                                        </div>

                                        <h2 className="testimonial-title mb-4">
                                            "{testimonial.title}"
                                        </h2>

                                        <p className="testimonial-review mb-5">
                                            {testimonial.review}
                                        </p>

                                        <div className="author-info d-flex align-items-center">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="author-image rounded-circle"
                                            />
                                            <div className="author-details text-start ms-3">
                                                <h4 className="author-name mb-1">{testimonial.name}</h4>
                                                <p className="author-date mb-0">{testimonial.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
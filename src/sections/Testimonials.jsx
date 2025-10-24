import { useState } from "react";
import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import Button2 from "../components/Button2";

const Testimonials = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Tutored Peers Feedback"
                    sub="What People Say About Me"
                />

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
                    {visibleTestimonials.map((testimonial, index) => (
                        <GlowCard card={testimonial} key={testimonial.name} index={index}>
                            <div className="flex items-center gap-3">
                                <div>
                                    <img src={testimonial.imgPath} alt="" />
                                </div>
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-white-50">{testimonial.mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>

                {!showAll && testimonials.length > 3 && (
                    <div className="flex justify-center mt-10">
                        <Button2
                            text="Show More Testimonials"
                            onClick={() => setShowAll(true)}
                            className="md:w-80 md:h-16 w-60 h-12"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
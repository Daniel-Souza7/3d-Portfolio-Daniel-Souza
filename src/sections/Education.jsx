import { eduCards } from "../constants";
import TitleHeader from "../components/TitleHeader.jsx";

const Education = () => (
    <section
        id="education"
        className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
        <div className="w-full h-full md:px-20 px-5">
            <div className="text-center mb-20">
                <TitleHeader
                    title="Educational Background"
                    sub="My Academic Journey"/>
            </div>
            <p className="text-white-50 text-xl text-center mb-8">Click on the cards to view the full Course Study Programme</p>
            <div className="mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 w-full max-w-[1400px]">
                {eduCards.map((card, index) => (
                    <a
                        key={card.degree}
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        {/* STATIC CARD - No GlowCard2 */}
                        <div className="card-border rounded-xl p-6 hover:border-white-50 transition-colors duration-300">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-white text-2xl font-semibold">{card.degree}</h3>
                                        <p className="text-white-50 text-lg mt-2">{card.institution}</p>
                                    </div>
                                    {card.imgPath && (
                                        <div className="size-20 flex items-center justify-center flex-shrink-0">
                                            <img
                                                src={card.imgPath}
                                                alt={card.institution}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                </div>
                                <p className="text-white text-base"> {card.average}</p>
                                {card.distinction && (
                                    <p className="text-white-50 text-base"> {card.distinction}</p>
                                )}
                                <div className="mt-1">
                                    <p className="text-[#839CB5] italic mb-2">A's (top 10% grades):</p>
                                    <p className="text-white-50 text-base">{card.grades}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
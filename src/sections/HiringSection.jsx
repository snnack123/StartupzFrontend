import { hiringSection } from "../utils/constants";
import Hiring1 from "../assets/Hiring1.png";
import Hiring2 from "../assets/Hiring2.png";

export default function HiringSection() {
    return (
        <section className="bg-primary-gray relative py-20 lg:py-[11rem]">
            <div className="flex justify-between">
                <img src={Hiring1} alt="hiring1" className="h-1/2 max-w-1/4 block md:hidden" />
                <img src={Hiring2} alt="hiring2" className="h-1/2 max-w-1/4 block md:hidden" />
            </div>
            <div className="px-4 flex flex-col gap-4 w-full max-w-full md:max-w-1/2 mx-auto">
                <h2 className="text-center">{hiringSection?.text}</h2>
                <p className="description text-center w-full mx-auto tracking-tight">{hiringSection?.description}</p>
                <div className="flex justify-center">
                    <a href="https://www.startupz.site/jobs" className="headerButton2 !text-white !bg-light-blue hover:!bg-dark-blue">
                        {hiringSection?.buttonText}
                    </a>
                </div>
                <img src={Hiring1} alt="hiring1" className="absolute left-[0] top-2/4 -translate-y-1/2 h-1/2 max-w-1/4 hidden md:block" />
                <img src={Hiring2} alt="hiring2" className="absolute right-[0] top-2/4 -translate-y-1/2 h-1/2 max-w-1/4 hidden md:block" />
            </div>
        </section>
    )
}
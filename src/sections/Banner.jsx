/* eslint-disable react/prop-types */
import likeRight from '../assets/likeRight.svg';
import likeLeft from '../assets/likeLeft.svg';

export default function Banner({data}) {
    return (
        <section className={`${data?.styles} flex justify-center text-center items-center gap-4 lg:gap-[2.125rem] relative px-6 mx-auto`}>
            <div className='flex flex-row items-end gap-3 justify-center lg:gap-10'>
                <img src={likeRight} alt="like right" className='w-12 xl:w-auto h-auto'/>
                <p className='description lg:!text-8 xl:!text-[2.5rem] lg:!leading-[3.125rem] w-auto !font-bold'>{data?.text}</p>
                <img src={likeLeft} alt="like left" className='w-12 xl:w-auto h-auto'/>
            </div>
        </section>
    )
}
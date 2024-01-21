/* eslint-disable react/prop-types */

import Banner from "./Banner";

export default function WorksSection({ data, banner }) {
  return (
    <section id='works' className="w-full py-20 lg:py-[11rem] lg:container mx-auto px-4">
      <h2 className="pb-10 text-center">{data?.text}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full pb-[2rem]">
        {data?.list.map((el) => (
          <div key={el.id} className="shadow-works rounded-3xl hover:bg-form duration-300 works-container flex flex-col gap-4 justify-between p-10">
            <div className="flex flex-col gap-4 items-center">
              <p className={`${el.color} text-[2rem] leading-[1.875rem] text-center`}>{el.name}</p>
              <div className="text-navbar text-center px-[5.313rem] text-[1rem] leading-[1.25rem]">{el.description}</div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img src={el.image} alt='company image' className="mx-auto width-auto height-[15.25rem] bounce" />
              <a href='#' className="w-full flex justify-center cursor-pointer">
                <div className="headerButton2 w-auto hover:bg-light-blue hover:text-white duration-300">More</div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Banner data={banner} />
    </section>
  );
}

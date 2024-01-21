/* eslint-disable react/prop-types */

export default function ListSection({data}) {
  return (
    <section className="bg-primary-gray relative py-20 lg:py-[11rem]">
      <div className="lg:container px-4 mx-auto flex flex-col gap-12 md:gap-20">
        <div className="flex justify-between items-center gap-8">
          <div>
            <h2>{data?.text}</h2>
            {data?.descriptions?.map((el, index) => (
              <p key={el.id} className={`description ${index === 0 && 'pt-8'}`}>
                {el.description}
              </p>
            ))}
          </div>
          <img src={data?.image} alt="question mark"/>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-[5.938rem] w-full">
          {data?.list?.map((el) => (
            <div key={el.id}>
              <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
                <div className="descriptionNumbers">{el.id < 10 ? `0${el.id}` : el.id}{el?.idTitle && `. ${el.idTitle}`}</div>
                <hr className="mt-[1.188rem] mb-[1.625rem] border-t max-w-[3.125rem] w-full border-navbar hidden md:block" />
                <div className="flex flex-col w-full">
                  <h3 className="!font-normal">{el.description}</h3>
                </div>
              </div>
              <hr className="mt-4 w-full border-navbar block md:hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

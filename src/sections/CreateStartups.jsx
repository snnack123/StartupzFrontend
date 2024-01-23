import startups from "../assets/startups.png";

export default function CreateStartups() {
  return (
    <section className="bg-white flex flex-col justify-between relative lg:h-[calc(100vh-64px)]">
      <div className="lg:container w-full py-12 px-4 mx-auto">
        <div className="lg:hidden my-3">
          <div className="sm:max-w-2/3">
            <img src={startups} alt="startups" />
          </div>
        </div>
        <div className="mt-10 lg:mt-30vh lg:max-w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <div className="lg:max-w-[32rem] w-full">
              <h1>We Create Startups.</h1>
            </div>
            <p className="description">
              We are startup studio that develops and launches new companies.
            </p>
            
              <a href="#works" className="headerButton2 !text-white !bg-light-blue hover:!bg-dark-blue duration-300 cursor-pointer">
                <span>See our works</span>
              </a>
            
          </div>
        </div>
        <div className={`hidden lg:block image-container`}>
          <img
            src={startups}
            alt="startups"
            className="absolute bottom-0 right-0 h-auto w-1/2 object-contain slide-in"
          />
        </div>
      </div>
    </section>
  );
}

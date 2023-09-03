
import Image from "next/image";
import Blink from "../(components)/Typewriter/page";
import Typewriter from "../(components)/Typewriter/page";


export default function about() {
  return (
    <>
      <div className=" bg-gradient-to-r from-blue-800 to-blue-600">
        <section className=" mb-4">
          <div className="max-w-7xl mx-auto">
            <div className=" grid ">
              <h1 className="text-4xl font-semibold text-center text-slate-50 leading-[70px] md:mt-28   ">
                ABOUT OUR  MISSION
              </h1>
              {/* <Typewriter/> */}
              <h1 className="text-xl my-3  px-44 mx-auto text-slate-50">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ea eligendi nulla perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ea eligendi nulla perferendis
              </h1>
            </div>
          </div>
        </section>
        <div className=" text-center items-center bg-gradient-to-r from-blue-800 to-blue-600">
          <h1 className="text-4xl font-semibold text-slate-50 leading-[70px]">
            Our Story
          </h1>
          <div className=" max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 mt-16 mb-28 py-4">
          <Image width={500} className='mx-auto hover:w-[550px] ease-in eas duration-300' src='/bnda design .jpg' height={500} alt="" />
            <p className=" flex text-lg text-slate-50 text-center justify-center items-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod eos
              suscipit impedit adipisci dolorem possimus enim, nemo architecto
              cum error laudantium provident repudiandae saepe aliquid corrupti
              aspernatur? Aliquid, quaerat beatae! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Deserunt voluptate tempore cum
              voluptates modi pariatur cumque quia maxime eius! Iusto incidunt
              hic beatae eius iure minima odio eligendi adipisci dolores.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
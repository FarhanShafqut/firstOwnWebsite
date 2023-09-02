import Button from "../(components)/Button/page";


export default function about() {
  return (
    <>
      <div>
        <section className="bg-gradient-to-r from-blue-800 to-blue-600">
          <div className="max-w-[1220px] mx-auto">
            <div className="max-w-2xl grid ">
              <h1 className="text-6xl font-semibold text-slate-50 leading-[70px] md:mt-28   ">
                ABOUT OUR <br /> MISSION
              </h1>
              <h1 className="text-sm my-3  text-slate-50">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
                Ea eligendi nulla perferendis
              </h1>
              <span className=" mt-3  mb-28">
                <Button txt={'Learn more'}/>
                              </span>
            </div>
          </div>
        </section>
        <div className=" text-center items-center bg-gradient-to-r from-blue-800 to-blue-600">
          <h1 className="text-6xl font-semibold text-slate-50 leading-[70px]">
            our
            <br /> story
          </h1>
          <span className=" flex mt-16 mb-28">
            <img src="/bnda design .jpg" alt="" />
            <p className=" text-lg text-slate-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod eos
              suscipit impedit adipisci dolorem possimus enim, nemo architecto
              cum error laudantium provident repudiandae saepe aliquid corrupti
              aspernatur? Aliquid, quaerat beatae! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Deserunt voluptate tempore cum
              voluptates modi pariatur cumque quia maxime eius! Iusto incidunt
              hic beatae eius iure minima odio eligendi adipisci dolores.
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
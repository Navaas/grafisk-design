function Card() {
  return (
    <div className="flex justify-center items-center py-16 px-2 bg-[#FAF9F9]">
      <div className="flex w-full xl:w-3/4 flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3">
          <div className="bg-[#EFEFEF] p-4 rounded-lg shadow-md hover:bg-white transition-transform duration-200 hover:scale-105">
            <div className="w-full h-72 sm:h-80 md:h-60 overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg"
                alt="bild"
                className="w-full h-full object-cover "
              />
            </div>
            <h2 className="text-xl font-semibold my-2">Restaurang</h2>
            <p className="mb-2 text-font">
              Efter en dag fylld av avslappning och behandlingar, kan du njuta
              av en kulinarisk upplevelse i vår restaurang. Lotus Oas restaurang
              erbjuder en meny skapad med fokus på hälsa och välbefinnande, med
              ett brett urval av rätter tillagade av lokala och ekologiska
              råvaror.
            </p>
            <button className="bg-white border uppercase border-black border-solid p-2 rounded-sm text-black w-1/4 hover:bg-black hover:text-white text-font">
              Läs mer
            </button>
          </div>
          <div className="bg-[#EFEFEF] p-4 rounded-lg shadow-md hover:bg-white transition-transform duration-200 hover:scale-105">
            <div className="w-full h-72 sm:h-80 md:h-60 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1683133713237-40ab64136702?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="bild"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold my-2">Lotus Spa</h2>
            <p className="mb-2 text-font">
              På Lotus Oas tar vi avslappning på största allvar. Vårt spa är
              designat för att vara en plats av fullständig ro, där mjuka toner
              och harmoniska dofter omsluter dig från första stund. Här kan du
              njuta av vårt varma bubbelbad, simma i vår uppvärmda inomhuspool
              eller ta det lugnt i våra bastur.
            </p>
            <button className="bg-white border uppercase border-black border-solid p-2 rounded-sm text-black w-1/4 hover:bg-black hover:text-white text-font">
              Läs mer
            </button>
          </div>
          <div className="bg-[#EFEFEF] p-4 rounded-lg shadow-md hover:bg-white transition-transform duration-200 hover:scale-105">
            <div className="w-full h-72 sm:h-80 md:h-60 overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2023/10/28/11/21/ai-generated-8347190_1280.png"
                alt="bild"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold my-2">Behandlingar</h2>
            <p className="mb-2 text-font">
              Vi erbjuder ett brett urval av behandlingar skräddarsydda för att
              passa dina individuella behov. Vårt team av professionella
              terapeuter är specialiserade på en rad olika tekniker, från
              klassisk svensk massage och djupvävnadsmassage till aromaterapi
              och ansiktsbehandlingar.
            </p>
            <button className="bg-white border uppercase border-black border-solid p-2 rounded-sm text-black w-1/4 hover:bg-black hover:text-white text-font">
              Läs mer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

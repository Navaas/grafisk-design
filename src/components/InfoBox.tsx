function InfoBox() {
  return (
    <div className="flex justify-center items-center p-2 mt-9 bg-[#FAF9F9]">
      <div className="flex w-full xl:w-3/4 bg-white justify-center p-2 flex-col xl:flex-row shadow-md">
        <div className="flex flex-col justify-center xl:w-1/2 p-2">
          <h3 className="text-font font-bold text-xl">
            En fridfull oas för kropp och själ.
          </h3>
          <br />
          <p className="text-font">
            Välkommen till
            <span className="font-bold text-[#798E6F]"> Lotus Oas</span>, en
            lyxig och fridfull tillflyktsort där vi kombinerar traditionella
            spa-upplevelser med modern wellness. Beläget i hjärtat av natursköna
            omgivningar erbjuder vi en oas av lugn och avkoppling, perfekt för
            dig som vill fly vardagens stress och hitta en plats för
            återhämtning och förnyelse.
          </p>
          <br />
          <p className="text-font">
            Hos Lotus Oas strävar vi efter att ge dig en holistisk upplevelse
            där varje detalj är utformad för att främja ditt välbefinnande.
            Oavsett om du kommer för en snabb behandling eller en hel dags
            avkoppling, är vi här för att säkerställa att din tid hos oss är
            minnesvärd och förnyande.
            <br />
            <br />- Vi ser fram emot att ta hand om dig!
          </p>
        </div>

        <div className="flex justify-center xl:w-1/2 p-2 hover:opacity-70">
          <img
            className="h-auto object-cover w-full"
            src="https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bild"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoBox;

function NewLetterBox() {
  return (
    <>
      <div className="flex justify-center items-center p-2 mt-9">
        <div className="flex w-full xl:w-3/4 items-center shadow-md bg-[#798E6F] text-black justify-center p-4 flex-col md:flex-col xl:flex-row gap-6">
          <div className="w-full flex flex-col gap-2 text-white text-center">
            <h1 className="text-xl md:text-2xl font-bold text-font">
              Prenumerera på vårt nyhetsbrev och
            </h1>
            <h1 className="text-xl md:text-2xl font-bold mb-6 text-font">
              ta del av nyheter & erbjudanden!
            </h1>
            <p className="mb-8">
              Var först med att få det senaste från Lotos Spa. Signa upp dig på
              vårt nyhetsbrev så får du exklusiva erbjudanden och nyheter före
              alla andra.
            </p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Skriv din mejladress.."
                className="w-full md:w-1/2 border-2 border-gray-300 p-2 rounded-lg"
              />
              <button className="bg-[#FAA916] w-full md:w-1/2 text-white py-2 px-4 m-2 uppercase drop-shadow-xl hover:opacity-80 text-font transform hover:scale-105 transition-transform duration-100">
                Skicka
              </button>
            </div>
          </div>

          <div className="flex gap-4 w-full justify-center hover:opacity-70">
            <img
              src="https://images.unsplash.com/photo-1608389168343-ba8aa0cb3a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="bild"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewLetterBox;

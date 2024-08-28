function NewLetterBox() {
  return (
    <>
      <div className="flex justify-center items-center p-2 mt-9 ">
        <div className="flex w-full xl:w-3/4 items-center shadow-md bg-[#798E6F] text-black justify-center p-4 flex-col md:flex-col xl:flex-row gap-6 rounded-md">
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-xl md:text-2xl uppercase font-bold">
              Prenumerera på vårt nyhetsbrev och
            </h1>
            <h1 className="text-xl md:text-2xl uppercase font-bold">
              ta del av nyheter & erbjudanden
            </h1>
            <input
              type="text"
              placeholder="Skriv din mejladress.."
              className="w-full border-2 border-gray-300 p-2 rounded-lg"
            />
            <button className="bg-[#FAA916] border uppercase border-black border-solid p-2 rounded-sm text-black w-1/4 hover:bg-black hover:text-white transform hover:scale-105 transition-transform duration-100">
              Skicka
            </button>
          </div>

          <div className="flex gap-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="bild"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewLetterBox;

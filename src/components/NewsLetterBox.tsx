function NewLetterBox() {
  return (
    <>
      <div className="flex justify-center items-center p-2 mt-9 ">
        <div className="flex w-full xl:w-3/4 items-center shadow-md bg-[#798E6F] text-black justify-center p-4 flex-col md:flex-col xl:flex-row gap-6 rounded-md">
          <div className="w-full flex flex-col gap-2 text-white">
            <h1 className="text-xl md:text-2xl uppercase font-bold">
              Prenumerera på vårt nyhetsbrev och
            </h1>
            <h1 className="text-xl md:text-2xl uppercase font-bold mb-6">
              ta del av nyheter & erbjudanden
            </h1>
            <input
              type="text"
              placeholder="Skriv din mejladress.."
              className="w-full border-2 border-gray-300 p-2 rounded-lg"
            />
            <button className="bg-[#FAA916] text-white py-2 px-2 xl:w-1/3 m-2 uppercase drop-shadow-xl hover:opacity-80 transform hover:scale-110">
              Skicka
            </button>
          </div>

          <div className="flex gap-4 w-full hover:opacity-70">
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

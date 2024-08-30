function PhotoBox() {
  return (
    <div
      className="w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] bg-cover bg-center flex justify-center items-center flex-col"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661277693458-6c65cb09aa41?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="bg-white bg-opacity-40 w-2/3 xl:w-1/2 flex flex-col justify-center items-center p-6 fade-in">
        <h1 className="text-3xl xl:text-5xl text-black uppercase font-bold">
          Lotus oas
        </h1>
        <h2 className="text-black text-md md:text-xl mb-4 uppercase font-bold">
          En harmonisk tillflykt för Kropp och Själ
        </h2>
        <button className="bg-[#FAA916] text-white py-4 px-4 xl:w-1/3 m-2 uppercase drop-shadow-xl hover:opacity-80 transform hover:scale-110 transition-transform duration-100">
          Boka nu
        </button>
      </div>
    </div>
  );
}

export default PhotoBox;

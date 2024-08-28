function Card() {
  return (
    <div className="flex justify-center items-center py-16 px-2 bg-[#FAF9F9]">
      <div className="flex w-full xl:w-3/4 flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-full h-72 sm:h-80 md:h-60 overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg"
                alt="bild"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Box 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
              massa magna. Aenean id tortor nec odio varius tincidunt.
            </p>
            <button className="bg-[#798E6F] p-2 rounded-md text-white my-4">
              Läs mer
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-full h-72 sm:h-80 md:h-60 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1683133713237-40ab64136702?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="bild"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Box 2</h2>
            <p>
              Curabitur sit amet pharetra ipsum. Maecenas nec nisl a sapien
              suscipit gravida sit amet sed nisl. Vestibulum imperdiet tincidunt
              tincidunt.
            </p>
            <button className="bg-[#798E6F] p-2 rounded-md text-white my-4">
              Läs mer
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-full h-72 sm:h-80 md:h-60 overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2023/10/28/11/21/ai-generated-8347190_1280.png"
                alt="bild"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Box 3</h2>
            <p>
              In hac habitasse platea dictumst. Nam vestibulum quam nec turpis
              malesuada, ut feugiat velit tincidunt. Nulla facilisi.
            </p>
            <button className="bg-[#798E6F] p-2 rounded-md text-white my-4">
              Läs mer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

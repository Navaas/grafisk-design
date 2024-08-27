function InfoBox() {
  return (
    <div className="flex justify-center items-center p-2 mt-9">
      <div className="flex w-full xl:w-3/4 bg-white justify-center p-4 flex-col shadow-md">
        <h1 className="text-3xl">Lotus Oas</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
          massa magna. Aenean id tortor nec odio varius tincidunt. Donec
          tincidunt cursus nunc, at egestas turpis commodo non. Ut auctor urna a
          ligula feugiat, id aliquam nulla aliquam. Nullam nec felis vestibulum,
          lobortis eros nec, condimentum dui. Cras ac sapien vehicula, aliquam
          risus eu, vulputate urna. Duis ut viverra erat. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
        <p>
          Curabitur sit amet pharetra ipsum. Maecenas nec nisl a sapien suscipit
          gravida sit amet sed nisl. Vestibulum imperdiet tincidunt tincidunt.
          Suspendisse potenti. Morbi luctus nisi sit amet nunc posuere
          ultricies. Fusce ac volutpat libero. Sed volutpat metus sit amet
          libero ultricies, nec venenatis lacus hendrerit. Integer quis dui
          libero. Vestibulum ac ligula vitae ante cursus vehicula.
        </p>
        <div className="flex py-6 gap-4">
          <button className="bg-[#798E6F] p-2 rounded-md text-white">
            Boka spa
          </button>
          <button className="bg-[#798E6F] p-2 rounded-md text-white">
            Erbjudande
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;

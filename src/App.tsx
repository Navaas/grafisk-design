import Card from "./components/Card";
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import NewLetterBox from "./components/NewsLetterBox";
import PhotoBox from "./components/PhotoBox";

function App() {
  return (
    <div className="bg-[#FAF9F9]">
      <Header />
      <PhotoBox />
      {/* <div className="w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1661277693458-6c65cb09aa41?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="bild"
          className="w-full h-full object-cover"
        />
      </div> */}
      <InfoBox />
      <Card />
      <NewLetterBox />
    </div>
  );
}

export default App;

import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Features from "../../components/features/Features";
import Lists from "../../components/lists/Lists";

function Home() {
  return (
    <div className="bg-[var(--main-color)] overflow-hidden">
      <Navbar />
      <Features type="movie" />
      <Lists />
      <Lists />
      <Lists />
    </div>
  );
}

export default Home;

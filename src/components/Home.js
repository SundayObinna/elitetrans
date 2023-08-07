import Header from "./Header";
import Jumbotron from "./Jumbotron";

export default function Home() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <div className="flex-grow-0">
          <Header />
        </div>
        <div className="flex-grow-1">
          <Jumbotron />
        </div>
      </div>
    </>
  );
}

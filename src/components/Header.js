import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

export default function Header() {
  return (
    <>
      <section className="welcome d-flex flex-column vh-100">
        <div className="flex-grow-0 ">
          <Navbar />
        </div>
        <div className="flex-grow-1">
          <Jumbotron />
        </div>
      </section>
    </>
  );
}

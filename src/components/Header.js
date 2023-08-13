import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

export default function Header() {
  return (
    <>
      <section className="welcome d-flex flex-column vh-100">
        <div className="flex-grow-0 ">
          <Navbar />
        </div>
        <div
          className="flex-grow-1"
          style={{
            backgroundImage:
              "url('https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/slide-v1-2.jpg')",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundPosition: "center center",
            backgroundBlendMode: "saturation",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Jumbotron />
        </div>
      </section>
    </>
  );
}

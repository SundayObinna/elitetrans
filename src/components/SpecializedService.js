import "../App.css";

export default function SpecializedService() {
  return (
    <section className="specialized">
      <div
        className="about-bg py-5"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--et-color-1), var(--et-color-2))",
          color: "whitesmoke",
        }}
      >
        <h1 className="text-center py-5 my-5">Specialized Care Service</h1>
      </div>
      <div className="container"></div>
    </section>
  );
}

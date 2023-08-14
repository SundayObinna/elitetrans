import "../assets/css/Carousel.css";

export default function Carousel() {
  return (
    <section>
      <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/" />
      <div id="captioned-gallery">
        <figure className="slider">
          <figure>
            <img src="hobbiton-lake.jpg" alt="Slider" />
            <figcaption>Hobbiton, New Zealand</figcaption>
          </figure>
          <figure>
            <img src="wanaka-drowned-tree.jpg" alt="Slider" />
            <figcaption>Wanaka, New Zealand</figcaption>
          </figure>
          <figure>
            <img src="utah-peak.jpg" alt="Slider" />
            <figcaption>Utah, United States</figcaption>
          </figure>
          <figure>
            <img src="bryce-canyon-utah.jpg" alt="Slider" />
            <figcaption>Bryce Canyon, Utah, United States</figcaption>
          </figure>
          <figure>
            <img src="hobbiton-lake.jpg" alt="Slider" />
            <figcaption>Hobbiton, New Zealand</figcaption>
          </figure>
        </figure>
      </div>
    </section>
  );
}

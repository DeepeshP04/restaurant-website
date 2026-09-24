import "./HomeCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function HomeCarousel() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
              className="d-block w-100 h-100"
              alt="..."
            />
            <div className="carousel-caption">
              <img src="/logo.png" alt="logo" className="carousel-logo"/>
              <h1 className="display-3 fw-bold">Delicious Food</h1>

              <p className="fs-4">Taste the best dishes in town</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <img src="/logo.png" alt="logo" className="carousel-logo"/>
              <h1 className="display-3 fw-bold">Delicious Food</h1>

              <p className="fs-4">Taste the best dishes in town</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070&auto=format&fit=crop"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <img src="/logo.png" alt="logo" className="carousel-logo"/>
              <h1 className="display-3 fw-bold">Delicious Food</h1>

              <p className="fs-4">Taste the best dishes in town</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;

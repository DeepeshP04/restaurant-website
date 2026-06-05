import { useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      category: "food",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
      title: "Butter Chicken",
    },
    {
      id: 2,
      category: "interior",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      title: "Fine Dining Hall",
    },
    {
      id: 3,
      category: "food",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
      title: "Paneer Tikka",
    },
    {
      id: 4,
      category: "events",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      title: "Private Events",
    },
    {
      id: 5,
      category: "food",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      title: "Biryani",
    },
    {
      id: 6,
      category: "interior",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      title: "Luxury Ambience",
    },
    {
      id: 7,
      category: "chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
      title: "Chef Special",
    },
    {
      id: 8,
      category: "food",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
      title: "Indian Thali",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      {/* HERO */}

      <section className="gallery-hero">
        <div className="gallery-overlay"></div>

        <div className="gallery-hero-content">
          <h1>Gallery</h1>
          <p>
            Discover the flavors, elegance, and unforgettable
            experiences that make Kesar special.
          </p>
        </div>
      </section>

      {/* INTRO */}

      <section className="container py-5 text-center">
        <h2 className="gallery-heading">
          Moments at Kesar
        </h2>

        <p className="gallery-description">
          Explore our signature dishes, luxurious interiors,
          special events, and the artistry behind every meal.
        </p>
      </section>

      {/* FILTERS */}

      <div className="container text-center mb-5">
        <div className="gallery-filters">
          {["all", "food", "interior", "events", "chef"].map(
            (category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeCategory === category
                    ? "active-filter"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category.charAt(0).toUpperCase() +
                  category.slice(1)}
              </button>
            )
          )}
        </div>
      </div>

      {/* GALLERY */}

      <section className="container pb-5">
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div
              className="col-lg-4 col-md-6"
              key={item.id}
            >
              <div className="gallery-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />

                <div className="gallery-card-overlay">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE */}

      <section className="gallery-feature">
        <div className="container text-center">
          <h2>Experience Fine Indian Dining</h2>

          <p>
            Every dish is crafted with authentic spices,
            premium ingredients, and a passion for creating
            memorable dining experiences.
          </p>
        </div>
      </section>
    </>
  );
}

export default Gallery;
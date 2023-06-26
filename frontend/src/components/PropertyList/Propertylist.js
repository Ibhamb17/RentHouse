import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./property.css";

const Propertylist = () => {
  const [kontrakans, setKontrakans] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchRegion, setSearchRegion] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  
  useEffect(() => {
    fetchKontrakans();
  }, []);

  const fetchKontrakans = async () => {
    try {
      const response = await axios.get("http://localhost:5000/kontrakan");
      setKontrakans(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 3) {
      return words.slice(0, 4).join(" ") + "...";
    }
    return description;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 4 < kontrakans.length) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex - 1 >= 0) {
        return prevIndex - 1;
      } else {
        return kontrakans.length - 4;
      }
    });
  };

  const handleSearch = () => {
    // Perform search based on searchRegion, searchCity, and priceFilter
    // You can implement the logic here to filter the kontrakans array
    // and update the kontrakans state with the filtered results
  };

  const visibleItems = kontrakans.slice(currentIndex, currentIndex + 4);

  return (
    <div className="property-container">
      <div className="search-box">
        <div className="input-box">
          <input
            type="text"
            placeholder="Region"
            value={searchRegion}
            onChange={(e) => setSearchRegion(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="City"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
        </div>
        <div className="dropdown-category">
          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="">All price</option>
            <option value="<600000">Below 600K</option>
            <option value="<1000000">Below 1M</option>
            <option value="<2000000">Below 2M</option>
            <option value=">2000000">Above 2M</option>
          </select>
          <div className="dropdown-icon"></div>
        </div>
        <button className="search-button" onClick={handleSearch}>
          <span className="search-button-text">Search</span>
        </button>
      </div>
      <div className="list-container">
        <div className="list">
          {visibleItems.map((kontrakan) => (
            <div className="div-house" key={kontrakan.id}>
              <Link to={`/kontrakan/${kontrakan.id}`}>
                <div className="pict1"></div>
                <div className="description">
                  <h3>{kontrakan.namaKontrakan}</h3>
                  <p>{truncateDescription(kontrakan.alamatKontrakan)}</p>
                  <p>{truncateDescription(kontrakan.keterangan)}</p>
                </div>
                <div className="price">Rp. {kontrakan.price}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button className="button-slide prev-button" onClick={handlePrev}>
            Prev
          </button>
          <button className="button-slide next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Propertylist;

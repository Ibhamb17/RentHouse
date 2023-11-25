import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./property.css";

const Propertylist = () => {
  const [kontrakans, setKontrakans] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchAddress, setSearchAddress] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchKontrakans();
  }, []);

  const fetchKontrakans = async () => {
    try {
      const response = await axios.get("http://localhost:5000/kontrakan");
      setKontrakans(response.data);
      setNoResults(false);
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

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:5000/kontrakan");
      let filteredKontrakans = response.data;

      if (searchAddress) {
        filteredKontrakans = filteredKontrakans.filter((kontrakan) =>
          kontrakan.alamatKontrakan.toLowerCase().includes(searchAddress.toLowerCase())
        );
      }
      
      if (priceFilter === "all") {
        filteredKontrakans = filteredKontrakans.filter((kontrakan) => kontrakan.price );
      }
      else if (priceFilter === "<600000") {
        filteredKontrakans = filteredKontrakans.filter((kontrakan) => kontrakan.price <= 600000);
      } else if (priceFilter === "<1000000") {
        filteredKontrakans = filteredKontrakans.filter((kontrakan) => kontrakan.price <= 1000000);
      } else if (priceFilter === "<2000000") {
        filteredKontrakans = filteredKontrakans.filter((kontrakan) => kontrakan.price <= 2000000);
      } else if (priceFilter === ">2000000") {
        filteredKontrakans = filteredKontrakans.filter((kontrakan) => kontrakan.price >= 2000000);
      }

      if (filteredKontrakans.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }

      setKontrakans(filteredKontrakans);
      setCurrentIndex(0);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetFilter = async () => {
    try {
      const response = await axios.get("http://localhost:5000/kontrakan");
      setKontrakans(response.data);
      setPriceFilter("");
      setSearchAddress("");
      setCurrentIndex(0);
      setNoResults(false);
    } catch (error) {
      console.log(error);
    }
  };

  const visibleItems = kontrakans.slice(currentIndex, currentIndex + 4);

  const getRandomImageUrl = () => {
    const imageUrls = [
      "https://drive.google.com/uc?id=12QqOKWrOj4gAlxP3NZBC1KtOMqhCyfkr",
      "https://drive.google.com/uc?id=1CXQ4fFClHTNjncMee09wXfzIb4ehmLKW",
      "https://drive.google.com/uc?id=1zpNepAWYup4ZqgCgtfJ-WVIIVV2ne4pj",
      "https://drive.google.com/uc?id=1EQ7Zbml7OVaVAsEYCySec3Q8A6XblrxJ"
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };

  return (
    <div className="property-container">
      <div className="search-box">
        <div className="input-box">
          <input
            type="text"
            placeholder="Address"
            value={searchAddress}
            onChange={(e) => setSearchAddress(e.target.value)}
          />
        </div>
        <div className="dropdown-category">
          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="all">All price</option>
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
        <button className="reset-filter-button" onClick={handleResetFilter}>
          Reset Filter
        </button>
      </div>
      <div className="list-container">
        {noResults ? (
          <div className="no-results-message">Kontrakan tidak ditemukan.</div>
        ) : (
          <div className="list">
            {visibleItems.map((kontrakan) => (
              <div className="div-house" key={kontrakan.id}>
                <Link
                  to={`/kontrakan/details/${kontrakan.keterangan.replace(/ /g, "-")}-id=${kontrakan.id}=${kontrakan.ownerId}`}
                >
                  <div
                    className="pict1"
                    style={{
                      backgroundImage: `url("${getRandomImageUrl()}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="description">
                    <h3>{kontrakan.namaKontrakan}</h3>
                    <p>{truncateDescription(kontrakan.alamatKontrakan)}</p>
                    <p>{truncateDescription(kontrakan.keterangan)}</p>
                  </div>
                  <div className="price">Rp. {kontrakan.price.toLocaleString("id-ID")},-</div>
                </Link>
              </div>
            ))}
          </div>
        )}
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

import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import NavComponent from "../../assets/component/NavComponent.jsx";
import HeroImage from "../../assets/component/Home/heroImage.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilteredBox from "../../assets/component/Home/filteredBox.jsx";
import ResultBox from "../../assets/component/Home/resultBox.jsx";
import Form from "react-bootstrap/Form";

function Home() {
  const [query, setQuery] = useState(""); // Hotel name query 
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    priceRange: [],
    reviews: [],
    hotelTypes: [],
  });

  const handleFilterChange = (filterType) => (option) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(option)
        ? prev[filterType].filter((item) => item !== option)
        : [...prev[filterType], option],
    }));
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  const HOTEL_API_KEY = import.meta.env.VITE_HOTEL_API_KEY;

  const fetchDestinationId = async () => {
    if (!query.trim()) {
      setError("Please enter a valid city or hotel name.");
      return;
    }

    try {
      const response = await axios.get(
        "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
        {
          params: { q: encodeURIComponent(query) },
          headers: {
            "x-rapidapi-host": "booking-com15.p.rapidapi.com",
            "x-rapidapi-key": HOTEL_API_KEY,
          },
        }
      );

      if (response.data) {
        setHotels(response.data);
        // fetchHotels(response.data[0].dest_id);
      } else {
        setError("No matching destination found. Please refine your search.");
      }
    } catch (error) {
      console.error("Error fetching destination ID:", error.response?.data || error.message);
      setError("Error fetching destination ID. Please try again later.");
    }
  };

  // const fetchHotels = async (destId) => {
  //   if (!destId || !startDate || !endDate) {
  //     setError("Please fill in all the required fields.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.get(
  //       "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
  //       {
  //         params: {
  //           dest_id: destId,
  //           search_type: "CITY",
  //           arrival_date: startDate,
  //           departure_date: endDate,
  //           adults: numberOfGuests,
  //         },
  //         headers: {
  //           "x-rapidapi-host": "booking-com15.p.rapidapi.com",
  //           "x-rapidapi-key": HOTEL_API_KEY,
  //         },
  //       }
  //     );

  //     if (response.data && response.data.result) {
  //       const hotelsWithPricePerNight = response.data.result.map((hotel) => {
  //         const pricePerNight = hotel.price / calculateNights(startDate, endDate);
  //         return { ...hotel, pricePerNight };
  //       });
  //       setHotels(hotelsWithPricePerNight);
  //     } else {
  //       setHotels([]);
  //       setError("No hotels found. Please try a different search.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching hotels:", error.response?.data || error.message);
  //     setError("Error fetching hotels. Please try again later.");
  //   }
  // };

  // const calculateNights = (start, end) => {
  //   const startDate = new Date(start);
  //   const endDate = new Date(end);
  //   return (endDate - startDate) / (1000 * 3600 * 24);
  // };

  const handleSearch = () => {
    setError(null);
    fetchDestinationId();
  };

  const title = ["Types", "Price range", "Reviews"];
  const priceRangeOptions = ["$0-$100", "$100-$200", "$200-$300", "$300+"];
  const reviewOptions = ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];
  const hotelTypeOptions = ["Hotel", "Hostel", "Apartment", "Villa"];

  return (
    <>
      <NavComponent />
      <div className="container">
        <Row>
          <Col xs={6} className="py-3 pe-2 d-flex align-item-center">
            <HeroImage className="rounded-2 img-view-xl" imgView={hotels[0]?.image_url} />
          </Col>
          <Col xs={6} className="p-2">
            <Row>
              <Col xs={6} className="pt-2 pe-0">
                <HeroImage className="rounded-2 img-view-m" imgView={hotels[1]?.image_url} />
              </Col>
              <Col xs={6} className="pt-2">
                <HeroImage className="rounded-2 img-view-m" imgView={hotels[2]?.image_url} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="container">
        <Row>
          <Col xs={6}>
            <label className="fw-medium">Hotel or City Name</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-control"
              placeholder="Enter hotel or city name"
            />
          </Col>
          <Col xs={3}>
            <label className="fw-medium">Check-in Date</label>
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="form-control"
            />
          </Col>
          <Col xs={3}>
            <label className="fw-medium">Check-out Date</label>
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="form-control"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={3}>
            <label className="fw-medium">Number of Guests</label>
            <Form.Select
              aria-label="Select number of guests"
              onChange={handleGuestsChange}
              value={numberOfGuests}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={2}>
            <button className="btn btn-primary mt-4" onClick={handleSearch}>
              Search
            </button>
          </Col>
        </Row>
      </div>

      <div className="container side-bar">
        <Row className="mt-3 mx-0 px-0 border rounded-2 side-bar">
          <Col xs={4} className="bg-grey px-4 py-4">
            <h5>Filters</h5>
            <FilteredBox
              title={title[0]}
              options={hotelTypeOptions}
              selectedOptions={filters.hotelTypes}
              handleChange={handleFilterChange("hotelTypes")}
            />
            <FilteredBox
              title={title[1]}
              options={priceRangeOptions}
              selectedOptions={filters.priceRange}
              handleChange={handleFilterChange("priceRange")}
            />
            <FilteredBox
              title={title[2]}
              options={reviewOptions}
              selectedOptions={filters.reviews}
              handleChange={handleFilterChange("reviews")}
            />
          </Col>

          <Col xs={8}>
            <h5>Hotel Results</h5>
            {error && <p className="text-danger">{error}</p>}
            {hotels.length > 0 ? (
              hotels.map((hotel) => (
                <ResultBox key={hotel.id} hotel={hotel} />
              ))
            ) : (
              <p>No hotels found. Try a different search.</p>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;

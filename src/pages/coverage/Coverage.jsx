import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const data = useLoaderData();
  const mapRef = useRef();
  
  const position = [23.8103, 90.4125];

  const handleSearch = (event) => {
    
    event.preventDefault();
    const place = event.target.location.value;
    const district = data.find((center) =>
      center.district.toLowerCase().includes(place.toLowerCase())
    );

    if(district){
      const coordination = [district.latitude, district.longitude];
      console.log(coordination);
      
      mapRef.current.flyTo(coordination, 15)
    }

  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6 leading-snug">
        We Provide{" "}
        <span className="text-green-600 underline">Nationwide Service</span>{" "}
        Across All 64 Districts
      </h1>

      {/* Search Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10 border border-gray-200">
        <h2 className="font-semibold text-xl mb-4 text-gray-700">
          Search Here to Get Service Location
        </h2>

        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="search"
            name="location"
            placeholder="Search by district name..."
            className="flex-1 py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all shadow"
          >
            Search
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full h-[350px] sm:h-[450px] rounded-xl overflow-hidden shadow-lg border border-green-400">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="w-full h-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map((location, index) => (
            <Marker
              key={index}
              position={[location.latitude, location.longitude]}
            >
              <Popup className="text-sm font-medium">
                <strong className="font-bold">
                  District: {location.district}
                </strong>
                <p>Area: {location.covered_area.join(",")}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;

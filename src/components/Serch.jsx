import React, { useState, useEffect } from "react";
import "./serch.css";
import { ImSearch } from "react-icons/im";
import { useNavigate, useLocation } from "react-router-dom";

export default function () {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function useQuery() {
    return new URLSearchParams(location.search);
  }

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setSearchText(search || ""); 
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + searchText);
  };

  useEffect(() => {
    
    return () => {
      setSearchText("");
    };
  }, []); 

  console.log(search);

  return (
    <div className="serchContainer">
      <form className="serchBox" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="button">
          <ImSearch />
        </button>
      </form>
    </div>
  );
}

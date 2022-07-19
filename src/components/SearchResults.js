import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No Results</p>;
  } else {
    return (
      <div>
        {results.map((image) => (
          <img className="card-image" src={image} alt="space-image" />
        ))}
      </div>
    );
  }
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string),
};

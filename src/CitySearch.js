import { useState } from "react";

const CitySearch = ({ allLocations }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([<input
    type="text"
    className="city"
            placeholder="Search for a city"
    value={query}
    onFocus={() => setShowSuggestions(true)}
  />]);

  const handleInputChanged = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // to hide the list
  const filteredLocations = allLocations ? allLocations.filter((location) => {
    return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
  }) : 
  setQuery(value);
  setSuggestions(filteredLocations);
};
const handleItemClicked = (suggestion) => {
  this.setState({
    query: suggestion,
    showSuggestions: false,
    infoText: '',
  });

  this.props.updateEvents(suggestion);
};
  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ?
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
          })}
          <li key='See all cities' onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
        : null
      }
    </div>
 )
}
export default CitySearch;

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search(props) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    props.searchRecipes(event.target.value);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchRecipes(query);
  };

  return (
    <div>
      
        <Form onSubmit={handleSubmit}  className="searchcontainer">
            <input
              type="text"
              placeholder="nom, id..."
              value={query}               
              onChange={handleChange}
              className='search'
            />
            <FontAwesomeIcon className='searchIcon' icon={faSearch} />
        </Form>
     
    </div>
  );
}

export default Search;


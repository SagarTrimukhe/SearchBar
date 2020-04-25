// (C) Copyright 2020 Hewlett Packard Enterprise Development LP

import React from 'react';
import { searchEngine } from './utils';
import {TextInput, Box } from 'grommet';

// User of this component should pass the mandatory props
// 1. data :- Data on which the search should be conducted
// 2. searchKeys :- the data might contain a lot other data which might not be displayed on UI,
// so pass the JSON keys to limit the search area :)
// 3. setResult :- this is a function to bind the search result to actual
// local variable of index.js file
// 4. setSearchActive :- If some initial data has to be displayed in a component,
// Then this prop can be used as a flag to use as switch between searched result and initial data

const SearchBar = ({setResult,data,searchKeys,setSearchActive, title} ) => {
  const [searchText, setSearchText] = React.useState('');

  const handleChange = (searchText)=>{
    setSearchText(searchText);
    if (searchText.length > 2) {
      const searchResult = searchEngine(searchText.trim(), data, searchKeys);
      setResult(searchResult);
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
  }

  return (
  <Box
    direction='row'
    align='center'
    alignSelf='center'
    round='medium'
    width='medium'
    background='light-2'
    pad={{ horizontal: 'xsmall' }}
    margin='small'
  >
    {/*<Search color='#01a982' />*/}
    <TextInput
      placeholder={title}
      name='Search'
      plain={true}
      value={searchText}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
    />
  </Box>
)};

export default SearchBar;


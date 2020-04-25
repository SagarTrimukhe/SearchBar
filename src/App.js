import React from 'react';
import './App.css';
import SearchBar from "./SearchBar";
import InputTable from "./InputTable";
import OutputTable from "./OutputTable";
import {Box, Heading }from 'grommet';
import Records from './Data/records';

function App() {
  const [result, setResult]=React.useState([]);
  const [searchOn, setSearchOn] = React.useState(false)
  return (
    <Box direction={'column'}>
        <Box alignSelf={'center'} background={'#868eec'} fill={'horizontal'}>
            <Heading alignSelf={'center'} color={'#a9ff00'}>Search Bar Implementation</Heading>
            <SearchBar
                setResult={setResult}
                data={Records}
                searchKeys={['first_name', 'company_name', 'county']}
                title={'Search for Name,Company and County'}
                setSearchActive={setSearchOn}
            />
        </Box>
        <Box direction={'row'} background={'#bfefc7'}>
            <InputTable/>
            <OutputTable SearchResult={result}/>
        </Box>
        {console.log(result)}
    </Box>
  );
}

export default App;

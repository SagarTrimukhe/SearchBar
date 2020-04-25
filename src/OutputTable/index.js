import {DataTable,Box,Heading } from "grommet/es6";
import React from "react";
import {DataTableColumns} from './DataTabelColumns';

const Table = ({SearchResult})=>{
    return(
        <Box>
            <Heading alignSelf={'center'} level={'2'} color={'red'}>Output Table</Heading>
            <DataTable
                data={SearchResult}
                columns={DataTableColumns}
                size={'medium'}
                primaryKey={'email'}
            />
        </Box>

    )
};

export default Table;

import Records from "../Data/records";
import {DataTable, Heading, Box} from "grommet/es6";
import React from "react";
import {DataTableColumns} from './DataTabelColumns';

const Table= ()=>{
    return(
        <Box>
            <Heading alignSelf={'center'} level={'2'} color={'red'}>Input Table</Heading>
            <DataTable
                data={Records}
                columns={DataTableColumns}
                size={'medium'}
                primaryKey={'email'}
            />
        </Box>

    )
};

export default Table;

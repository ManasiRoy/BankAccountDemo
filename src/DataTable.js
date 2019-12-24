import React from 'react';
import { MDBContainer, MDBDataTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import BankAccount  from './BankAccount'

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Date',
        field: 'Date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Date',
        field: 'Date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Transaction Details',
        field: 'Transaction Details',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Value Date',
        field: 'Value Date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Withdrawal AMT',
        field: 'Withdrawal AMT',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Deposit AMT',
        field: 'Deposit AMT',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Balance AMT',
        field: 'Balance AMT',
        sort: 'asc',
        width: 270
      },
      
    ],
    rows: BankAccount
  };

  return (
  
    <MDBContainer>
    <MDBDataTable 
    responsiveMd 
    info={false}     
    paging={true} 
    data={data} 
    dark 
    striped 
    theadTextWhite
    tbodyTextWhite
    > 
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBDataTable>
    </MDBContainer>
  );
}

export default DatatablePage;
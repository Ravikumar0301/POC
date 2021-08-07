import { useEffect, useState, useRef } from 'react';

import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
//import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const App = () => {
   const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null);

   useEffect(() => {
       fetch('http://localhost:3000/student_details')
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
   }, []);


   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
              ref={gridRef}
               rowData={rowData}
              rowSelection="multiple">
              <AgGridColumn field="Tamil"></AgGridColumn>
                                <AgGridColumn field="English"></AgGridColumn>
                                <AgGridColumn field="Maths"></AgGridColumn>
                                <AgGridColumn field="Science"></AgGridColumn>
           </AgGridReact>
       </div>
  );
};

export default App;
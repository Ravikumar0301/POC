import React from 'react';
import {Row} from 'react-bootstrap';
import './Home.scss';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ColumnApi, GridApi } from 'ag-grid-community';

export class Home extends React.Component<any,any> {
    constructor(props: any){
        super(props)
        if(!sessionStorage.getItem("userinfo")){
            this.props.history.push("/")
        }
        
        this.state ={
            username: JSON.parse(sessionStorage.getItem("userinfo") as any),
            rowData : [],
            gridColumnApi:null,
            gridApi:null,
        }
    }

    componentDidMount(){
            axios.get('http://localhost:3000/student_details',{}).then(
                (res) => {
                    console.log(res)
                    if(res.status===200){
                        this.setState({
                            rowData:res.data,
                        })
                    } 
                    else{
                        console.log(res.status)
                    }
                }
            )
        }

    render(){
        return(
            <React.Fragment>
                <div className="home-container">
                    <div className="home-header">   
                        <p>Student Details</p> 
                    </div>
                    <div className="user-details">
                        <div>{this.state.username ?  this.state.username.fullName : "" }</div>
                            <button onClick={()=>{
                                sessionStorage.clear();
                                this.props.history.push("/")
                            }}>Logout
                            </button>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="ag-theme-alpine" style={{height: 500, width:1000}}>
                        <AgGridReact
                                defaultColDef={{
                                    flex: 1,
                                    minWidth: 100,
                                    filter: true,
                                    sortable: true,
                                    resizable: true,
                                }}
                                autoGroupColumnDef={{ minWidth: 200 }}
                                enableRangeSelection={true}
                                animateRows={true}
                                rowData={this.state.rowData}
                                onGridReady={()=>{this.setState({
                                    gridColumnApi: ColumnApi,
                                    gridApi: GridApi
                                })}}
                            >
                                <AgGridColumn field="Standard" rowGroup={true}></AgGridColumn>
                                <AgGridColumn field="Student Name" rowGroup={true}></AgGridColumn>                                
                                <AgGridColumn field="Tamil"></AgGridColumn>
                                <AgGridColumn field="English"></AgGridColumn>
                                <AgGridColumn field="Maths"></AgGridColumn>
                                <AgGridColumn field="Science"></AgGridColumn>
                                <AgGridColumn field="Social science"></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </div>
                    
            </React.Fragment>
        );
    }
}

    
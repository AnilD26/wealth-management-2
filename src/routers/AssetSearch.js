import React, { useState } from "react";
import axios from 'axios';
import { Button, AppBar, Toolbar, Typography, Container, TableContainer, Paper, TableHead, TableBody, TableCell, Table, TableRow, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';


function AssetSearch() {
  const [assetValue, setAssetValue] = useState();
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();
  const [data, setData] = useState([
      {
        id: 1,
        name: "dummyvalue 1",
        type: "dummy type value",
        currency: "$",
        price: "500"

      },
      {
        id: 2,
        name: "dummyvalue 1",
        type: "dummy type value",
        currency: "$",
        price: "500"

      }

  ]);
  const [loading, setLoading] = useState(false);

  const handleInputValue = (event) => {
    setAssetValue(event.target.value);
    console.log(`the intial value is ${assetValue}`)
  }



  const handleClearButton = () => {
    setAssetValue();
  }

  const handleSearchButton = () => {
    setLoading(true);
    const apiUrl = '';
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }

  const handleMinValue = (event) => {
        setMinValue(event.target.value)
        console.log(`the min value is ${minValue}`)
  }

  
  const handleMaxValue = (event) => {
    setMaxValue(event.target.value)
    console.log(`the max value is ${maxValue}`)
}

  return ( 
  <div >
   <AppBar position="static">
        <Toolbar>
          <Typography> Asset Search </Typography>
        </Toolbar>
      </AppBar>
  
  <p>
  {/* <TextField variant="standard" label="Asset Type" value={inputValue} onChange={handleInputValue}/> */}
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Asset type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Assert type"
    value={assetValue}
    onChange={handleInputValue}
    
  >
    <MenuItem value={"equities"}>Equities</MenuItem>
    <MenuItem value={"bonds"}>Bonds</MenuItem>
    <MenuItem value={"realEstate"}>Real Estate</MenuItem>
    <MenuItem value={"Cash"}>Cash</MenuItem>
  </Select>
</FormControl>
  <br></br>
  <br></br>
   <TextField variant="standard" label="Enter Min Value" value={minValue} onChange={handleMinValue}/>
  <TextField variant="standard" label="Enter Max Value" value={maxValue} onChange={handleMaxValue} />  
   {/*  <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        placeholder="Enter Asset type"
      /> */}
  </p>
  <p>
 
    {/*  Asset Price Range: 
     <input
        type="number"
        value={minValue}
        onChange={handleMinValue}
        placeholder="Enter Minimum Value"
      />
      <input
        type="number"
        value={maxValue}
        onChange={handleMaxValue}
        placeholder="Enter Maximum Value"
      /> */}

  </p>
  <p>{assetValue && `the asset value chosen is ${assetValue}` }</p>
  <Button variant="outlined" onClick={handleClearButton} color="primary"> Clear </Button> 
  <Button variant="outlined" onClick={handleSearchButton}> search </Button> 

  {loading ? (
        <p>Loading...</p>
      ) : (
        
       
       /*  <table>
           <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>currency</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {data.map(asset => (
            <tr key={asset.id}>
             
              <td>{asset.name}</td>
              <td>{asset.type}</td>
              <td>{asset.currency}</td>
              <td>{asset.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
 */

      <TableContainer
  component={Paper}
  variant="outlined"
>
  <Table aria-label="demo table">
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>currency</TableCell>
        <TableCell>price</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map( (asset) => (
        <TableRow>
        <TableCell>{asset.name}</TableCell>
        <TableCell>{asset.type}</TableCell>
        <TableCell>{asset.currency}</TableCell>
        <TableCell>{asset.price}</TableCell>
      </TableRow>

      )

       )}
      
    </TableBody>
  </Table>
</TableContainer>

      
      )}
  </div>
      
  );
};

export default AssetSearch;

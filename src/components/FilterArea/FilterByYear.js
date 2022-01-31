import React, {useState} from'react';

const yearValues = [2019,2020,2021,'All']

function FilterByYear(props){
  const [filteredYear,setFilteredYear] = useState(yearValues[3]); 

  const dropDownChangeHandler = (event) => {
    setFilteredYear(event.target.value);
    props.onYearChange(event.target.value);
  }
 


  return(
    <div style = {{textAlign : 'center'}}>
    <label >Year:</label>
    <select onChange={dropDownChangeHandler} value ={filteredYear}>
      <option>{yearValues[0]}</option>
      <option>{yearValues[1]}</option>
      <option>{yearValues[2]}</option>
      <option>{yearValues[3]}</option>
    </select>
    </div>
  );
}

export default FilterByYear;
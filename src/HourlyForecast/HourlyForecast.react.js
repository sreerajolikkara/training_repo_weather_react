import React from 'react';
import "./HourlyForecast.css";

const HourlyForecast = (props) => {

    return (

        <div >
            <br/><br/>
            <h4 className="abc">Hourly Forecast</h4>
            <table className="table table-dark ">
                
                
                
                <tr>
                    
               <td> 
                   <h3>{((props.temperature.list[0].main.temp_min)-273).toFixed(2)}&#8451;</h3> </td>
            <td><h3>{((props.temperature.list[1].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[2].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[3].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[4].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[5].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[6].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
            <td><h3>{((props.temperature.list[7].main.temp_min)-273).toFixed(2)}&#8451;</h3></td>
                </tr>
            </table>
           

        </div>
    );

}

export default HourlyForecast;
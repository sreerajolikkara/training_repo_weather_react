import React from 'react';
import {Link} from 'react-router-dom';
import './DailyForeCast.css';


const DailyForeCast = (props) => {

    return (
        <div >
            <div className="container">
            <div className="list-group list-group-horizontal-sm" >

                <div className="card" >
                    <h3>Today</h3>
                        <Link to = '/hourly'> Hourly </Link>
                    <img className = "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQl7zamdK8LRyyQvYOWn64p77sLW-Y0QPT6flVRROWNorFn-eIaQ" alt="sunny climate" />
                    <div >
                        <span >
                            <p >{((props.temperature.list[0].main.temp_min)-273).toFixed(2)}&#8451;</p>
                            <p  >{((props.temperature.list[0].main.temp_max)-273).toFixed(2)}&#8451;</p>
                        </span>
                    </div>
                </div>

                <div className="card">
                    <h3>Tomorrow</h3>
                    <img className = "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzdKFjnmn4IqzQKKLVG5aiB4bhZhgsrq7Yn-ebx5r-LhpAJ2mmw" alt="sunny climate" />
                    <div >
                        <span>
                            <p  >{((props.temperature.list[8].main.temp_min)-273).toFixed(2)}&#8451;</p>
                            <p  >{((props.temperature.list[8].main.temp_max)-273).toFixed(2)}&#8451;</p>
                            </span>
                    </div>
                </div>

                <div className="card">
                    <h3>Day 3</h3>
                    <img className = "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQl7zamdK8LRyyQvYOWn64p77sLW-Y0QPT6flVRROWNorFn-eIaQ" alt="rainy climate" />
                    <div >
                        <span>
                            <p  >{((props.temperature.list[16].main.temp_min)-273).toFixed(2)}&#8451;</p>
                            <p >{((props.temperature.list[16].main.temp_max)-273).toFixed(2)}&#8451;</p>
                        </span>
                    </div>
                </div>

                <div className="card">
                    <h3>Day 4</h3>
                    <img className = "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQl7zamdK8LRyyQvYOWn64p77sLW-Y0QPT6flVRROWNorFn-eIaQ" alt="rainy climate" />
                    <div >
                        <span >
                            <p >{((props.temperature.list[24].main.temp_min)-273).toFixed(2)}&#8451;</p>
                            <p >{((props.temperature.list[24].main.temp_min)-273).toFixed(2)}&#8451;</p>
                        </span>
                    </div>
                </div>

                <div className="card">
                    <h3>Day 5</h3>
                    <img className = "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzdKFjnmn4IqzQKKLVG5aiB4bhZhgsrq7Yn-ebx5r-LhpAJ2mmw" alt="sunny climate" />
                    <div>
                        <span >
                            <p >{((props.temperature.list[32].main.temp_min)-273).toFixed(2)}&#8451;</p>
                            <p  >{((props.temperature.list[32].main.temp_min)-273).toFixed(2)}&#8451;</p>
                        </span>
                    </div>
                </div>
            </div>
           </div>
            </div>
     );

}


// let Temp = PropTypes.shape({
//     temp: PropTypes.number.isRequired
// })

// DailyForeCast.propTypes = {
//     donorList: PropTypes.arrayOf(Temp).isRequired
// }



export default DailyForeCast;
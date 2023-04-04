import React, { useState } from 'react'
import axios from 'axios'
import Chart from 'chart.js/auto'


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  // const [chartData, setChartData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  const randomData = [];
  const labels = [];

  let max = 10000;
  let min = 7000;
  let idx = 0;
  for (let i = 0; i < 100; i++) {
    let difference = max - min;
    randomData[idx] = Math.floor(Math.random() * max) + min;
    idx++;
    max -= 120;
    min -= 69;

    labels[i] = i;
  }

  return (
    <div className="app">
        <img className = "foodtruck" src="./src/assets/graphyuh.png"/>

      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="container">
        
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          
          
        </div>

        

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }

        
        
      </div>
    </div>
  );
}

const data = [];
    const dates = [];

    let max = 10000;
    let min = 7000;
    let idx = 0;
    for (let i = 0; i < 100; i++) {
        let difference = max - min;
        data[idx] = Math.floor(Math.random() * max) + min;
        idx++;
        max -= 120;
        min -= 69;

        dates[i] = i;
    }

    var combinedData = [];
    for (let i = 0; i < 100; i++) {
        combinedData[i] = {x:dates[i], y:data[i]};
    }
    console.log(combinedData);

    const currencies = ["United States Dollar", "Great Britain Pound", "Australia Dollar", "Euro", 
        "Switzerland Franc", "Japan Yen", "Angola Kwanza", "Algeria Dinar", "Afghanistan Afghani",
        "Aruba Florin", "Azerbaijan New Manat", "Bahamas Dollar", "Belarus Ruble", "Burundi Franc",
        "Cambodia Riel", "Denmark Krone", "East Caribbean Dollar", "Israel New Shekel", "Star Trek Currency",
        "Kenya Shilling", "Kenya Shilling", "Mozambique New Metical", "St Helena Pound", "Bottle Caps",
        "Tonga Pa'anga", "Monopoly Dollars", "Virgina Lotto Tickets", "New Jerset Lotto Tickets", "Loaves of Bread", 
        "M and Ms", "Benjamins", "Dead Presidents"];
    let currenciesLength = currencies.length;
    let randCurrency = Math.floor(Math.random() * currenciesLength);

    const times = ["seconds", "picoseconds", "clock cycles", "New York Second", "Onosecond",
                "Scaramucci", "Microcentury", "minutes", "hours"];
    let timesLength = times.length;
    let randTimes = Math.floor(Math.random() * timesLength);

    new Chart("graph", {
        type: "line",
        data: {
            labels: dates,
            datasets: [{
                label: 'Market Value of the NFT over time',
                fill: false,
                borderColor: "rgba(199, 21, 21, 1)",
                pointRadius: 4,
                pointBackgroundColor: "rgba(0,0,0,1)",
                data: data
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Value of NFT (" + currencies[randCurrency] + ")"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Time (" + times[randTimes] + ")"
                    }
                }]
            }
        }
    });

export default App;

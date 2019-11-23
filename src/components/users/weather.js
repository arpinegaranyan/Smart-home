import React, { useState, useEffect } from 'react';
import mostlySunny from './img/mostlySunny.svg';
import sunny from './img/sunny.svg';
import partlySunny from './img/partlySunny.svg';
import mostlyCloudy from './img/mostlyCloudy.svg';



function Weather(props) {

    const [day, setDay] = useState("");
    const [night, setNight] = useState("");
    const [tempMin, setTemp] = useState("");
    const [imgDay,setImgDay]=useState("/img/users/sunny.svg");


    useEffect(() => {
        async function fetchData() {
            let url = new URL("http://dataservice.accuweather.com/forecasts/v1/daily/1day/16890?apikey=j7xG8BbEAi1QLcLmiIORte0q7Q7mzqj4"
            );
            let res = await fetch(url);
            let data = await res.json();
            let dailyData = JSON.stringify(data.DailyForecasts[0].Day.IconPhrase);
            let nightX = JSON.stringify(data.DailyForecasts[0].Night.IconPhrase);
            let temperMin = JSON.stringify(data.DailyForecasts[0].Temperature.Minimum.Value);

            setDay(dailyData);
            setNight(nightX);
            setTemp(temperMin);

            if(day ==='Sunny'){
                setImgDay(imgDay => {
                    imgDay = '/img/users/sunny.svg';
                    return imgDay;
                });
            }else if(day ==='Partly sunny'){
                setImgDay(imgDay => {
                    imgDay = '/img/users/partlySunny.svg';
                    return imgDay;
                });
            }else if(day ==='Mostly cloudy'){
                setImgDay(imgDay => {
                    imgDay = '/img/users/mostlySunny.svg';
                    return imgDay;
                });
            }
        }
        fetchData();
    }, [day]);

    return (
        <div className="card" id="weather">
            <div className="container_w">
            <h2>Weather</h2>
                <div>
                <span>Day :</span>
                <span>{day}</span>
                <img src={`${imgDay}`} width="30px" height="30px"/>
                </div>
                <div>
                <span>Night :</span>
                <span>{night}</span>
                </div>
                <div>
                <span>{((tempMin) - 32) * 1.8} C</span>
                </div>
            </div>
        </div>
    );
}

export default Weather;
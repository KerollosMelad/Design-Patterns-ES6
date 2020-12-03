'use strict';

class WeatherManager {
    constructor() {
    }

    UpdateWeatherState(state) {
        let dev1 = new Device1();
        let dev2 = new Device2();

        dev1.Update(state);
        dev2.Update(state);
    }
}

class Device1  {
    constructor() {
        console.log('Device 1 created')
    }

    Update (state){
        console.log('Device 1, Observer new weather state: ' + state)
    }
}

class Device2  {
    constructor() {
        console.log('Device 2 created')
    }

    Update (state){
        console.log('Device 2, Observer new weather state: ' + state)
    }
}



function Run() {
    var weather = new WeatherManager();
    weather.UpdateWeatherState('new weather state: 10 , 30 ');
}
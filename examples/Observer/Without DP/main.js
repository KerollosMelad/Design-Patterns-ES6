'use strict';

class WeatherManager {
    constructor() {
    }

    ///..calc Weather_Field1....
    ///..calc Weather_Field2....
    ///..calc Weather_Field3....
    ///..calc Weather_Field4....
    ///..calc Weather_Field5....
    
    calc()
    {
        //execute
        ///..calc Weather_Field1....
        ///..calc Weather_Field2....
        ///..calc Weather_Field3....
        ///..calc Weather_Field4....
        ///..calc Weather_Field5....
        return 'new weather state: 10 , 30 ';
    }

    UpdateWeatherState() {
        let state = this.calc();

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
    weather.UpdateWeatherState();
}
'use strict';

// publisher 
class IWeatherManager {
    constructor() {
    }

    // add event listener
    Attach (Observer){
        this.observers.push(Observer);
        console.log('Device attached')
    }

    //remove event listener
    Dettach (Observer){
        for(var i in this.observers)
            if(this.observers[i] === Observer)
                this.observers.splice(i, 1)
    }

    // invoke
    Notify (){
        console.log('Weather Changed')
        for(var i in this.observers){
            this.observers[i].Update(this);
        }
    }
}

class WeatherManager extends IWeatherManager {
    constructor() {
        super()
        this.subjectState = null
        this.observers = []
        console.log('WeatherManager created')
    }

    GetWeatherState() {
        return this.subjectState;
    }

    UpdateWeatherState(state) {
        this.subjectState = state;
        this.Notify()
    }
}

// subscriber - Observer 
class Device {
    constructor() {
    }

    Update (){
    }
}

// subscriber 1
class Device1 extends Device {
    constructor() {
        super()
        this.observerState = '';
        console.log('Device 1 created')
    }

    Update (Subject){
        this.observerState = Subject.GetWeatherState();
        console.log('Device 1, Observer new weather state: ' + this.observerState)
    }
}

// subscriber 2
class Device2 extends Device {
    constructor() {
        super()
        this.observerState = '';
        console.log('Device 2 created')
    }

    Update (Subject){
        this.observerState = Subject.GetWeatherState();
        console.log('Device 2, Observer new weather state: ' + this.observerState)
    }
}

function init_Observer() {
    var device1 = new Device1();
    var device2 = new Device2();
    var weather = new WeatherManager();
    weather.Attach(device1);
    weather.Attach(device2);
    weather.UpdateWeatherState('new weather state: 10 , 30 ');
}
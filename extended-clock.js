// Extended Clock.js
class Clock {
    constructor({template}) {
        this.format = {template};
        // console.log(this.format.template);
    };
    
    render() { 
        let date = new Date();

        let hours = date.getHours();
        if(hours < 10) hours = '0' + hours;

        let secs = date.getSeconds();
        if(secs < 10) secs = '0' + secs;

        let mins = date.getMinutes();
        if(mins < 10) mins = '0' + mins;
        // console.log(this.format.template);
        let output = this.format.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
        console.log(output);
    }
    
    end() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
        //console.log(this.timer);
    }
    
}

class ExtendedClock extends Clock {
    // constructor({template}, precision = 1000) {
    //     super({template});
    //     this.precision = precision;
    // }

    constructor(options) {
        super(options);
        let {precision = 1000} = options;
        console.log(options)
        this.precision = precision;
        console.log(this.precision)
    }

    start() {
        this.render()
        this.timer = setInterval(() => this.render(), this.precision);
        console.log(this.timer)
        
    }
}

let extendedClock = new ExtendedClock({template: 'h:m:s'});
extendedClock.start();



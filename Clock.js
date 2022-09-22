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
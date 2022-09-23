// Rewrite to class
function Clock1({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
//  let clock1 = new Clock1({template: 'h:m:s'});
// //   clock.start();

// Rendering in class
class Clock2 {
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

let clock = new Clock2({template: 'h:m:s'});
// clock.start();
// clock.end()

// Error creating an Instance
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        // this.name = name;  Error: this is not defined
        super(name);
        this.created = Date.now();
    }
}
let rabbit = new Rabbit('White Rabbit');
// console.log(rabbit.name);


// Class extends Object
class Rabbit2 extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}
let rabbit2 = new Rabbit("Rab");
console.log(rabbit2.hasOwnProperty('name'));




// Spy decorator
// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property. Every call is saved as an array of arguments.

function work(a, b) {
    console.log(a + b);

}

function spy(work) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        for(let args of wrapper.calls) {
            console.log(`Call: ${args.join()}`);
        }
        return work.apply(this, args);
    }
    wrapper.calls = [];

    return wrapper;
}

work = spy(work);
// work(1, 2);
// work(1, 4);

function f(x) {
    console.log(x);
}


function delay(f, ms) {
    console.log(arguments)
    return function() {
            setTimeout(() => {
            return f.apply(this, arguments)
        }, ms)
    }

}

let f1000 = delay(f, 1000);
f1000('test');


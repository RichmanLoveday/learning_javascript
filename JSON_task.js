// Turn the object into JSON and back
let user = {
    name: 'John Smith',
    age: 35,
};
//console.log(JSON.stringify(user));

// Exclude backreferences
let room = {
    Number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: 'John'}, {name: 'Alice'}],
    place: room
};

// console.log(room);
// console.log(meetup)

// Circular references
room.occupiedBy = meetup;
meetup.self = meetup;

// console.log(room);
// console.log(meetup)
let json = JSON.stringify(meetup, (key, value) => {
    return (key != '' && value == meetup) ? undefined : value;
});
console.log(json)

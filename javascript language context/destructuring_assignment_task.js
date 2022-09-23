let user = {
    name: 'John', 
    years: 30
};

let {name, years, isAdmin = false} = user;
// console.log(name);
// console.log(years);
// console.log(isAdmin);

let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250
};

// Function to print out the to salary
function topSalary(salaries) {
    let array = Object.entries(salaries);
    let max = 0;
    let maxName = null;

    // let [item1 = [name, salaryy], item2 = [names, salary], item3 = [name, salary]] = convert;
    for(let [name, salary] of array) {
        
        if(max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
   // console.log(convert);
}
topSalary(salaries);
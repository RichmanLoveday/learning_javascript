// Create a date
// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local
let ms = Date.parse('2012-02-20T03:12');
let date = new Date(ms);
//console.log(date.getDay()) 


// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’,‘TH’, ‘FR’, ‘SA’, ‘SU’
let date1 = new Date(2012, 0, 3);
function getWeekDay(date) {
    //console.log(date);
    // Create an array to store weekdays
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    let WeekDay = date.getDay();
    for(let index = 0; index <= days.length; index++) {
        WeekDay = (WeekDay == index) ? days[index] : '';
    }
    return WeekDay;
}

function getLocalDay(date) {
    //date = date.toUTCString();
    //console.log(date)
    // Create an array to store weekdays
    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let WeekDay = date.getUTCDay();
    // console.log(WeekDay);
    for(let index = 0; index <= days.length; index++) {
        if(WeekDay == 7) {
            WeekDay = days[0];
        }else if(WeekDay == index) {
            WeekDay = days[index];
        }
    }
    console.log(WeekDay);
    return WeekDay;
}


// Create a function getDateAgo(date, days) to return the day of month days ago from the
// date .
let date2 = new Date(2015, 0, 3);
function getDateAgo(date, prevDay) {
    let Day = new Date();
    Day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() - prevDay);
    return Day.toDateString();
}
// console.log(date2.toDateString());

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    let lstDay = date.getDate();
    return lstDay;
}

function getSecondsToday() {
    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    let numOfsec = Math.round(diff / 1000)
    return `No of seconds past is ${numOfsec} secs`;
}

function getSecondsToTomorrow() {
    let now = new Date()
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    let numOfsec = Math.round(diff / 1000)
    return `No of seconds to tommorow is ${numOfsec} secs`;
}

function formatDate(date) {
    let diff = new Date() - date;
    //console.log(diff);

    if(diff < 1000) {
        return 'right now';
    }
    let secs = parseInt(diff / 1000);
    //console.log(secs)
    if(secs < 60) {
        return `${secs} sec. ago`;
    }
    
    let min = parseInt(diff / 60000);
    //console.log(min);
    if(min < 60) {
        return `${min} min. ago`;
    }
    
    let hour = parseInt(diff / 3600000);
    //console.log(hour)

    if(hour >= 1 && hour < 24) {
        return `${hour} hour ago`;
    }
    //console.log(new Date(date))

    let d = date; 
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '0' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes(),
    ].map((element) => element.slice(-2));

    return `${d.slice(0, 3).join('.')}, ${d.slice(-2).join(':')} ago`;


}           


function numOfdaysToBirthday(mon, day) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day1 = now.getDate();

    let birthday = new Date();

    if(month <= mon) {
        birthday.setFullYear(year, mon, day);
        if(month == mon && day1 >= day) {
            birthday.setFullYear(year + 1, mon, day);
            //console.log(birthday);
        }
        //console.log(birthday);
    } else {
        birthday.setFullYear(year + 1, mon, day);
    }
    //console.log(birthday);

    // calculating for day with millisecond

    let futureMilliSeconds = birthday.getTime();
    let presentMilliSeconds = now.getTime();
    let diff = birthday - now;
    
    let numOfdays = Math.round(diff / (24 * 3600 * 1000));

    let days = 0;
    if(numOfdays > 0) {
        // console.log(numOfdays);
        numOfdays = `Your next birthday is ${numOfdays} ${(numOfdays == 1) ? 'day' : 'days'} from today`;
        // console.log(numOfdays)
        return numOfdays;
    } else {
        days = numOfdays + '';
        days = `${days.slice(1)} ${(day1.slice(1) == 1) ? 'day' : 'days'} has past since your last birthday`;
        // console.log(days);
        return days;
    }
}
console.log(numOfdaysToBirthday(8, 16));

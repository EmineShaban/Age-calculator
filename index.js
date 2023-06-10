console.log('dd')

let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')

function onClick() {
    console.log('dddddd')
    console.log(day)
    console.log(month)
    console.log(year)

    let currentDate = new Date().toJSON().slice(0, 10);
    console.log(currentDate);
    const date = new Date();

    let dayToday = date.getDate();
    let monthToday = date.getMonth() + 1;
    let yearToday = date.getFullYear();
    console.log(dayToday)
    console.log(monthToday)
    console.log(yearToday)





    //year
    let yearCurrent = Number(yearToday) - Number(year.value)
    console.log(yearCurrent)


    //month
    let monthCurrent = 0
    if (monthToday > Number(month.value)) {
        monthCurrent = monthToday - Number(month.value)
    } else if (monthToday < Number(month.value)) {

        monthCurrent = 12 - Number(month.value) + monthToday
        yearCurrent -= 1
    }

    console.log(monthCurrent)
    console.log(yearCurrent)




    //
}

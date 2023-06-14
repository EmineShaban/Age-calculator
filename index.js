let day31 = [1, 3, 5, 7, 8, 10, 12]
let day30 = [4, 6, 9, 11]
let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')

let dayNew = document.getElementById('new-days')
let monthNew = document.getElementById('new-months')
let yearNew = document.getElementById('new-years')


function onClick() {
    console.log(day)
    console.log(month)
    console.log(year)

    const date = new Date();

    let dayToday = date.getDate();
    let monthToday = date.getMonth() + 1;
    let yearToday = date.getFullYear();
  




    //year
    let yearCurrent = Number(yearToday) - Number(year.value)

    //month
    let monthCurrent = 0

    if (monthToday > Number(month.value)) {
        monthCurrent = monthToday - Number(month.value)
    } else if (monthToday < Number(month.value)) {
        monthCurrent = 12 - Number(month.value) + monthToday
        yearCurrent -= 1
    }

    //day
    let dayCurrent = 0

    if (dayToday > Number(day.value)) {
        dayCurrent = dayToday - Number(day.value)  
        console.log(dayToday)

        console.log(dayCurrent)
    } else if (dayToday < Number(day.value)) {
        console.log(monthCurrent)
        monthCurrent -= 1
        console.log(monthToday)

        console.log(monthCurrent)
        console.log(month.value)

        if (monthCurrent == -1) {
            yearCurrent -= 1
            monthCurrent = 11
            dayCurrent = 31 - Number(day.value) + dayToday
            console.log(dayCurrent)
            console.log('12')
        } else if (day31.includes(Number(month.value -1 )) || month.value == 1) {
            dayCurrent = 31 - Number(day.value) + dayToday
            console.log(dayCurrent)
            console.log('31')
        } else if (day30.includes(Number(month.value -1))) {
            dayCurrent = 30 - Number(day.value) + dayToday
            console.log(dayCurrent)
            console.log('30')
        }else if(month.value - 1 == 2){
            console.log(month.value)
            console.log(2)

            if ((0 == year.value % 4) && (0 != year.value % 100) || (0 == year.value % 400)) {
                console.log(year.value + ' is a leap year');
                dayCurrent = 29 - Number(day.value) + dayToday
                console.log(dayCurrent)

            } else {
                console.log(year.value + ' is not a leap year');
                dayCurrent = 28 - Number(day.value) + dayToday
                console.log(dayCurrent)

            }


        }

    }
    console.log(yearCurrent)
    console.log(monthCurrent)
    console.log(dayCurrent)

    dayNew.textContent = dayCurrent
    monthNew.textContent = monthCurrent
    yearNew.textContent = yearCurrent

}

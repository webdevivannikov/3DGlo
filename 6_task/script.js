
const body = document.querySelector('body');


const getStrTimeNewYear = () => {
    let date = new Date();
    let dayIndex = date.getDay();
    let dayOfWeek = '';
    let timeOfDay = '';
    let newYear = date.getFullYear() + 1;
    let newYearDate = new Date(newYear, 0, 1).getTime();
    let hours = date.getHours() < 10 ? '0' + date.getHours(): date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes();
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds();
    let pmAm = '';
    let toNewYear = Math.ceil((newYearDate - date.getTime())/1000/60/60/24);
    switch (dayIndex) {
        case 0:
            dayOfWeek = 'Воскресение';
            break;
        case 1:
            dayOfWeek = 'Понедельник';
            break;
        case 2:
            dayOfWeek = 'Вторник';
            break;
        case 3:
            dayOfWeek = 'Среда';
            break;
        case 4:
            dayOfWeek = 'Четверг';
            break;
        case 5:
            dayOfWeek = 'Пятница';
            break;
        case 6:
            dayOfWeek = 'Суббота';
            break;            
    }
    if ((+hours > 3) && (+hours < 12))
        timeOfDay = 'Доброе утро';
    if ((+hours > 11) && (+hours < 17))
        timeOfDay = 'Добрый день';
    if((hours > 16) && (hours <= 23))
        timeOfDay = 'Добрый вечер';
    if ((hours >= 0) && (hours <= 3))
        timeOfDay = 'Доброй ночи';
    
    pmAm = +hours > 12 ? 'PM': 'AM';
    if (+hours > 12) hours = +hours - 12;
    
    return {timeOfDay, dayOfWeek, hours, minutes, seconds, pmAm, toNewYear};
};
const updateClock = () => {
        
    let getTime = getStrTimeNewYear();
    body.innerText = `${getTime.timeOfDay}
    Сегодня: ${getTime.dayOfWeek}
    
    Текущее время: ${getTime.hours}:${getTime.minutes}:${getTime.seconds} ${getTime.pmAm}
    
    До нового года осталось ${getTime.toNewYear} дней`;
    setTimeout(updateClock, 1000);
   
};
updateClock();
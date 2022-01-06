const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow)/1000 < 0 ? 0: (dateStop - dateNow)/1000;
        let hours = Math.floor(timeRemaining / 60 / 60) < 10 ? '0' + Math.floor(timeRemaining / 60 / 60) : Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60 ) < 10 ? '0' + Math.floor((timeRemaining / 60) % 60 ) : Math.floor((timeRemaining / 60) % 60 );
        let seconds = Math.floor(timeRemaining  % 60 ) < 10 ? '0' + Math.floor(timeRemaining % 60 ) : Math.floor(timeRemaining % 60 );
                

        return { timeRemaining, hours, minutes, seconds };

    };
    
    
    const updateClock = () => {
        
        let getTime = getTimeRemaining();
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;
       
    };
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
        setInterval(updateClock, 1000);
    }
    else {
        updateClock();
    }
    //updateClock();


};

export default timer;
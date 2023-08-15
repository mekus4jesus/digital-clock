const hour = document.getElementById('hr'),
    minutes = document.getElementById('min'),
    seconds = document.getElementById('sec'),
    amPm = document.getElementById('ampm')

    function updateClock(){
        let date = new Date(),
            hr = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            ampm = 'AM'

            if(hr > 12){
                hr = hr-12
                ampm = 'PM'
            }
            hr = hr<10? "0" + hr : hr
            min = min<10? "0" + min : min
            sec = sec <10? "0" + sec : sec
            hour.innerText = hr
            minutes.innerText = min
            seconds.innerText = sec
            amPm.innerText = ampm

            setTimeout(() => {
               updateClock() 
            }, 1000)

    }
    updateClock()
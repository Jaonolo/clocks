const data = {
    hour: 3.6 * 10**6
}
const clockTotal = 12 * 3.6 * 10**6

const addTime = (pointer) => {
    let current = getComputedStyle(document.documentElement).getPropertyValue(`--${pointer}`)
    current = parseInt(current.slice(0, current.length - 3)) + (data['hour']*360/clockTotal)
    document.documentElement.style.setProperty(`--${pointer}`, `${current}deg`)
}

const setTime = (pointer) => {
    let current = new Date().getHours()
    current = current%12 * 360/12
    document.documentElement.style.setProperty(`--${pointer}`, `${current}deg`)
}

setTime('hour')
// setInterval(addTime, 1000, 'hour')
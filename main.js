const data = {
    hour: 3.6 * 10**6
}
const clockTotal = 12 * 3.6 * 10**6
const GMT = -3

const addTime = (pointer) => {
    let current = getComputedStyle(document.documentElement).getPropertyValue(`--${pointer}`) || '0deg'
    current = parseInt(current.slice(0, current.length - 3)) + (data[pointer]*360/clockTotal)
    document.documentElement.style.setProperty(`--${pointer}`, `${current}deg`)
}

const setTime = (pointer) => {
    let current = Date.now()
    let ratio = data[pointer]/clockTotal

    current = (360*ratio) * (((current%clockTotal)/data[pointer]) + GMT)

    document.documentElement.style.setProperty(`--${pointer}`, `${current}deg`)
}

setTime('hour')
// setInterval(addTime, 1000, 'hour')
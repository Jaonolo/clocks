// const data = {
//     hour: 10**3
// }

const data = {
    second: {
        value: 10**3,
        completeLoop: 60
    },
    hour: {
        value: 3.6 * 10 ** 6,
        completeLoop: 12
    }
}
const GMT = -3

// const addTime = (pointer) => {
//     let current = getComputedStyle(document.documentElement).getPropertyValue(`--${pointer}`) || '0deg'
//     current = parseInt(current.slice(0, current.length - 3)) + (data[pointer]*360/clockTotal)
//     document.documentElement.style.setProperty(`--${pointer}`, `${current}deg`)
// }

const setTime = (pointer) => {
    let current = Date.now()

    let correction = pointer === 'hour' ? GMT : 0

    current = (360/data[pointer].completeLoop) * (((current%(data[pointer].completeLoop*data[pointer].value)/data[pointer].value)) + correction)

    document.documentElement.style.setProperty(`--${pointer}`, `${current}deg`)
}

setTime('hour')
setInterval(setTime, 1000, 'hour')
setInterval(setTime, 1000, 'second')
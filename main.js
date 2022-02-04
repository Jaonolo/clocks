const addTime = (pointer) => {
    let current = getComputedStyle(document.documentElement).getPropertyValue(`--${pointer}`)
    current = parseInt(current.slice(0, current.length - 3)) + 10
    document.documentElement.style.setProperty(`--${pointer}`, `${current}deg`)
}

const setTime = (pointer) => {
    let current = new Date().getHours()
    current = current%12 * 360/12
    document.documentElement.style.setProperty(`--${pointer}`, `${current}deg`)
}

setTime('hour')
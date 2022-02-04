const addTime = (pointer) => {
    let current = getComputedStyle(document.documentElement).getPropertyValue(`--${pointer}`)
    current = parseInt(current.slice(0, current.length - 3)) + 10
    document.documentElement.style.setProperty(`--${pointer}`, `${current}deg`)
}
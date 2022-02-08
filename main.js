const data = {
    second: {
        value: 10**3,
        completeLoop: 60,
        width: 3,
        height: 200,
        color: 'red'
    },
    hour: {
        value: 3.6 * 10 ** 6,
        completeLoop: 12,
        width: 7,
        height: 120
    },
    minute: {
        value: 60 * 10 ** 3,
        completeLoop: 60
    }
}

const GMT = -3
const tickRate = 1000

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

const clock = document.querySelector('.clock')
Object.entries(data).forEach(element => {
    clock.innerHTML += `
        <div 
            style="
                width: ${element[1].width || 5}px;
                height: ${element[1].height || 150}px;
                transform: translate(-50%, -50%) rotate(var(--${element[0]}));
            "
            class="pointer-container"
        >
            <div style="background-color: ${element[1].color || 'black'}" class="pointer"></div>
        </div>
    `
    setTime(element[0])
    setInterval(setTime, tickRate, element[0])
});
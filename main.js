let i = 10

const addClock = () => {
    document.documentElement.style.setProperty('--time', `${i+=10}deg`)
    document.querySelector('.pointer-container').classList.add('tick')
}
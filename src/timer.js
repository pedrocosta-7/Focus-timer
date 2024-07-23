import state from "./state.js";
import * as sound from "./sound.js"
import * as el from "./elements.js"
import { reset } from "./actions.js";

export function countDown() {
    clearTimeout(state.countDownId)

    if(!state.IsRunning){
        return
       }
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes --
    }
    if(minutes < 0){
        reset()
        minutes = 25
        sound.kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countDownId = setTimeout(() => countDown(), 1000)
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}

import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sound from "./sound.js"

export function toggleRunning() {
   state.IsRunning = document.documentElement.classList.toggle("running")
   
   timer.countDown()
   
   sound.buttonPressAudio.play()

}
export function set() {
el.minutes.setAttribute("contenteditable", true)
el.minutes.focus()
sound.buttonPressAudio.play()
}
export function reset() {
   state.IsRunning = false
   document.documentElement.classList.remove("running")
   timer.updateDisplay()
}


export function toggleMusic() {
    state.IsMute = document.documentElement.classList.toggle("music-on")
    if(state.IsMute){
    sound.bgAudio.play()
    } else {
      sound.bgAudio.pause()
    }
    
  
    

}
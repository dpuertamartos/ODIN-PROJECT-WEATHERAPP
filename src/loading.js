const createLoading = () =>{
    console.log("inside createloading")
    const weatherDisplay = document.querySelector("#weatherDisplay")
    weatherDisplay.textContent = ""
    const newDiv = document.createElement("div")
    newDiv.className = "spinner-border text-success"
    newDiv.setAttribute("role", "status")
    weatherDisplay.append(newDiv)
}

export const destroyLoading = () =>{
    const weatherDisplay = document.querySelector("#weatherDisplay")
    weatherDisplay.textContent = ""
}

export default createLoading
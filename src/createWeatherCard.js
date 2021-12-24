{/* <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div> */}

const createCard = (data) =>{
    const cardDisplay = document.querySelector("#cardDisplay")
    cardDisplay.textContent=""
    const card = document.createElement("div")
    card.className="card"
    card.setAttribute("style","width: 25rem;")
    
    const img = new Image()
    img.src = data.icon_url
    img.className = "card-img-top img-fluid"

    const cardBody = document.createElement("div")
    cardBody.className="card-body"
    const h5 = document.createElement("h5")
    h5.className="card-title"
    h5.textContent= data.name
    const p = document.createElement("p")
    p.className="card-text"
    p.textContent= data.weather
    const p2 = document.createElement("p")
    p2.className="card-text"
    p2.textContent= data.weatherDescription
    cardBody.append(h5,p,p2)

    const listGroup = document.createElement("ul")
    listGroup.className = "list-group list-group-flush"
    const listGroupItem1 = document.createElement("li")
    listGroupItem1.className = "list-group-item"
    listGroupItem1.textContent = "temperature: "+data.temp+" ºC"
    const listGroupItem2 = document.createElement("li")
    listGroupItem2.className = "list-group-item"
    listGroupItem2.textContent = "wind-speed: "+data.windspeed+" m/s"
    const listGroupItem3 = document.createElement("li")
    listGroupItem3.className = "list-group-item"
    listGroupItem3.textContent = "humidity: "+data.humidity+ "%"
    listGroup.append(listGroupItem1,listGroupItem2,listGroupItem3)

    card.append(img, cardBody, listGroup)
    cardDisplay.append(card)
}

export default createCard
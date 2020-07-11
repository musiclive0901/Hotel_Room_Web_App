import React form "react"
import ReactDOM from "react-dom"

function App(){
    const firstName = "Nam"
    const lastName = "Ho"

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    if (hour < 12){
        timeOfDay = "morning"
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    }else{
        timeOfDay = "night"
    }

    const styles = {
        color: "#FF8C00",
        fontSize : 24
    }
    
    return (
        <h1 style={styles}>hello {firstName} + " " + {lastName}</h1>
        <h2>Good {timeOfDay}</h2>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
import React from 'react';
import './TrafficLight.css';

class TrafficLight extends React.Component {
  constructor() {
    super()

    this.state = {
      trafficStatus : {
        redLight : "",
        yellowLight : "",
        greenLight : ""
      }
    }
  }

  onMouseOver(e) {
    console.log("onMouseOver")
    console.log(e.target.id)
    let redLight = ""
    let yellowLight = ""
    let greenLight = ""

    switch(e.target.id) {
      case "redLight":
        redLight = "selected"
        break
      case "yellowLight":
        yellowLight= "selected"
        break
      case "greenLight":
        greenLight = "selected"
        break
      default:
        break

    }

    let trafficStatus = {
      redLight : redLight,
      yellowLight : yellowLight,
      greenLight : greenLight
    }

    this.setState({
      ...this.trafficStatus,
      trafficStatus:trafficStatus
    })

    console.log(this.state.trafficStatus)

  }

  onChange(e) {
    console.log(e.target.value)
    let value = e.target.value;
    this.setState(
        {...this.setState,value:value}
    )
}

  render() {
    let redLight = `red light ${this.state.trafficStatus.redLight}`
    let yellowLight = `yellow light ${this.state.trafficStatus.yellowLight}`
    let greenLight = `green light ${this.state.trafficStatus.greenLight}`
    return (
      <div>
        <div className="trafficTop"></div>
        <div className="container">
          <div id="redLight" className={redLight} onMouseOver={e=>this.onMouseOver(e)}></div>
          <div id="yellowLight" className={yellowLight} onMouseOver={e=>this.onMouseOver(e)}> </div>
          <div id="greenLight" className={greenLight} onMouseOver={e=>this.onMouseOver(e)}></div>
        </div>
      </div>
    )
  }
}


export default TrafficLight;

import React from 'react';
import "./App.scss"

import Cards from "./components/cards/cards"
import Chart from "./components/chart/chart"
import CountryPicker from "./components/country-picker/country-picker"
import { fetchData } from './api';



class App extends React.Component {
  state = {
    data: {},
    country: ""
  }
  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country })

  }

  render() {
    const { data, country } = this.state
    return (
      <div className="App">
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;

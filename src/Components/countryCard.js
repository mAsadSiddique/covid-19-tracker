import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import "bootstrap/dist/css/bootstrap.min.css";
import CardColumns from 'react-bootstrap/CardColumns';
// import Columns from "react-columns";
import Form from "react-bootstrap/Form";

function CountryCardDisplay() {
    const [getData, setData] = useState([]);
    const [result, setResult] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://corona.lmao.ninja/v3/covid-19/all");
            const responseCountries = await fetch("https://corona.lmao.ninja/v3/covid-19/countries");
            let data = await response.json();
            let countriesData = await responseCountries.json();
            setResult(countriesData)
            setData(data)
                // console.log(data);
            console.log(countriesData);
        }
        fetchData();
    }, []);

    const filterCountry = result.filter(item => {
        return searchCountry !== "" ? item.country.includes(searchCountry) : item;
    })
    const countries = filterCountry.map((data, ind) => {
        return ( <
            Card key = { ind }
            bg = "light"
            text = "dark"
            className = "text-center"
            style = {
                { margin: "10px" }, { maxWidth: 200 }, { minHeight: 600 } } >
            <
            Card.Img style = {
                { with: 200 }, { height: 200 } }
            variant = "top"
            src = { data.countryInfo.flag }
            /> <
            Card.Body >

            <
            Card.Title > < h2 > { data.country } < /h2></Card.Title >
            <
            Card.Text > Total Cases { data.cases } < /Card.Text> <
            Card.Text > Critical Cases { data.critical } < /Card.Text> <
            Card.Text > Active Cases { data.active } < /Card.Text> <
            Card.Text > Recovered { data.recovered } < /Card.Text> <
            Card.Text > Deaths { data.deaths } < /Card.Text> <
            Card.Text > Today 's Cases {data.todayCases}</Card.Text> <
            Card.Text > Today 's Death {data.todayDeaths}</Card.Text>

            <
            /Card.Body>

            <
            /Card>
        )
    })

    return ( <
        div > {
            /* <CardDeck>
                        <Card bg="secondary" text="white" className="text-center" style={{margin: '10px'}}>
                            <Card.Body>
                            <Card.Title>Cases</Card.Title>
                            <Card.Text>
                                {getData.cases}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small >Last updated {new Date(getData.updated).toDateString()}</small>
                            </Card.Footer>
                        </Card>
                        <Card bg="danger" text={"white"} style={{margin: '10px'}}>
                            <Card.Body>
                            <Card.Title>Death</Card.Title>
                            <Card.Text>
                                {getData.deaths}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small >Last updated {new Date(getData.updated).toDateString()}</small>
                            </Card.Footer>
                        </Card>
                        <Card bg="warning" text="white" style={{margin: '10px'}}>
                            <Card.Body>
                            <Card.Title>Recovered</Card.Title>
                            <Card.Text>
                                {getData.recovered}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small >Last updated {new Date(getData.updated).toDateString()}</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck> */
        } <
        br / >
        <
        Form >
        <
        Form.Group controlId = "formGroupSearch" >
        <
        Form.Label > < h2 > Search Country < /h2></Form.Label >
        <
        Form.Control type = "text"
        placeholder = "Search Country"
        onChange = { e => setSearchCountry(e.target.value) }
        /> <
        /Form.Group> <
        /Form> <
        CardColumns > { countries } <
        /CardColumns>

        <
        /div>
    )
}

export default CountryCardDisplay;
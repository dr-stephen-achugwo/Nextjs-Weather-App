import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Spain from "../Components/Spain";
import WeatherCard from "../Components/WeatherCard";
import Styles from "../styles/Home.module.css";
export default function Home() {
  const [search, setsearch] = useState("Tehran");
  const [loading, setloading] = useState(false);
  const [weather, setweather] = useState({});
  const [error, seterror] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`;
  const FeachWeather = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .get(url)
      .then((Response) => {
        setweather(Response.data);
        setloading(false);
      })
      .catch((Error) => {
        seterror(true);
      })
      .then(() => {
        seterror(false);
      });
  };
  const ChangeSearchHandler = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/rainy-day.png" />
      </Head>
      <main>
        <div className={Styles.overlay} />
        <Image
          alt=""
          className={Styles.background}
          layout="fill"
          placeholder="empty"
          src="https://images.unsplash.com/photo-1536532184021-da5392b55da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />

        <div className="container">
          <Row>
            <Col lg={6} className="offset-lg-3 mb-0 mb-lg-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className={`${Styles.Titel} mt-5`}
              >
                global Weather-Watch
              </h1>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1100"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className={`${Styles.MainForm} mt-3`}
              >
                <form onSubmit={FeachWeather} className={Styles.Form}>
                  <div>
                    <input
                      onChange={ChangeSearchHandler}
                      placeholder="enter name of City"
                    />
                  </div>
                  <button defaultChecked onClick={FeachWeather}>
                    <BsSearch />
                  </button>
                </form>
              </div>
              {error ? (
                <p className="text-white">
                  Please Enter Valid City or Check Spell
                </p>
              ) : (
                ""
              )}
            </Col>
          </Row>

          <Row>
            <Col
              lg={6}
              className="  offset-lg-3 d-flex justify-content-center align-items-center"
            >
              {loading ? (
                <Spain />
              ) : (
                weather.main && <WeatherCard data={weather} />
              )}
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

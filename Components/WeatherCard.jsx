import Image from "next/image";
import Style from "../styles/Home.module.css";
import { FaLocationArrow } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
function WeatherCard({ data }) {
  return (
    <div className="d-flex flex-column w-100">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        className={`position-relative w-100 d-flex justify-content-between text-white custom  pb-3 px-2 rounded `}
      >
        <div className=" position-relative d-flex justify-content-center align-items-center flex-column">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            width="150"
            height="150"
            alt=""
          />
          <h5 className="position-absolute bottom-0">{data.weather[0].main}</h5>
        </div>
        <div className="w-50  text-end d-flex  me-3 align-items-end justify-content-end flex-column ">
          <div className="d-flex me-1 me-md-4">
            <span className="me-2">
              <FaLocationArrow />
            </span>
            <h4 className="">{data.name}</h4>
          </div>
          <h1 className=" fw-bold display-1">
            {data.main.temp.toFixed()}&#176;
          </h1>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        className={`${Style.Bacground}  mx-auto rounded p-4 mt-2 text-white d-flex align-items-center justify-content-between `}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4>{data.main.feels_like.toFixed()}&#176;</h4>
          <p className="mb-0">Feels Like</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4>{data.main.humidity.toFixed()}%</h4>
          <div className="d-flex align-items-center">
            <p className="mb-0">Humidity</p>
            <WiHumidity fontSize="30px" />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4>{data.wind.speed.toFixed()} MPH</h4>
          <div className="d-flex align-items-center">
            <p className="mb-0 me-2">Winds</p>
            <FaWind fontSize="20px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

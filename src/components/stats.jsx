import React, { useEffect, useRef } from "react";
import "../style/style.css";

const Stats = () => {
  const counters = useRef([]);

  useEffect(() => {
    const countTo = (element, options) => {
      const settings = { ...countTo.defaults, ...options };
      settings.from = element.dataset.from || settings.from;
      settings.to = element.dataset.to || settings.to;
      settings.speed = element.dataset.speed || settings.speed;
      settings.refreshInterval =
        element.dataset.refreshInterval || settings.refreshInterval;
      settings.decimals = element.dataset.decimals || settings.decimals;

      let loops = Math.ceil(settings.speed / settings.refreshInterval);
      let increment = (settings.to - settings.from) / loops;
      let loopCount = 0;
      let value = settings.from;

      const intervalId = setInterval(updateTimer, settings.refreshInterval);
      element.dataset.countToInterval = intervalId;

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate === "function") {
          settings.onUpdate.call(element, value);
        }

        if (loopCount >= loops) {
          clearInterval(intervalId);
          delete element.dataset.countToInterval;
          value = settings.to;

          if (typeof settings.onComplete === "function") {
            settings.onComplete.call(element, value);
          }
        }
      }

      function render(value) {
        const formattedValue = settings.formatter(value, settings);
        element.innerHTML = formattedValue;
      }
    };

    countTo.defaults = {
      from: 0,
      to: 0,
      speed: 1000,
      refreshInterval: 100,
      decimals: 0,
      formatter: (value, settings) => value.toFixed(settings.decimals),
      onUpdate: null,
      onComplete: null,
    };

    const counterElements = document.querySelectorAll(".count-number");

    counterElements.forEach((element) => {
      const options = {
        formatter: (value, options) =>
          value
            .toFixed(options.decimals)
            .replace(/\B(?=(?:\d{3})+(?!\d))/g, ","),
      };

      countTo(element, options);
    });
  }, []);

  return (
    <div className="container my-5 mb-5 mt-5">
      <div className="row text-center mt-5">
        <div className="col">
          <div className="counter">
            <i class="bi bi-people text-danger"></i>
            <h2
              className="timer count-title count-number fw-bold"
              data-to={10000}
              data-speed={2000}
              style={{ color: "#1e293b" }}
            />
            <p className="count-text text-secondary text-secondary">
              Enrolled Students
            </p>
          </div>
        </div>
        <div className="col">
          <div className="counter">
            <i class="bi bi-code-slash" style={{ color: "#3366cc" }}></i>
            <h2
              className="timer count-title count-number fw-bold"
              data-to={500}
              data-speed={2000}
              style={{ color: "#1e293b" }}
            />
            <p className="count-text text-secondary">Courses Offered</p>
          </div>
        </div>
        <div className="col">
          <div className="counter">
            <i class="bi bi-file-earmark-code text-warning"></i>
            <h2
              className="timer count-title count-number fw-bold"
              data-to={4500}
              data-speed={2000}
              style={{ color: "#1e293b" }}
            />
            <p className="count-text text-secondary ">Project Completion</p>
          </div>
        </div>
        <div className="col">
          <div className="counter">
            <i class="bi bi-globe" style={{ color: "#15c768" }}></i>
            <h2
              className="timer count-title count-number fw-bold"
              data-to={8000}
              data-speed={2000}
              style={{ color: "#1e293b" }}
            />
            <p className="count-text text-secondary ">Global Alumni</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

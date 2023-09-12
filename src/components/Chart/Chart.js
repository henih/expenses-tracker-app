import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  // Get a value of arrays, to map it and transform them from objects to numbers, it will return a new array made up only of numbers
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues); // Finds the maximum value within dataPointValues, and add them as twelve arguments instead of an array with the spread operator

  return (
    <div className="chart">
      {props.dataPoints.map(
        (
          dataPoint // Map every single datapoints in the array and mapping all of them to a ChartBar
        ) => (
          <ChartBar // Pass some datapoints to ChartBar to control what is displayed in it.
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        )
      )}
    </div>
  );
}

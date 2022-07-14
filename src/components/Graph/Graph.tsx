// lib
import "chartjs-adapter-moment";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import {
  Chart,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartOptions,
} from "chart.js";

// src
import { graphDataType } from "./types";

Chart.register(TimeScale, LinearScale, PointElement, LineElement, Filler);

const options: ChartOptions<"line"> = {
  responsive: true,
  scales: {
    x: {
      type: "time",
      time: {
        unit: "hour",
        stepSize: 3,
      },
    },
    y: {
      display: false,
    },
  },
  plugins: {
    datalabels: {
      formatter: (val, context) => {
        if ((context.dataIndex + 1) % 3 === 0 || context.dataIndex === 0)
          return val.y;
        else return null;
      },
      align: "top",
      offset: 15,
      labels: {
        value: {
          color: "white",
        },
      },
    },
  },
};
export const Graph = ({ data }: graphDataType) => {
  return <Line options={options} data={data} plugins={[ChartDataLabels]} />;
};
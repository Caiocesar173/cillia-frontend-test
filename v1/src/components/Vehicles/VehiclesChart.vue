<template>
  <highcharts
    class="hc"
    :options="chartOptions"
    :highcharts="hcInstance"
    ref="chart"
  ></highcharts>
</template>

<script>
import Highcharts from "highcharts";
import assemblers from "@/assets/data/assemblers";

export default {
  name: "VehiclesChart",

  data() {
    return {
      hcInstance: Highcharts,
      chartOptions: {
        legend: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        chart: {
          type: assemblers.chartType,
          height: 270,
        },
        title: {
          text: "",
        },
        xAxis: {
          tickColor: "#FFFFF",
          categories: assemblers.categories,
        },
        yAxis: {
          startOnTick: true,
          tickPositions: [0, 10, 20, 30],
          title: {
            text: assemblers.title.axis,
          },
          labels: {
            format: "{value}%",
          },
        },

        plotOptions: {
          areaspline: {
            fillOpacity: 0.5,
          },
          area: {
            fillColor: {
              linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
              stops: [
                [0, "#ed323726"], // start
                [1, "#ed3237b3"], // end
              ],
            },
          },
        },

        series: [
          {
            color: "#ED3237",
            name: assemblers.title.series,
            data: assemblers.seriesData,
          },
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 790,
              },
              chartOptions: {
                series: [
                  {
                    size: "100%",
                    center: ["50%", "50%"],
                  },
                ],
              },
            },
          ],
        },
      },
    };
  },
};
</script>

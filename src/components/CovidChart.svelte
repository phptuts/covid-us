<script>
  import { onDestroy, onMount } from "svelte";
  import Chart from "chart.js";
  import moment from "moment";
  export let historicData;
  export let title;
  let lineChart;
  let hideChart = false;
  let noHistoricData = false;
  let isMount = false;
  let chart;

  const createDataSet = () => {
    return [
      {
        label: "Cases",
        data: historicData.map(data => {
          return {
            x: moment(data.date, "YYYYMMDD"),
            y: data.positive
          };
        }),
        fill: false,
        borderColor: "rgb(100, 0, 200)"
      },
      {
        label: "Recovered",
        data: historicData.map(data => {
          return {
            x: moment(data.date, "YYYYMMDD"),
            y: data.recovered
          };
        }),
        fill: false,
        borderColor: "rgb(100, 100, 200)"
      },
      {
        label: "Total Tested ",
        data: historicData.map(data => {
          return {
            x: moment(data.date, "YYYYMMDD"),
            y: data.totalTestResults
          };
        }),
        fill: false,
        borderColor: "rgb(10, 30, 100)"
      },
      {
        label: "Hospitalized Currently ",
        data: historicData.map(data => {
          return {
            x: moment(data.date, "YYYYMMDD"),
            y: data.hospitalizedCurrently
          };
        }),
        fill: false,
        borderColor: "rgb(20, 100, 230)"
      },
      {
        label: "Deaths",
        data: historicData.map(data => {
          return {
            x: moment(data.date, "YYYYMMDD"),
            y: data.death
          };
        }),
        fill: false,
        borderColor: "rgb(255, 99, 132)"
      }
    ].filter(data => {
      return (
        data.data.filter(point => point.y !== null && point.y !== undefined)
          .length > 4
      );
    });
  };

  const createChart = () => {
    chart = new Chart(lineChart.getContext("2d"), {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        datasets: createDataSet()
      },

      // Configuration options go here
      options: {
        responsive: true,
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || "";

              if (label) {
                label += ": ";
              }

              label += tooltipItem.yLabel.toLocaleString();
              return label;
            }
          }
        },
        title: {
          display: true,
          text: title
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                parser: "M/D/YY",
                tooltipFormat: "ll"
              },
              scaleLabel: {
                display: true,
                labelString: "Date"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true
              },
              ticks: {
                beginAtZero: true,
                userCallback: function(value, index, values) {
                  return value.toLocaleString();
                }
              }
            }
          ]
        }
      }
    });
  };

  onMount(() => {
    if (historicData && document.body.clientWidth > 680) {
      createChart();
      return;
    }

    if (historicData.length == 0) {
      noHistoricData = true;
    }

    hideChart = true;
  });

  onDestroy(() => {
    if (chart) {
      chart.destroy();
    }
  });
</script>

{#if !hideChart}
  <div class="container">
    <canvas bind:this={lineChart} />
  </div>
{/if}

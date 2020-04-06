<script context="module">
  import {
    getBasicData,
    getStatesData,
    getUsHistoricData
  } from "../data/requests.js";

  export async function preload(page) {
    try {
      const basicData = await getBasicData();
      const stateData = await getStatesData();
      const usHistoricData = await getUsHistoricData();
      return { basicData, stateData, usHistoricData };
    } catch (e) {}
  }
</script>

<script>
  import CovidInfo from "../components/CovidInfo.svelte";
  import TableContainer from "../components/TableContainer.svelte";
  import CovidChart from "../components/CovidChart.svelte";

  export let basicData;
  export let stateData;
  export let usHistoricData;
</script>

<svelte:head>
  <title>Covid 19 Tracker</title>
</svelte:head>

<div class="container">
  <h1>Covid 19 / US</h1>
</div>

<CovidInfo {...basicData} />
<CovidChart title="US Covid-19" historicData={usHistoricData} />
<TableContainer data={stateData} />

<script context="module">
  import {
    getBasicData,
    getStateData,
    getHistoricStateData
  } from "../data/requests.js";
  import stateNames from "../data/stateNames.js";

  export async function preload(page) {
    const state = page.params["state"];
    if (stateNames.find(s => s.abbreviation === state) === undefined) {
      this.error(404, "State Not Found");
      return;
    }

    try {
      const stateData = await getStateData(state);
      const historicData = await getHistoricStateData(state);
      return { stateData, historicData };
    } catch (e) {
      this.error(
        500,
        "There was an error in calling the api, please try again in 5 minutes."
      );
    }
  }
</script>

<script>
  import CovidInfo from "../components/CovidInfo.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  export let stateData;
  export let historicData;
</script>

<svelte:head>
  <title>Covid 19 Tracker - {stateData.fullStateName}</title>
</svelte:head>

<div class="container">
  <h1>{stateData.fullStateName}</h1>
</div>
<CovidInfo {...stateData} />
<CovidChart title=" Covid-19 / {stateData.fullStateName}" {historicData} />

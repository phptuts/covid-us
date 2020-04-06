<script>
  import moment from "moment";
  import { formatNumber } from "../data/format.js";
  export let positive;
  export let death;
  export let recovered;
  export let hospitalizedCurrently;
  export let onVentilatorCurrently;
  export let inIcuCurrently;
  export let lastModified;
  export let totalTestResults;
</script>

<style>
  .columns {
    border: solid 1px black;
  }
</style>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="column is-3">Cases: {formatNumber(positive)}</h2>
      <h2 class="column is-3">Deaths: {formatNumber(death)}</h2>
      <h2 class="column is-3">Recovered: {formatNumber(recovered)}</h2>
      <h2 class="column is-3">
        Updated: {moment(lastModified).format('LLLL')}
      </h2>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="column is-3">Tested: {formatNumber(totalTestResults)}</h2>
      <h2 class="column is-3">
        Currently Hospitals: {formatNumber(hospitalizedCurrently)}
      </h2>
      <h2 class="column is-3">
        Currently Ventilators: {formatNumber(onVentilatorCurrently)}
      </h2>
      <h2 class="column is-3">
        Currently ICUs: {formatNumber(inIcuCurrently)}
      </h2>
    </div>
  </div>
</div>

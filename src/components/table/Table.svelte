<script>
  import { formatNumber } from "../../data/format.js";

  export let states = [];
</script>

<style>
  table {
    width: 100%;
  }
  .section {
    padding: 0.5rem 1.5rem;
  }
</style>

<div class="section">
  <div class="container">
    <table class="table is-bordered is-striped">
      <thead>
        <tr>
          <th>State</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Total Tested</th>
        </tr>
      </thead>
      <tbody>
        {#each states as state (state.state)}
          <tr>
            <td>
              <a href={state.state}>{state.fullStateName}</a>
            </td>
            <td>{formatNumber(state.positive)}</td>
            <td>{formatNumber(state.death)}</td>
            <td>{formatNumber(state.totalTestResults)}</td>
          </tr>
        {/each}
      </tbody>

    </table>
  </div>

</div>

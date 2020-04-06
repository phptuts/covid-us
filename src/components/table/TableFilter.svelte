<script>
  export let stateName = "";
  export let sortBy = "name";
</script>

<style>
  input,
  .select,
  select {
    width: 100%;
  }
  .column {
    padding-left: 0;
  }
</style>

<div class="section">

  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <div class="control">
          <input
            bind:value={stateName}
            class="input"
            type="text"
            placeholder="Filter States" />
        </div>
      </div>
      <div class="column is-6">

        <div class="select">
          <select bind:value={sortBy}>
            <option value="name">By State Name</option>
            <option value="positive">Cases</option>
            <option value="death">Deaths</option>
            <option value="totalTestResults">Total Tested</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

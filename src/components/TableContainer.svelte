<script>
  import Table from "./table/Table.svelte";
  import TableFilter from "./table/TableFilter.svelte";
  export let data = [];
  let stateName = "";
  let sortBy = "name";
  $: states = filterAndSortState(data, stateName, sortBy);

  function filterAndSortState(states, stateName, sortBy) {
    const filteredStates = states.filter(
      state =>
        stateName === "" ||
        state.fullStateName.toLowerCase().indexOf(stateName.toLowerCase()) > -1
    );

    if (sortBy !== "name") {
      return filteredStates.sort((a, b) => {
        return +b[sortBy] - +a[sortBy];
      });
    }

    return filteredStates.sort((a, b) =>
      a.fullStateName.localeCompare(b.fullStateName)
    );
  }
</script>

<TableFilter bind:stateName bind:sortBy />

<Table {states} />

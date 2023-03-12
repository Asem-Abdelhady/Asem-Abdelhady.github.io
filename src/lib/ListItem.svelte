<script lang="ts">
  import type { IListItem } from "../interfaces/ListItem";
  export let listItem: IListItem;
</script>

<li>
  <span class="span-title">{listItem.title} </span>
  <span class="span-content">{@html listItem.content}</span>
</li>

<style>
  .span-title {
    font-size: larger;
    font-weight: bolder;
  }
  .span-content {
    font-size: large;
  }
  li {
    margin-top: 10px;
  }
</style>

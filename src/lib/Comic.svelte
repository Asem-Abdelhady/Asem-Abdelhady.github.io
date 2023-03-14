<script lang="ts">
  import type { IComic } from "../interfaces/Comic";

  const EMAIL = "a.abdelhady@innopolis.university";
  const ID_BASE_URL = "https://fwd.innopolis.app/api/hw2";
  const COMIC_BASE_URL = "https://getxkcd.vercel.app/api/comic";

  const getID: () => Promise<number> = async () => {
    let res = await fetch(ID_BASE_URL + `?email=${EMAIL}`);
    let resBody: number = await res.json();
    return resBody;
  };

  const getComic: () => Promise<IComic> = async () => {
    let id = await getID();
    let res = await fetch(COMIC_BASE_URL + `?num=${id}`);
    let resBody: IComic = await res.json();
    return resBody;
  };
</script>

{#await getComic()}
  <p>Fetching the data !!</p>
{:then comic}
  <div id="comic">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img id="img" src={comic.img} />
    <div>
      <span class="span-title">Title: </span>
      <span class="span-content" id="comic_title">{comic.title}</span>
    </div>
    <div>
      <span class="span-title">Date: </span>
      <span class="span-content" id="date_content"
        >{new Date(
          parseInt(comic.year),
          parseInt(comic.month) - 1,
          parseInt(comic.day)
        ).toLocaleDateString()}</span
      >
    </div>
    <div>
      <span class="span-title">Img alt: </span>
      <span class="span-content" id="img_alt_content">{comic.alt}</span>
    </div>
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  .span-title {
    font-size: larger;
    font-weight: bolder;
  }
  .span-content {
    font-size: large;
  }

  #comic {
    display: flex;
    margin: 25px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }

  #comic > div {
    margin: 5px;
  }
</style>

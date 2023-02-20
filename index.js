const dateContentSpan = document.getElementById("date_content");
const comicTitleSpan = document.getElementById("comic_title");
const imgAltContentSpan = document.getElementById("img_alt_content");
const img = document.getElementById("img");

const EMAIL = "a.abdelhady@innopolis.university";
const ID_BASE_URL = "https://fwd.innopolis.app/api/hw2";
const COMIC_BASE_URL = "https://getxkcd.vercel.app/api/comic";
const URL_PARAMS = new URLSearchParams(ID_BASE_URL.search);

URL_PARAMS.append("email", EMAIL);

const getID = async () => {
  let queryURL = URL_PARAMS.toString();
  res = await fetch(ID_BASE_URL + `?email=${EMAIL}`);
  resBody = await res.json();
  return resBody;
};

const getComic = async () => {
  let id = await getID();
  res = await fetch(COMIC_BASE_URL + `?num=${id}`);
  resBody = await res.json();
  console.log(resBody);
  return resBody;
};

getComic();

const updateHtml = async () => {
  res = await getComic();
  let imgSrc = res.img;
  let title = res.title;
  let alt = res.alt;
  let content = res.transcript;
  let date = new Date(Date.UTC(res.year, res.month, res.day));

  date.toLocaleDateString();
  img.src = imgSrc;
  img.alt = alt;
  comicTitleSpan.innerText = title;
  imgAltContentSpan.innerText = alt;
  dateContentSpan.innerText = date;
};

updateHtml();

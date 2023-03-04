interface IId {
  id: number;
}
interface IComic {
  month: number;
  num: number;
  link: string;
  year: number;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: number;
}

const dateContentSpan = document.getElementById(
  "date_content"
) as HTMLSpanElement;
const comicTitleSpan = document.getElementById(
  "comic_title"
) as HTMLSpanElement;
const imgAltContentSpan = document.getElementById(
  "img_alt_content"
) as HTMLSpanElement;
const img = document.getElementById("img") as HTMLImageElement;

const EMAIL = "a.abdelhady@innopolis.university";
const ID_BASE_URL = "https://fwd.innopolis.app/api/hw2";
const COMIC_BASE_URL = "https://getxkcd.vercel.app/api/comic";

const getID: () => Promise<IId> = async () => {
  let res = await fetch(ID_BASE_URL + `?email=${EMAIL}`);
  let resBody: IId = await res.json();
  return resBody;
};

const getComic: () => Promise<IComic> = async () => {
  let id = await getID();
  let res = await fetch(COMIC_BASE_URL + `?num=${id}`);
  let resBody: IComic = await res.json();
  return resBody;
};

const updateHtml = async () => {
  let res = await getComic();
  let imgSrc = res.img;
  let title = res.title;
  let alt = res.alt;
  let date: Date = new Date(res.year, res.month + 1, res.day);

  img.src = imgSrc;
  img.alt = alt;
  comicTitleSpan.innerText = title;
  imgAltContentSpan.innerText = alt;
  dateContentSpan.innerText = date.toLocaleDateString();
};

updateHtml();

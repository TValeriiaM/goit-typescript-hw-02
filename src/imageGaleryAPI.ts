import axios from "axios";
import {Params} from "./components/App/App.types"

axios.defaults.baseURL = "https://api.unsplash.com/";

export async function getImage<T>(queryImg: string, currentPage: number): Promise<T> {
  const params: Params = {
    client_id: "GIFbwAnSfCf7IRv1Dlrlc49IYMp_y3KRvQCshSdzc1c",
    query: queryImg,
    orientation: "landscape",
    page: currentPage,
    per_page: 12,
  };

  const res = await axios.get<T>("search/photos", { params });
  return res.data;
}

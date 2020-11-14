import qs from "querystring";
import Axios from "axios";
import { IForecast } from "src/types/IForecast";

const MID_DAY = "12:00:00";

function transformResponse(data: IForecast) {
  // as this api returns the 3 hour/temperature, I'll get just midday ones
  const allMidDaysTemperatures = data.list.filter((info) =>
    info.dt_txt?.includes(MID_DAY)
  );

  return { ...data, list: allMidDaysTemperatures };
}

export async function fetchFromOpenWatherMap(
  localeName?: string,
  cityId?: string
) {
  const params = {
    q: localeName,
    id: cityId,
    units: "metric",
    appid: process.env.OPEN_WEATHER_KEY,
  };

  if (Number(cityId)) {
    delete params.q;
  }

  if (localeName) {
    delete params.id;
  }

  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?${qs.stringify(
    params
  )}`;

  const request = await Axios.get<IForecast>(endpoint);

  return transformResponse(request.data);
}

import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { IForecast } from "src/types/IForecast";
import qs from "querystring";
const MID_DAY = "12:00:00";

function transformResponse(data: IForecast) {
  // as this api returns the 3 hour/temperature, I'll get just midday ones
  const allMidDaysTemperatures = data.list.filter((info) =>
    info.dt_txt?.includes(MID_DAY)
  );

  return { ...data, list: allMidDaysTemperatures };
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const localeName = req.query.city;

    if (!localeName) {
      throw new Error("Invalid params");
    }

    const params = {
      q: localeName,
      units: "metric",
      appid: process.env.OPEN_WEATHER_KEY,
    };

    const endpoint = `https://api.openweathermap.org/data/2.5/forecast?${qs.stringify(
      params
    )}`;

    const request = await Axios.get<IForecast>(endpoint);

    res.json(transformResponse(request.data));
  } catch (error) {
    res.status(400);
    res.send(null);
  }
};

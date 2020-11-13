import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { IForecast } from "src/types/IForecast";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const localeName = req.query.city;

    if (!localeName) {
      throw new Error("Invalid params");
    }

    const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${localeName}&appid=${process.env.OPEN_WEATHER_KEY}`;

    const request = await Axios.get<IForecast>(endpoint);

    res.json(request.data);
  } catch (error) {
    res.status(400);
    res.send(null);
  }
};

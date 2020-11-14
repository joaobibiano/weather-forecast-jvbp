import { NextApiRequest, NextApiResponse } from "next";
import { fetchFromOpenWatherMap } from "src/services/openWeatherMap";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const localeName = req.query.city;

    if (!localeName) {
      throw new Error("Invalid params");
    }

    res.json(await fetchFromOpenWatherMap(localeName as string));
  } catch (error) {
    res.status(400);
    res.send(null);
  }
};

export const getImageBasedOnCondition = (
  mainCondition: string,
  todayImage?: boolean
) => {
  const CloudImage = "/images/cloud.png";
  const IceImage = "/images/ice.png";
  const SunImage = "/images/sun.png";
  const RainImage = "/images/rain.png";
  const Thunderstorm = "/images/thunderstorm.png";

  const defaultHeigth = todayImage ? 150 : 85;

  const forecastConfiguration = {
    Clouds: {
      path: CloudImage,
      width: todayImage ? 150 : 120,
      height: todayImage ? 90 : 70,
    },
    Clear: {
      path: SunImage,
      width: todayImage ? 160 : 90,
      height: defaultHeigth,
    },
    Snow: {
      path: IceImage,
      width: todayImage ? 200 : 130,
      height: defaultHeigth,
    },
    Rain: {
      path: RainImage,
      width: todayImage ? 170 : 100,
      height: defaultHeigth,
    },
    Drizzle: {
      path: RainImage,
      width: todayImage ? 170 : 100,
      height: defaultHeigth,
    },
    Thunderstorm: {
      path: Thunderstorm,
      width: todayImage ? 1200 : 100,
      height: defaultHeigth,
    },
  };

  return forecastConfiguration[mainCondition] || Thunderstorm;
};

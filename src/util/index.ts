export const getImageBasedOnCondition = (mainCondition: string) => {
  const CloudImage = "/images/cloud.png";
  const IceImage = "/images/ice.png";
  const SunImage = "/images/sun.png";
  const RainImage = "/images/rain.png";
  const Thunderstorm = "/images/thunderstorm.png";

  const forecastConfiguration = {
    Clouds: {
      path: CloudImage,
      width: 230,
      height: 150,
    },
    Clear: {
      path: SunImage,
      width: 160,
      height: 150,
    },
    Snow: {
      path: IceImage,
      width: 150,
      height: 150,
    },
    Rain: {
      path: RainImage,
      width: 150,
      height: 150,
    },
    Drizzle: {
      path: RainImage,
      width: 150,
      height: 150,
    },
    Thunderstorm: {
      path: Thunderstorm,
      width: 150,
      height: 150,
    },
  };

  return forecastConfiguration[mainCondition] || Thunderstorm;
};

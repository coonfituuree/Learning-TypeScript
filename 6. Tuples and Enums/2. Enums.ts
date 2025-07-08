enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Down);

enum WeatherCondition {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

const currentWeather = WeatherCondition.Cloudy;
console.log(`The current weather is ${currentWeather}`);
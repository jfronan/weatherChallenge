const apiKey = 'c55c267eac635fb2c4d8ac41bc4f849e';

export const consultWeather = async (ciudad, pais) => {
    var queryValues = ciudad + (pais !== '' ? (',' + pais) : '');
    console.log(`http://.openweathermap.org/data/2.5/weather?q=${queryValues}&appid=${apiKey}`);
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${queryValues}&appid=${apiKey}`)
    const json = await response.json();
    return json;
}

export const consultWeatherById = async (cityId) => {
    console.log(`http://.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`);
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`)
    const json = await response.json();
    return json;
}

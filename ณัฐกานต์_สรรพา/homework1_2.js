console.log("axios");

function reCoveredCase(arr) {
  console.log("arr : ", arr);
  const reCoveredCases = arr.map((item) => {
    return item.todayRecovered;
  });
  console.log("reCoveredCases : ", reCoveredCases);

  let todayRecoveredCases = reCoveredCases
    .filter((k) => {
      return k > 0;
    })
    .reduce((sum, i) => {
      console.log("sum + item :", sum + i);
      return sum + i;
    });
  console.log("todayRecoveredCases :", todayRecoveredCases);
  return todayRecoveredCases;
}

function todayDeathCountry(arr) {
  const todayDeathCountries = arr
    .filter((item) => {
      return (item.todayDeaths < 10) & (item.population >= 100000000);
    })
    .map((item) => {
      return item.country;
    });

  console.log("todayDeathCountries :", todayDeathCountries);
  return todayDeathCountries;
}

async function covidData(allCovidData) {
  const url = "https://dev.codekit.co/devcamp-api/covid-country.txt";
  try {
    const response = await axios.get(url);
    console.log(response);
    let allCovidData = response.data;
    console.log("allCovidData :", allCovidData);
    reCoveredCase(allCovidData);
    todayDeathCountry(allCovidData);
    return;
  } catch (error) {
    console.error(error);
  }
}
covidData();

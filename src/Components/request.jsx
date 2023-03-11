const key='c086b6db8ad44afc9dbf8a72467356cb';

const request={
    everything:`https://newsapi.org/v2/everything?q=Apple&from=2023-03-11&sortBy=popularity&apiKey=${key}`,
     headline:`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`,
     sports:`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${key}`,
     business:`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`,
     entertainment:`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${key}`,
     general:`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${key}`,
     health:`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`,
     science:`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${key}`,
}

export default request
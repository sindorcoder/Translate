import axios from "axios";

const apiInstance = axios.create({
     baseURL: "https://google-translator9.p.rapidapi.com/",
     headers: {
          'x-rapidapi-key': '216aaa2687msh91ec62caa74c1a8p1888b2jsnd4414ee7bbf9',
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          "Content-Type": "application/json"
     },
     timeout: 100000

});

export default apiInstance
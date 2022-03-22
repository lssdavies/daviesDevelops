import meme from "../../assets/images/meme-logo.png";
import memeapp from "../../assets/images/memeOHgram.png";
import icocina from "../../assets/images/iCocinaLogo.png";
import icocinaapp from "../../assets/images/icocina.PNG";
import decrypto from "../../assets/images/decryptoLogo2.png";
import decryptoapp from "../../assets/images/deCrypto.png";

//array to store project data
export const projects = [
  {
    title: "meme-OH-gram",
    description:
      "meme-OH-gram is a MERN Stack application that allows users to create memes and save them to their profile. The backend is powered by Node, Express, Mongoose GraphQL and Apollo Server while the frontend utilizes React, Bootstrap and CSS. This was a joint collaboration and I was responsilbe for the creation of the meme generator component and linking it to the backend.",
    deploy: "https://meme-oh-gram.herokuapp.com/",
    repo: "https://github.com/kimberlyamaya/meme-OH-gram",
    logo: meme,
    image: memeapp,
  },
  {
    title: "iCocina",
    description:
      "iCocina is a Full Stack application that allows users to search for recipes by cuisine type, difficulty level or both. Users can create accounts to comment on receipes and save recipes to there profile. The backend is powered by Node, Express, MySQL and Sequelize while the frontend utilizes JavaScript, Handlebars and CSS. This was a joint collaboration and I was responsilbe for the UI design of the application.",
    deploy: "https://icocina.herokuapp.com/",
    repo: "https://github.com/kimberlyamaya/iCocina",
    logo: icocina,
    image: icocinaapp,
  },
  {
    title: "deCrypto",
    description:
      "deCrypto is a Frontend application that utilizes a Server-Side API to dynamicly generate crypto currency data for its users. The app allows users to look up the top 5 currencies and calculate their buying power for each.This app was built using HTML, CSS and JavaScript. This was a joint collaboration and I was responsilbe for the UI design of the application.",
    deploy: "https://lssdavies.github.io/deCrypto/",
    repo: "https://github.com/lssdavies/deCrypto",
    logo: decrypto,
    image: decryptoapp,
  },
];

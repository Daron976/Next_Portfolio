import { BiLogoJavascript } from "react-icons/bi";
import { SiJest } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiRubygems } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiTestinglibrary } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiRuby } from "react-icons/si";
import { BiLogoHtml5 } from "react-icons/bi";
import { DiSass } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import { BiLogoReact } from "react-icons/bi";
import { SiSwagger } from "react-icons/si";

export const emailExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const projectData = [
  {
    title: "QuickMaths",
    description:
      "This is a Full stack web application with a Ruby on Rails back-end and a React front-end. This application allows users to make reservations to schedule appointments with Math tutors.",
    card: "awesomeTutors",
    imgURL:
      "https://raw.githubusercontent.com/Daron976/portfolio/main/images/awesomeTutors.png",
    value: 1,
    display: true,
    width: 500,
    heigth: 280,
    src: "Daron976/portfolio/main/images/awesomeTutors.png",
    technologies: [
      { icon: <SiRuby />, link: "https://www.ruby-lang.org/en/" },
      { icon: <SiRubyonrails />, link: "https://rubyonrails.org/" },
      { icon: <BiLogoReact />, link: "https://react.dev/" },
      { icon: <SiRedux />, link: "https://react-redux.js.org/" },
      {
        icon: <BiLogoJavascript />,
        link: "https://www.javascript.com/",
      },
      { icon: <BiLogoHtml5 />, link: "https://html.com/" },
      { icon: <DiSass />, link: "https://sass-lang.com/" },
      { icon: <SiRubygems />, link: "https://rubygems.org/" },
      {
        icon: <SiTestinglibrary />,
        link: "https://testing-library.com/",
      },
      // { icon: rspec, link: "https://rspec.info/",  },
      { icon: <SiSwagger />, link: "https://swagger.io/" },
      {
        icon: <TbBrandVscode />,
        link: "https://code.visualstudio.com/",
      },
    ],
    live: "https://quickmaths145.netlify.app/",
    source: "https://github.com/laiifuu/QuickMaths-BackEnd",
  },
  {
    title: "PicTweak",
    description:
      "This is a filter application that allows users to edit an image with various filter options and download said image.",
    card: "picTweak",
    imgURL:
      "https://raw.githubusercontent.com/Daron976/portfolio/main/images/pictweak.png",
    value: 2,
    display: false,
    width: 500,
    heigth: 280,
    src: "Daron976/portfolio/main/images/pictweak.png",
    technologies: [
      { icon: <BiLogoReact />, link: "https://react.dev/" },
      {
        icon: <BiLogoJavascript />,
        link: "https://www.javascript.com/",
      },
      { icon: <BiLogoHtml5 />, link: "https://html.com/" },
      {
        icon: <SiCss3 />,
        link: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
      // { icon: fabricjs, link: "http://fabricjs.com/", },
      {
        icon: <SiTestinglibrary />,
        link: "https://testing-library.com/",
      },
      { icon: <SiJest />, link: "https://jestjs.io/" },
      {
        icon: <TbBrandVscode />,
        link: "https://code.visualstudio.com/",
      },
    ],
    live: "https://daron976.github.io/Pic-Tweak/",
    source: "https://github.com/Daron976/Pic-Tweak",
  },
  {
    title: "Forenomic",
    description:
      "This is a full stack Ruby on Rails application with authorization and authentification. This application allows users to track their spending during a period of time by making an account of all transactions in various categories.",
    card: "forenomic",
    imgURL:
      "https://raw.githubusercontent.com/Daron976/portfolio/main/images/forenomic.png",
    value: 3,
    display: false,
    width: 320,
    heigth: 280,
    src: "Daron976/portfolio/main/images/forenomic.png",
    technologies: [
      { icon: <SiRuby />, link: "https://www.ruby-lang.org/en/" },
      { icon: <SiRubyonrails />, link: "https://rubyonrails.org/" },
      { icon: <BiLogoHtml5 />, link: "https://html.com/" },
      {
        icon: <SiCss3 />,
        link: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
      { icon: <SiRubygems />, link: "https://rubygems.org/" },
      // { icon: rspec, link: "https://rspec.info/", },
      {
        icon: <TbBrandVscode />,
        link: "https://code.visualstudio.com/",
      },
    ],
    live: "https://forenomic.onrender.com/",
    source: "https://github.com/Daron976/Forenomic",
  },
  {
    title: "Currex",
    description:
      "This is a currency exchange app that allows users to convert the currency of any country to the another currency while providing data about the country in question.",
    card: "currex",
    imgURL:
      "https://raw.githubusercontent.com/Daron976/portfolio/main/images/currex.png",
    value: 4,
    display: false,
    width: 500,
    heigth: 280,
    src: "Daron976/portfolio/main/images/currex.png",
    technologies: [
      { icon: <BiLogoReact />, link: "https://react.dev/" },
      { icon: <SiRedux />, link: "https://react-redux.js.org/" },
      {
        icon: <BiLogoJavascript />,
        link: "https://www.javascript.com/",
      },
      { icon: <BiLogoHtml5 />, link: "https://html.com/" },
      {
        icon: <SiCss3 />,
        link: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
      {
        icon: <SiTestinglibrary />,
        link: "https://testing-library.com/",
      },
      { icon: <SiJest />, link: "https://jestjs.io/" },
      {
        icon: <TbBrandVscode />,
        link: "https://code.visualstudio.com/",
      },
    ],
    live: "https://currex976.netlify.app/",
    source: "https://github.com/Daron976/currency-ex",
  },
  {
    title: "BookShelf",
    description:
      "In this project, I use react to create a single-page app for a Bookshelf that enables users to add or remove books with extra data stored in an external API",
    card: "bookShelf",
    imgURL:
      "https://raw.githubusercontent.com/Daron976/portfolio/main/images/bookshelf.png",
    value: 5,
    display: false,
    src: "Daron976/portfolio/main/images/bookshelf.png",
    technologies: [
      { icon: <BiLogoReact />, link: "https://react.dev/" },
      {
        icon: <BiLogoJavascript />,
        link: "https://www.javascript.com/",
      },
      { icon: <BiLogoHtml5 />, link: "https://html.com/" },
      {
        icon: <SiCss3 />,
        link: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
      { icon: <SiWebpack />, link: "https://webpack.js.org/" },
      {
        icon: <TbBrandVscode />,
        link: "https://code.visualstudio.com/",
      },
    ],
    width: 500,
    heigth: 280,
    live: "https://bookshelf976.netlify.app/",
    source: "https://github.com/Daron976/Bookshelf",
  },
  {
    title: "Math Magician",
    description:
      "In this project, I use react to create a single-page app that contains a working calculator with a random quote.",
    card: "mathagician",
    imgURL:
      "https://raw.githubusercontent.com/Daron976/portfolio/main/images/mathmagician.png",
    value: 6,
    display: false,
    width: 500,
    heigth: 280,
    src: "Daron976/portfolio/main/images/mathmagician.png",
    technologies: [
      { icon: <BiLogoReact />, link: "https://react.dev/" },
      {
        icon: <BiLogoJavascript />,
        link: "https://www.javascript.com/",
      },
      { icon: <BiLogoHtml5 />, link: "https://html.com/" },
      {
        icon: <SiCss3 />,
        link: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
      { icon: <SiWebpack />, link: "https://webpack.js.org/" },
      {
        icon: <TbBrandVscode />,
        link: "https://code.visualstudio.com/",
      },
    ],
    live: "https://caltake.netlify.app/",
    source: "https://github.com/Daron976/Math-magician",
  },
  {
    title: "Climate Change Conference",
    description:
      "This is a website for a climate change conference which contains details about the purpose, audience and speakers that will be present, as well as how the programme will unfold during the time of the conference.",
    card: "climateChange",
    imgURL:
      "https://raw.githubusercontent.com/Daron976/portfolio/main/images/climateChange.png",
    value: 7,
    display: false,
    width: 500,
    heigth: 280,
    src: "Daron976/portfolio/main/images/climateChange.png",
    technologies: [
      {
        icon: <BiLogoJavascript />,
        link: "https://www.javascript.com/",
      },
      { icon: <BiLogoHtml5 />, link: "https://html.com/" },
      {
        icon: <SiCss3 />,
        link: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
      {
        icon: <TbBrandVscode />,
        link: "https://code.visualstudio.com/",
      },
    ],
    live: "https://daron976.github.io/Climate-Change-Conference/",
    source: "https://github.com/Daron976/Climate-Change-Conference",
  },
];

export default projectData;

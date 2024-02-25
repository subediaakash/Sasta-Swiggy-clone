import {
  briyani,
  burger,
  chillichiken,
  kfc,
  mutterpanneer,
  mutton,
  shwarma,
  rotisabji,
} from "../assets/importer";

const Restaurants = [
  {
    id: 1,
    name: "Briyani Corner",
    img: briyani,
    address: "Majestic , South-East Bangalore",
    ratings: 4.8,
  },
  {
    id: 2,
    name: "KFC",
    img: kfc,
    ratings: 4.7,
    address: "Bannergatta Road, Bangalore",
  },
  {
    id: 3,
    name: "Burger King",
    img: burger,
    address: "Silk Institute ,Bangalore",
    ratings: 4.6,
  },
  {
    id: 4,
    name: "Non Veg Restaurant",
    img: chillichiken,
    address: "Harohalli ,Kanakapura road",
    ratings: 4.5,
  },
  {
    id: 5,
    name: "Hariyali Dhaba",
    img: rotisabji,
    address: "Banshankari,Bangalore",
    ratings: 4.4,
  },
  {
    id: 6,
    name: "Shwarma Corner",
    img: shwarma,
    address: "Jakashandrra ,Kanakapura Road",
    ratings: 4.3,
  },
  {
    id: 7,
    name: "Family Restaurant",
    img: mutton,
    address: "Kollegalla ,Kanakapura Road",
    ratings: 4.2,
  },
  {
    id: 8,
    name: "Punjabi Dhaba ",
    img: mutterpanneer,
    address: "Dodallakashandra ,Bangalore",
    ratings: 4.1,
  },
];
export default Restaurants;

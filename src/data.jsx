import tour_guide from "./assets/images/tour_guide.png";
import travelling from "./assets/images/travelling.png";
import hands from "./assets/images/hands.png";
import medical_team from "./assets/images/medical_team.png";
import explore_nature from "./assets/images/explore_nature.png";
import explore_cities from "./assets/images/explore_cities.png";
import switzerland_img from "./assets/images/switzerland_img.png";
import switzerland_logo from "./assets/images/switzerland_logo.png";
import amazon_img from "./assets/images/amazon_img.png";
import amazon_logo from "./assets/images/amazon_logo.png";
import giza_img from "./assets/images/giza_img.png";
import giza_logo from "./assets/images/giza_logo.png";
import maldives from "./assets/images/maldives.png";
import switzerland from "./assets/images/switzerland.png";
import berlin from "./assets/images/berlin.png";
import torronto from "./assets/images/torronto.png";
import baku from "./assets/images/baku.png";
import chineese from "./assets/images/chineese.png";

const category_cards=[{categorycard_img:tour_guide,categorycard_title:'Guided Tours',
categorycard_description:'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'},
{categorycard_img:travelling,categorycard_title:'Best Flights Options',
categorycard_description:'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'},
{categorycard_img:hands,categorycard_title:'Religious Tours',
categorycard_description:'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'},
{categorycard_img:medical_team,categorycard_title:'Medical insurance',
categorycard_description:'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'}
]

const explore_cards=[{explorecard_bg_img:explore_nature,explorecard_title:'Explore Nature'},
{explorecard_bg_img:explore_cities,explorecard_title:'Explore Cities'}]

const trendy_cards=[{trendycard_img:switzerland_img,trendycard_logo:switzerland_logo,
    trendycard_days:'8 days',trendycard_users:'30 People Going',trendycard_title:'Switzerland',
    trendycard_description:'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.'},
  {trendycard_img:amazon_img,trendycard_logo:amazon_logo,
    trendycard_days:'8 days',trendycard_users:'60 People Going',trendycard_title:'Amazon',
    trendycard_description:'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.'},
  {trendycard_img:giza_img,trendycard_logo:giza_logo,
    trendycard_days:'8 days',trendycard_users:'120 People Going',trendycard_title:'Giza',
    trendycard_description:'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.'}]

const packages_cards=[
  {card_img:maldives,card_date:'27, September 2023',card_visitors:'30+ People',
    card_title:'Maldives',card_desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
    card_price:'3000 $',card_rate:'5.0'},
  {card_img:switzerland,card_date:'13, October 2023',card_visitors:'120+ People',
    card_title:'Switzerland',card_desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
    card_price:'1290 $',card_rate:'4.9'},
  {card_img:berlin,card_date:'2, November 2022',card_visitors:'139+ People',
    card_title:'Berlin',card_desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
    card_price:'2790 $',card_rate:'5.0'},
  {card_img:torronto,card_date:'14, December 2022',card_visitors:'50+ People',
    card_title:'Torronto',card_desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
    card_price:'1110 $',card_rate:'4.0'},
  {card_img:baku,card_date:'20, September 2022',card_visitors:'80+ People',
    card_title:'Baku',card_desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
    card_price:'1220 $',card_rate:'4.5'},
  {card_img:chineese,card_date:'27, August 2022',card_visitors:'100+ People',
    card_title:'Chinese',card_desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',
    card_price:'2500 $',card_rate:'5.0'}]

    export {category_cards,explore_cards,trendy_cards,packages_cards}
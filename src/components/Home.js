import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
          className="home_img"
        />

        <div className="home_row">
          <Product
            id="654654cckj"
            title="the lean startup"
            price={16.12}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
            rating={5}
          />
          <Product
            id="65658fkj"
            title="AmazonBasics Slim Carry On Travel Backpack"
            price={16.61}
            image="https://m.media-amazon.com/images/I/A166C71eR-L._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="adfwdfkj"
            rating={4}
            price={36.97}
            image="https://m.media-amazon.com/images/I/81GiZh1KZaL._AC_UL320_.jpg"
            title="ECOWISH Womens Color Block Striped Draped Kimono Cardigan with Pockets Long Sleeve Open Front Casual Knit Sweaters Coat"
          />

          <Product
            rating={4}
            price={149.99}
            image="https://m.media-amazon.com/images/I/41GVURZFnFL._AC_SR160,160_.jpg"
            title="Shock Clock 2 - Silent Smart Alarm Clock - Motion Tracking - Never Sleep in Or Hit Snooze Again"
            id="6ad44wdfkj"
          />
          <Product
            rating={5}
            price={48.65}
            image="https://m.media-amazon.com/images/I/71H8btY1jlL._AC_UL320_.jpg"
            title="AmazonBasics 3.2 Quart Compact Multi-Functional Air Fryer
                     "
            id="65445647dfkj"
          />
          <Product
            rating={4}
            price={6.48}
            image="https://m.media-amazon.com/images/I/81dWbLERrNL._AC_UY218_.jpg"
            title="Call Of Duty: Advanced Warfare (Xbox One)"
            id="6544wdfkj"
          />
        </div>
        <div className="home_row">
          <Product
            rating={4}
            image="https://m.media-amazon.com/images/I/51z3EokgT3L._AC_SY161_.jpg"
            price={19.99}
            title="Detox Tea - Cleanse Herbal Teatox Reduces Bloating & Helps Your Body Stay Regular | Keep Your Colon Happy and You Feeling Healthy with Hey Girl Tea"
            id="6544wdfscfj"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Explore a curated selection of our finest products that have been handpicked just for you. From innovative solutions to timeless classics, our featured products represent the best of what we have to offer. Each item is designed to elevate your experience and bring joy to your life. Whether you're looking for style, functionality, or both, you'll find it here. Browse our featured collection and find your next favorite today.
	  </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

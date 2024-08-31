import React, { useEffect, useState } from "react";
import SignUpBanner from "./signupbanner";
import NewBlog from "./newblog";
import Product from "./product";
import Services from "./services";
import MainSection from "./mainsection";
import InstagramSection from "./instagramsection";

const HeroSection = () => {
  return (
    <section className="relative py-10 px-6">
      <MainSection />
      <Services />
      <Product />
      <SignUpBanner />
      <NewBlog />
      <InstagramSection />
    </section>
  );
};

export default HeroSection;

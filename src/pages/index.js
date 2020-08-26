import React from "react";
import Hero from "../sections/landing1/Hero";
import Feature from "../sections/landing1/Feature";
import Content1 from "../sections/landing1/Content1";
import Content2 from "../sections/landing1/Content2";
import PricingTable1 from "../sections/landing1/PricingTable1";
import CTA from "../sections/landing1/CTA";
import WhyContent from "../sections/landing1/Why";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        <Content1 />
        <Content2 />
        <WhyContent />
        <PricingTable1 />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

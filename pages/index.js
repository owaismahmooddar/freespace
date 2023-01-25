import { useState } from "react";
//import components
import Layout from "@/layouts/Layout";
import TechnologyStackList from "@/components/technologyStack/TechnologyStackList";

const Home = () => {
  return (
    <>
      <section className="companyPage DBlock dark:bg-black">
        <TechnologyStackList />
      </section>
    </>
  );
};

export default Layout(Home);

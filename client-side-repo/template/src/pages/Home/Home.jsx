import Benefits from "../../components/BenefitsOfOnlineStudy/Benefits";
import FAQ from "../../components/FaQ/FAQ";
import Banner from "../../components/banner/Banner";
import FeaturedSection from "../../components/featured/FeaturedSection";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
     <section>
      <FeaturedSection></FeaturedSection>
     </section>
     <section>
      <FAQ></FAQ>
     </section>
     <section>
      <Benefits></Benefits>
     </section>
    </div>
  );
};

export default Home;
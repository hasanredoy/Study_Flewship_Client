import Benefits from "../../components/BenefitsOfOnlineStudy/Benefits";
import FAQ from "../../components/FaQ/FAQ";
import Banner from "../../components/banner/Banner";
import FeaturedSection from "../../components/featured/FeaturedSection";
import {Helmet} from "react-helmet";

const Home = () => {
  return (

    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Study Flewship | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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
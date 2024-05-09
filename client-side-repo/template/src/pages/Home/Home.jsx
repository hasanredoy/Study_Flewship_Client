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
    </div>
  );
};

export default Home;
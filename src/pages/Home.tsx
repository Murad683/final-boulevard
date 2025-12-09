import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import ReservationCTA from "@/components/home/ReservationCTA";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <FeaturedDishes />
      <ReservationCTA />
    </Layout>
  );
};

export default Home;

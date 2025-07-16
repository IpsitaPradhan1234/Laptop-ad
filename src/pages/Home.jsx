import Categories from "../components/Categories"
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import Carousel from "../components/CarouselTailwind"

const Home = () => {
    return (
        <>
            
            <Carousel autoSlide autoSlideInterval={4000} />
            <Hero />
             <Categories /> 
            <FeaturedProducts />
        </>
    )
}

export default Home

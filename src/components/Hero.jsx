import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-orange-100 py-28 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
                        Discover the Best Deals on Premium Laptops
                    </h1>
                    <p className="text-gray-700 text-lg mb-6 max-w-4xl mx-auto">
                       LapShop offers expertly renewed laptops from top brands — tested, polished, and delivered at unbeatable prices. Explore today’s top deals!
                    </p>
                    <Link
                        to="/products"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition duration-300 font-medium"
                    >
                        Shop Now
                    </Link>
                    
                </div>
            </div>
        </section>
    );
};

export default Hero;

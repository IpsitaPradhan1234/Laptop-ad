// src/components/Footer.jsx

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-12">
            <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">LapShop</h3>
                    <p className="text-sm text-gray-300">
                        Your go-to online store for expertly renewed laptops from top brands — tested, polished, and delivered at unbeatable prices.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="text-sm flex flex-col space-y-2 text-gray-300">
                        <Link to={"#"}>Home</Link>
                        <Link to={"/products"}>Products</Link>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li>
                            GitHub:{" "}
                            <a
                                href="https://github.com/aviraworld"
                                className="text-orange-400 underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                aviraworld
                            </a>
                        </li>
                        <li>
                            LinkedIn:{" "}
                            <a
                                href="https://www.linkedin.com/in/aviraworld"
                                className="text-orange-400 underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                aviraworld
                            </a>
                        </li>
                        <li>Email: aviraworld.co.in</li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
                © 2025 AviraWorld. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

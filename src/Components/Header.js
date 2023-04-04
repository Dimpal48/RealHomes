import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.pathname);
    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }

    return (
        <div className='bg-white border-b shadow-lg sticky top-0 z-40' >
            <header className='flex justify-between items-center  max-w-6xl mx-auto'>
                <div>
                    <img src='https://scontent.fjai1-1.fna.fbcdn.net/v/t1.6435-1/35439664_481945582226504_9072959713758412800_n.jpg?stp=dst-jpg_p148x148&_nc_cat=109&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=ibxecqgfKs4AX9_9ReD&_nc_ht=scontent.fjai1-1.fna&oh=00_AfB6qF08rtOkvq4MgERtamN2YcHmKBb1LUY4NlGYGJix1Q&oe=6453324C'
                        alt='logo'
                        className="h-20 cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${pathMatchRoute("/") && "text-black border-b-blue-600"} `}
                            onClick={() => navigate("/")}
                        >
                            Home
                        </li>

                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                         ${pathMatchRoute("/offers") && "text-black border-b-blue-600"}`}
                            onClick={() => navigate("/offers")}
                        >
                            Offers
                        </li>

                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                         ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-blue-600 border-opacity-100"}`}
                            onClick={() => navigate("/profile")}>
                            Sign In
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
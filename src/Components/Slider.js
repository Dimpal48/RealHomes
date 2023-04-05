import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import Spinner from "../Components/Spinner"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectFade,
    Autoplay,
    Navigation,
    Pagination,
} from "swiper";
import "swiper/css/bundle";
import { useNavigate } from "react-router-dom";
import {
    FaShare,
    FaMapMarkerAlt,
    FaBed,
    FaBath,
    FaParking,
    FaChair,
} from "react-icons/fa";

function Slider() {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);
    SwiperCore.use([Autoplay, Navigation, Pagination]);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchListings() {
            const listingsRef = collection(db, "listings");
            const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
            const querySnap = await getDocs(q);
            let listings = [];
            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data(),

                });
            });
            setListings(listings);
            setLoading(false);
            // console.log(listings);
        }
        fetchListings();
    }, []);
    if (loading) {
        return <Spinner />;
    }
    // console.log(listings);

    if (listings.length === 0) {
        return <></>;
    }
    return (

        listings && (
            <>
                <Swiper
                    slidesPerView={1}
                    navigation
                    pagination={{ type: "progressbar" }}
                    effect="fade"
                    modules={[EffectFade]}
                // autoplay={{ delay: 3000 }}
                >
                    {listings.map(({ data, id }) => (
                        <SwiperSlide

                            key={id}
                            onClick={() => navigate(`/category/${data.type}/${id}`)}
                        >
                            <div
                                style={{
                                    background: `url(${data.imgUrls[0]}) center, no-repeat`,
                                    backgroundSize: "cover",
                                }}
                                className="relative w-full h-[620px] overflow-hidden"
                            ></div>
                            <div className="text-black flex sm:gap-4 absolute sm:left-40 left-20 top-56 gap-2 font-medium max-w-[90%] bg-white shadow-2xl bg-opacity-100 p-2 rounded-tr-2xl">
                                <div>
                                    <p className=" font-semibold mb-3 text-lg text-black px-4 pt-4">
                                        {data.name}
                                    </p>
                                    <p className="flex px-4  font-light text-slate-500">
                                        {data.address}
                                    </p>
                                    <ul className="flex items-center space-x-1 sm:space-x-5 text-sm font-semibold px-4 mb-6 pt-4">
                                        <li className="flex items-center whitespace-nowrap">
                                            <FaBed className="text-lg mr-1 text-sky-400" />
                                            {+data.bedrooms > 1 ? `${data.bedrooms} Beds` : "1 Bed"}
                                        </li>
                                        <li className="flex items-center whitespace-nowrap">
                                            <FaBath className="text-lg mr-1 text-sky-400" />
                                            {+data.bathrooms > 1 ? `${data.bathrooms} Baths` : "1 Bath"}
                                        </li>

                                    </ul>
                                    <p className="text-[#f1faee] absolute right-0 bottom-0 font-semibold max-w-[90%] bg-[#3adff9] shadow-lg opacity-90 p-1 rounded-tl-xl">
                                        ${data.discountedPrice ?? data.regularPrice}
                                        {data.type === "rent" && " / month"}
                                    </p>
                                </div>
                                <div className="text-white">
                                    lamba
                                </div>
                            </div>

                            {/* <p className="text-[#f1faee] absolute left-1 top-3 font-medium max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-3xl">
                                {data.name}
                            </p> */}

                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        )

    )
}

export default Slider
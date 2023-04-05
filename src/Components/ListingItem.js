import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";


function ListingItem({ listing, id, onEdit, onDelete }) {
    return (
        < >
            <li className='relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]'>
                <Link to={`/category/${listing.type}/${id}`} className="contents">
                    <img
                        src={listing.imgUrls[0]}
                        loading="lazy"
                        className="h-[170px] w-full object-cover hover:scale-110 transition-scale duration-200 ease-in"
                    />
                    <Moment className='absolute top-2 left-2 bg-[#42c6c2] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-2xl'
                        fromNow>
                        {listing.timestamp?.toDate()}
                    </Moment>
                    <div className="w-full p-[10px]">
                        <div className="flex items-center space-x-1">
                            <MdLocationOn className="h-6 w-6 text-sky-400" />
                            <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">
                                {listing.address}
                            </p>
                        </div>
                        <p className="font-semibold m-0 text-lg truncate">{listing.name}</p>
                        <p className="text-[#60a7d3] mt-2 font-semibold">
                            $
                            {listing.offer
                                ? listing.discountedPrice
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                : listing.regularPrice
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            {listing.type === "rent" && " / month"}
                        </p>
                        <div className="flex items-center mt-[10px] space-x-3">
                            <div className="flex items-center space-x-1">
                                <p className="font-bold text-xs">
                                    {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}
                                </p>
                            </div>
                            <div className="flex items-center space-x-1">
                                <p className="font-bold text-xs">
                                    {listing.bathrooms > 1
                                        ? `${listing.bathrooms} Baths`
                                        : "1 Bath"}
                                </p>
                            </div>
                        </div>
                    </div>

                </Link>
                {onDelete && (
                    <FaTrash
                        className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-green-500"
                        onClick={() => onDelete(listing.id)}
                    />
                )}
                {onEdit && (
                    <MdEdit
                        className="absolute bottom-2 right-7 h-4 cursor-pointer "
                        onClick={() => onEdit(listing.id)}
                    />
                )}
            </li>
        </>
    )
}

export default ListingItem

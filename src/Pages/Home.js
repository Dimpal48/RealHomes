import React from 'react';
import Slider from '../Components/Slider';
import {
  collection,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListingItem from "../Components/ListingItem";
import HomePrtTwo from '../Components/HomePrtTwo';

import { db } from "../firebase";

function Home() {
  const [offerListings, setOfferListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setOfferListings(listings);
        // console.log(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  const [rentListings, setRentListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("type", "==", "rent"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setRentListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  const [saleListings, setSaleListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("type", "==", "sale"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setSaleListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  return (
    <div>
      <Slider />
      <HomePrtTwo />
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {offerListings && offerListings.length > 0 && (
          <div className="m-2 mb-6">
          <h2 className="text-2xl mt-28 mb-10 text-center font-medium text-slate-600">RECENT OFFERS </h2>
          <Link to="/offers"
              className='flex text-center justify-end'>
              <p className="px-3 w-36 bg-[#ff749d] hover:opacity-70 text-white text-sm uppercase   py-1 shadow-2xl font-semibold rounded-md  text-center transition duration-150 ease-in-out">
                View More
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {offerListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
            
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="text-2xl mt-28  text-center font-medium text-slate-600">NEW PROPERTIES </h2>
            <p className='text-center text-4xl mb-10 mt-4 font-bold text-sky-900'>For Rent</p>
            <Link to="/category/rent"
              className='flex text-center justify-end'>
              <p className="px-3  w-36 bg-[#ff749d] hover:opacity-70 text-white text-sm uppercase   py-1 shadow-2xl font-semibold rounded-md  text-center transition duration-150 ease-in-out">
                View More
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {rentListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
            

          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="text-2xl mt-28  text-center font-medium text-slate-600">NEW PROPERTIES </h2>
            <p className='text-center text-4xl mb-10 mt-4 font-bold text-sky-900'>For Sale</p>
            <Link to="/category/sale"
              className='flex text-center justify-end'>
              <p className="px-3  w-36 bg-[#ff749d] hover:opacity-70 text-white text-sm uppercase   py-1 shadow-2xl font-semibold rounded-md  text-center transition duration-150 ease-in-out">
                View More
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {saleListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
            
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

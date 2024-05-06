import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import { resetCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Success = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get("session_id");
  if (!sessionId) {
    return <Navigate to="/" />;
  } else {
    dispatch(resetCart());
    toast.success("Your payment was successful!");
  }

  return (
    <div className="py-32 flex flex-col items-center justify-center">
      <p className="text-lg font-medium">
        We received your payment successfully
      </p>
      <p>Thank you for shopping with us!</p>
      <Link to="/">
        <button className="flex items-center gap-1 mt-1 text-orange-500 hover:text-orange-700  duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Continue Shopping
        </button>
      </Link>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Success;

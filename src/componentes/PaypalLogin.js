import React from "react";
import paypal from "../assets/paypal.png";
const PaypalLogin = ({ title, help, login, create }) => {
  return (
    <div>
      <div className=" container flex justify-center">
        <div>
          <img src={paypal} alt="" className="w-20 ml-10" />
          <p className="font-semibold text-2xl">{title}</p>
        </div>
      </div>

      <div className="container ">
        <div className=" justify-center ml-16">
          <input
            type="text"
            placeholder="paypaluser@gmail.com"
            className="border rounded-lg w-96 mt-6 "
          />

          <input
            type="text"
            placeholder="****************"
            className="border rounded-lg w-96 mt-6 bg-gray-200"
          />

          <p className="text-blue-600 font-bold cursor-pointer">{help}</p>
        </div>
      </div>

      <div className="mt-8 p-2">
        <h3 className="flex items-center justify-center p-4 bg-blue-700 text-white font-semibold rounded-full shadow cursor-pointer">
          {login}
        </h3>
      </div>
      <div className="mt-8 p-2">
        <h3 className="flex items-center justify-center p-4 bg-white border border-blue-700 text-blue-700 font-semibold rounded-full shadow cursor-pointer">
          {create}
        </h3>
      </div>
    </div>
  );
};

export default PaypalLogin;
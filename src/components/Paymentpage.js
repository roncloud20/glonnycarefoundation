import React, { useState, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";

const Paymentpage = () => {
  const [usermail, setUsermail] = useState("");
  const [amount, setAmount] = useState("");

  const hist = useHistory();
  const config = {
    reference: new Date().getTime(),
    email: usermail,
    amount: amount,
    publicKey: "pk_test_3385dfdb230a655b95672e8946dfe75765009867",
  };
  const onSuccess = (reference) => {
    hist.push("/10q");
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <div>You are about to make payment with this page</div>
      <input
        type="text"
        value={usermail}
        placeholder="Email"
        onChange={(e) => {
          setUsermail(e.target.value);
        }}
      />
      <input
        type="text"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          PayNow
        </button>
      </div>
    </div>
  );
};

export default Paymentpage;

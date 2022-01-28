import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-teal-500 via-teal-600 to-teal-700 py-5 text-justify text-white">
      <div className="md:grid md:grid-cols-4 md:my-10 mx-3.5 md:mx-20 md:space-x-10 space-y-10  justify-center">
        <div className="mt-10 mx-5 md:mx-0 space-y-3">
          <h3 className="text-xl text-black font-semibold">Questions?</h3>
          <ul className="list-unstyled">
            <li>How Can Travel with Strangers?</li>
            <li>How Can Travel with Strangers?</li>
            <li>How Can Travel with Strangers?</li>
            <li>How Can Travel with Strangers?</li>
            <li>How Can Travel with Strangers?</li>
          </ul>
        </div>
        <div className="mx-5 md:mx-0 space-y-3">
          <h3 className="text-xl text-black font-semibold">Location</h3>
          <address className="">
            A Perfect Event By Carmen Company
            <br />
            323 Bedford Place <br />
            Thousand Oaks, CA 91360 <br />
            United States of America
          </address>
        </div>
        <div className="mx-5 md:mx-0 space-y-3">
          <h3 className="text-xl text-black font-semibold">Pause Moments</h3>
          <p>
            If you have any questions about the services we provide simply use
            the form below. We try and respond to all queries and comments
            within 24 hours. Get a cost estimate of your event based upon your
            submission and appointment.
          </p>
        </div>
        <div className="mx-5 md:mx-0 list-none space-y-3">
          <h3 className="text-xl text-black font-semibold">Popular Blogs</h3>
          <p className="text-medium">
            {" "}
            We are a one-stop shop focusing on simplifying the event planning
            process for you and your loved ones.
          </p>
          <li>Europe Tour </li>
          <li>Niagra Falls</li>
          <li>Cake and Candy Buffet Services</li>
          <li>Road Trips</li>
          <li>Private Island</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;

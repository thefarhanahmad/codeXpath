import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">Welcome to CodeRise</h1>
      <p className="text-lg mb-8">
        Your go-to resource for web development learning.
      </p>
      <a
        href="/about"
        className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
      >
        Get Started
      </a>
    </div>
  );
};

export default HomePage;

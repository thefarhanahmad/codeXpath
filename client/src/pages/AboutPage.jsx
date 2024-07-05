import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to CodeXpath, your go-to platform for comprehensive web
          development resources and courses.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            At CodeXpath, our mission is to provide aspiring developers with
            structured learning paths, practical resources, and hands-on courses
            to master web development skills.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src="/images/about-image.jpg" // Replace with your image path
            alt="About Us Image"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Comprehensive Learning Paths
            </h3>
            <p className="text-gray-600">
              We offer curated learning paths that cover everything from
              beginner basics to advanced topics in web development.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Hands-On Projects and Courses
            </h3>
            <p className="text-gray-600">
              Dive into our interactive courses and projects designed to
              reinforce your learning through practical application.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Community Support
            </h3>
            <p className="text-gray-600">
              Join our vibrant community of learners and experts to collaborate,
              ask questions, and grow together in your journey.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Expert Guidance
            </h3>
            <p className="text-gray-600">
              Benefit from expert-led resources and tutorials crafted by
              industry professionals to help you stay updated with the latest in
              web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

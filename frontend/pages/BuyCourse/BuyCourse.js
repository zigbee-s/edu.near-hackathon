import React from "react";
import instructor from '../../assets/instructor.png';
import background from '../../assets/background.png';
import course from '../../assets/course.png';

function BuyCourse() {
  return (
    <div className="mt-20 pt-5 font-Inter">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="container mx-auto py-4 px-8">
          <h1 className="text-3xl font-bold">Course Name</h1>
        </div>
      </header>

      <div className="container mx-auto py-8 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-16 object-cover"
                src={background}
                alt="Course"
              />
               <div className="container mx-auto py-8 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-120 object-cover"
                src={course}
                alt="Course"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Course Name</h2>
                <p className="text-gray-700 text-base mb-4">
                  Course description Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Beatae magnam quae, tempora asperiores
                  inventore debitis itaque odio.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">$49.99</span>
                  <a href="/course">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold">
                    Buy Now
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Instructor</h2>
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={instructor}
                  alt="Instructor"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-gray-700">Instructor Bio</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Course Features</h2>
              <ul className="list-disc list-inside">
                <li>10 modules covering various topics</li>
                <li>Interactive quizzes and assignments</li>
                <li>Hands-on projects to apply your knowledge</li>
                <li>Access to exclusive learning materials</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Student Reviews</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Jane Smith</h3>
                  <p className="text-gray-700">
                    "This course exceeded my expectations. The content was
                    well-structured, and the instructor explained everything
                    clearly. Highly recommended!"
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Michael Johnson</h3>
                  <p className="text-gray-700">
                    "I've learned so much from this course. The hands-on
                    projects really helped me understand the concepts better.
                    Great job!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

</div>
</div>

  );
}

export default BuyCourse;

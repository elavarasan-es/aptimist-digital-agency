import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';

const jobs : { [key: string]: string } ={
  'Web Designer':
    'Looking for creative web designer skilled in Figma, HTML, CSS. Looking for creative web designer skilled in Figma, HTML, CSS.',
  Developer: 'Seeking React/Node developer with 3+ years experience.',
  'Project Manager': 'Experienced PM to lead agile teams and delivery.',
};

const Careers: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [defaultShown, setDefaultShown] = useState(true);

  useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  canvas.width = 800;
  canvas.height = 600;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ✅ Create a gradient from top to bottom
  const gradient = ctx.createLinearGradient(100, 100, 100, 400); // vertical gradient
  gradient.addColorStop(0, '#003333'); // very dark teal
  gradient.addColorStop(1, '#38C6C6'); // medium teal

  // Mailbox shape
  ctx.strokeStyle = 'black';
  ctx.fillStyle = gradient;
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(100, 400);
  ctx.lineTo(700, 400);
  ctx.lineTo(700, 100);
  ctx.lineTo(400, 200);
  ctx.lineTo(100, 100);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}, []);

  return (
    <div>
      <div className="hidden md:flex md:flex-wrap items-center bg-slate-200 h-screen overflow-hidden">
        {/* Left Sidebar */}
        <div className="md:w-1/4 bg-white rounded shadow p-4 mr-6 h-screen">
          <h2 className="text-xl text-[#38C6C6] font-bold mb-4">
            Open Positions
          </h2>
          <ul>
            {Object.keys(jobs).map((job) => (
              <li
                key={job}
                onClick={() => {
                  setSelectedJob(job);
                  setShowForm(false);
                  setDefaultShown(false);
                }}
                className={`cursor-pointer py-2 px-3 rounded mb-2 ${
                  selectedJob === job
                    ? 'bg-blue-200 font-semibold'
                    : 'hover:bg-blue-100'
                }`}
              >
                {job}
              </li>
            ))}
            <li
              onClick={() => {
                setSelectedJob(null);
                setShowForm(false);
                setDefaultShown(true);
              }}
              className="cursor-pointer py-2 px-3 mt-4 text-red-600 hover:text-red-800"
            >
              Clear Selection
            </li>
          </ul>
        </div>

        {/* Mailbox + Letters */}
        <div className="relative h-full flex-1">
          {/* Default Letter */}
          <AnimatePresence>
            {defaultShown && !selectedJob && (
              <motion.div
                key="defaultLetter"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 250, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute top-[100px] left-[100px] w-[600px] h-[280px] rounded shadow-lg border border-gray-300 bg-gradient-to-b from-[#fdfcfb] to-[#f3f3f3] z-0 p-6"
              >
                <h3 className="text-xl font-bold mb-2">Welcome to Careers</h3>
                <p className="mb-4">
                  Choose a career with our company. Explore the roles available
                  and find where you fit best.
                </p>
                <p className="text-sm italic text-gray-500">
                  Select a role from the sidebar to get started.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Job Description Letter */}
          <AnimatePresence>
            {selectedJob && !showForm && (
              <motion.div
                key="jobLetter"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 250, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute top-[100px] left-[100px] w-[600px] h-[280px] rounded shadow-lg shadow-slate-500 border border-gray-300 bg-gradient-to-b from-[#fdfcfb] to-[#f3f3f3] z-0 p-6"
              >
                <h3 className="text-xl font-bold mb-2">{selectedJob}</h3>
                <p>{jobs[selectedJob]}</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="self-center px-6 py-1 my-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Apply
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Application Form Letter */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                key="formLetter"
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: -80, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute top-[100px] left-[100px] w-[600px] h-[380px] rounded shadow-lg border border-gray-300 bg-white z-10 flex flex-col p-6 overflow-auto"
              >
                <h3 className="text-xl font-bold mb-4">
                  Apply for {selectedJob}
                </h3>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-400 rounded px-3 py-2 mb-3"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-400 rounded px-3 py-2 mb-3"
                />
                <input type="file" className="mb-4" />
                <div className="flex justify-between">
                  <button
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => alert('Form submitted!')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mailbox Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-[25%] left-0 z-20"
            width={800}
            height={600}
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      <div className="mobile  md:hidden lg:hidden">
        <div className="w-full text-center bg-white rounded shadow p-4">
          <h2 className="text-xl text-[#38C6C6] font-bold mb-4">
            Open Positions
          </h2>
          <ul>
            {Object.keys(jobs).map((job) => (
              <li
                key={job}
                onClick={() => {
                  setSelectedJob(job);
                  setShowForm(false);
                  setDefaultShown(false);
                }}
                className={`cursor-pointer py-2 px-3 rounded  mb-2 ${
                  selectedJob === job
                    ? 'bg-blue-200 font-semibold'
                    : 'hover:bg-blue-100 bg-slate-200'
                }`}
              >
                {job}
              </li>
            ))}
            <li
              onClick={() => {
                setSelectedJob(null);
                setShowForm(false);
                setDefaultShown(true);
              }}
              className={`cursor-pointer py-2 px-3 rounded text-red-600 mb-2 ${
                selectedJob === null
                  ? 'bg-slate-200'
                  : 'hover:text-red-800 hover:bg-red-200'
              }`}
            >
              Clear Selection
            </li>
          </ul>
        </div>

        <div>
          {/* Default Letter */}
          <AnimatePresence>
            {defaultShown && !selectedJob && (
              <motion.div
                key="defaultLetter"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 250, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className=" m-4 max-w-[600px] max-h-[280px] rounded shadow-lg border border-gray-300 bg-gradient-to-b from-[#38C6C6] to-[#f3f3f3] z-0 p-6"
              >
                <h3 className="text-xl font-lato font-bold mb-2">
                  Welcome to Careers
                </h3>
                <p className="mb-4">
                  Choose a career with our company. Explore the roles available
                  and find where you fit best.
                </p>
                <p className="text-sm italic text-gray-500">
                  Select a role from the sidebar to get started.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Job Description Letter */}
          <AnimatePresence>
            {selectedJob && !showForm && (
              <motion.div
                key="jobLetter"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 250, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="max-w-[600px] mb-5 max-h-[280px] rounded shadow-lg border border-gray-300 bg-gradient-to-b from-[#38C6C6] to-[#f3f3f3] z-0 p-6"
              >
                <h3 className="text-xl font-bold mb-2">{selectedJob}</h3>
                <p>{jobs[selectedJob]}</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="self-center px-6 py-1 my-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Apply
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Application Form Letter */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                key="formLetter"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 250, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="max-w-[600px] mb-5 max-h-[280px] rounded shadow-lg border border-gray-300 bg-gradient-to-b from-[#38C6C6] to-[#f3f3f3] z-0 p-6"
              >
                <h3 className="text-xl font-bold mb-4">
                  Apply for {selectedJob}
                </h3>
                <div className='m-4'>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="flex-1 border border-gray-400 rounded px-3 py-2 mb-3"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 border border-gray-400 rounded px-3 py-2 mb-3"
                  />
                </div>

                <input type="file" className="mb-4" />
                <div className="flex justify-between">
                  <button
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => alert('Form submitted!')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
     
        <Footer/>
   
    </div>
  );
};

export default Careers;

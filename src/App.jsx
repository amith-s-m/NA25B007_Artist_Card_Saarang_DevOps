import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div className="bg-black">
      <motion.div
        className="bg-gradient-to-tr from-violet-950 via-black to-fuchsia-950 w-full min-h-screen flex items-center justify-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="flex flex-col md:flex-row bg-slate-500/10 rounded-2xl p-8 shadow-2xl gap-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="w-80 h-96 mx-auto overflow-hidden rounded-2xl hover:scale-102 transition duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1608319917470-9d9179430f8d"
              alt="Image"
              className="w-full h-full object-cover object-bottom transition duration-500 hover:scale-105"
            />
          </motion.div>
          <div className="flex flex-col items-center justify-center gap-8 max-w-md">
            <motion.h1
              className=" text-white text-7xl font-bold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            >
              RITVIZ
            </motion.h1>
            <motion.h1
              className="text-purple-500/80 text-2xl font-semibold overflow-hidden whitespace-nowrap hover:text-purple-500 transition duration-1000"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
            >
              Headliner - ROCK NIGHT'24
            </motion.h1>
            <motion.p
              className="text-white/90 text-center hover:text-white transition duration-1000"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 2.4, ease: "easeOut" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              consequuntur ut architecto aliquam ratione atque velit, cupiditate
              iste perferendis, enim tempore quod similique repellendus? Dolorum
              itaque neque ipsam reiciendis ipsum.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2.8, ease: "easeInOut" }}
            >
              <button className="bg-gradient-to-r from-purple-500 to-blue-700 hover:scale-105 active:scale-95 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Book Now
              </button>
              <button className="bg-transparent hover:bg-white/20 text-white font-bold py-2 px-4 rounded-full border active:scale-95 border-white transition duration-300">
                Know More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;

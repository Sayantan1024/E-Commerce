import React from 'react'
import { Users, IndianRupee, Scale, HandCoins } from "lucide-react"
import { HeroHighlight, Highlight } from '../ui/hero-highlight'
import { motion } from 'motion/react'

function Feature() {
  return (
    <section className=" px-6">
      <HeroHighlight>
      <h2 className="flex justify-center items-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500 dark:from-blue-600 dark:to-cyan-400">
        Why Choose Us
      </h2>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Because we provide{" "}
          <Highlight className="text-black ">
            money back guarantee
          </Highlight>
          {" "}Not satisfied with our product? No worries, return it and get your money back.
        </motion.h1>
      </HeroHighlight>
    </section>
  )
}

export default Feature
import React, { useEffect, useRef } from 'react'
import { useForm } from "react-hook-form"

function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const textareaRef = useRef(null);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset
      textarea.style.height = textarea.scrollHeight + "px"; // set to content height
    }
  };

  useEffect(() => {
    autoResize(); // adjust on first render if default value exists
  }, []);

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="grid xl:grid-cols-2 items-center gap-10 py-12 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 bg-gradient-to-r dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Left Section */}
      <div className='flex flex-col gap-y-4 items-center md:items-start text-center md:text-left mt-25'>
        <h2 className="text-3xl md:text-5xl font-bold mb-2 dark:text-white">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-4 max-w-3xl text-gray-500 dark:text-gray-300 font-medium">
          Need to get in touch with us? Fill out the inquiry form or contact us directly through our company mail id
          <span className='text-black dark:text-yellow-400 font-bold'> advancetelecom57@gmail.com </span>
          or call us at
          <span className='text-black dark:text-yellow-400 font-bold'> +91 9830581917</span>
        </p>

        {/* Google Map */}
        <div className="w-full max-w-md sm:max-w-lg">
          <iframe
            className="w-5/6 md:w-full h-80 md:h-96 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d230.20748105994238!2d88.4230991137802!3d22.604533879909564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM2JzE2LjQiTiA4OMKwMjUnMjMuNyJF!5e0!3m2!1sen!2sin!4v1760727991476!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className='flex justify-center mt-30'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg p-6 sm:p-8 rounded-xl border border-gray-300 dark:border-white bg-white dark:bg-gray-950 shadow-lg'>
          {/* <p className='flex justify-center items-center pb-5 font-semibold underline text-xl'>Inquiry Form</p> */}
          <div className='space-y-1'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className="grid gap-1">
                <label htmlFor="firstName" className='text-left text-shadow-2xl dark:text-white'>First Name: </label>
                <input
                  id="firstName"
                  type="text"
                  className='border border-gray-300 rounded p-2 shadow-md dark:text-white'
                  placeholder="Enter your first name"
                  {...register("firstName", {
                    required: true
                  })}
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="lastName" className='text-left text-shadow-2xl dark:text-white'>Last Name: </label>
                <input
                  id="lastName"
                  type="text"
                  className='border border-gray-300 rounded p-2 shadow-md dark:text-white'
                  placeholder="Enter your last name"
                  {...register("lastName", {
                    required: true
                  })}
                />
              </div>
            </div>

            <div className="grid gap-1">
              <label htmlFor="email" className='text-left mt-7 text-shadow-2xl dark:text-white'>Email: </label>
              <input
                id="email"
                type="email"
                className='border border-gray-300 rounded p-2 shadow-md dark:text-white'
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                  }
                })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="grid gap-1">
              <label htmlFor="phone" className='text-left mt-7 text-shadow-2xl dark:text-white'>Phone Number: </label>
              <input
                id="phone"
                type="tel"
                className='border border-gray-300 rounded p-2 shadow-md dark:text-white'
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: true,
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits"
                  }
                })}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>
            <div className="grid gap-1">
              <label htmlFor="query" className='text-left mt-7 text-shadow-2xl dark:text-white'>What's your query? </label>
              <textarea
                id="query"
                onInput={autoResize}
                ref={textareaRef}
                className='border border-gray-300 rounded p-2 shadow-md dark:text-white'
                placeholder='Ask anything'
                {...register("query")}
              />
            </div>
            <div className='flex justify-center items-center mt-8'>
              <button className='p-3.5 text-white font-semibold rounded-lg hover:bg-blue-600 bg-blue-400'>Submit</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
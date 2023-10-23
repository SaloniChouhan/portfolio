import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container flex flex-col  md:text-left text-left  h-full mx-auto py-8 mt-12 px-6 sm:px-6 md:px-10 lg:max-w-7xl">
        <div className="lg:mt-0 ">
          <p className="lg:text-lg text-lg my-2 font-serif font-regular text-core-green-600">
            Hi, My name is
          </p>
          <h1 className="text-5xl lg:text-7xl my-6 font-mono font-bold text-core-green-100 max-w-3xl ">
            Saloni Chouhan
          </h1>
          <div className="max-w-2xl">
            <h2 className="font-mono font-light text-core-green-100 text-lg mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Magni natus
              officiis numquam iure quos, tenetur assumenda dolorem laborum
              explicabo dignissimos doloremque aspernatur qui
            </h2>
          </div>
        </div>
        <div>
          <div className="lg:mt-20 md:mt-12 mt-10 flex justify-start gap-8">
            <a
              className="group -m-1 p-1"
              aria-label="Follow on angel"
              href="https://angel.co/subodh-galande"
            >
              <svg
                id="Layer_1"
                className="h-6 w-6 lg:h-7 lg:w-8 fill-core-green-300 hover:fill-core-green-700"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 368.73"
              >
                <path
                  d="M214.9,157.36c15.27,2.35,25.83,9.39,31.71,18.79S256,202,256,223.12c0,42.27-12.92,77.5-38.75,104.51s-58.72,41.1-98.64,41.1a125.72,125.72,0,0,1-45.8-8.22c-15.27-5.87-27-14.09-37.58-23.48a123.09,123.09,0,0,1-27-35.23C3.52,288.88,0,276,0,263.05,0,249,3.52,237.21,9.39,229s16.44-12.92,29.36-16.44c-2.35-5.87-4.69-10.57-5.87-15.27-1.17-3.52-2.35-7-2.35-9.39,0-7,3.53-15.27,11.75-23.49s15.26-11.74,22.31-11.74c3.52,0,5.87,0,9.39,1.17a36.22,36.22,0,0,1,11.74,5.88c-10.56-35.23-21.13-64.59-27-84.55S50.5,42.28,50.5,34.06c0-10.57,2.34-18.79,8.22-24.67C63.41,3.52,71.63,0,81,0c15.26,0,35.23,35.23,59.89,106.86,4.69,11.75,7,21.14,9.39,28.19,2.35-4.7,4.7-12.92,8.22-22.32C183.19,42.28,204.33,7.05,220.77,7.05c8.22,0,15.27,2.34,21.14,8.22a37.79,37.79,0,0,1,8.22,23.48c0,7-2.35,21.14-8.22,41.1-7,20-15.27,45.8-27,77.51ZM34.06,260.7a74.22,74.22,0,0,1,9.39,12.91C54,288.88,64.59,297.1,74,297.1a10.66,10.66,0,0,0,8.22-3.52c2.35-2.35,3.52-4.7,3.52-5.87,0-2.35-1.17-7-4.69-12.92a160.29,160.29,0,0,0-14.09-20C59.89,246.61,54,239.56,50.5,236c-4.7-3.53-8.22-5.87-10.57-5.87-5.87,0-11.75,3.52-16.44,9.39s-7,14.09-7,22.31c0,7.05,1.17,14.09,4.7,23.49,3.52,8.22,8.22,17.61,15.26,25.83C47,322.94,58.72,333.5,74,340.55s30.53,10.57,49.32,10.57c32.88,0,59.89-11.74,82.2-36.4s32.89-55.2,32.89-92.78a153.44,153.44,0,0,0-2.35-27c-1.18-7.05-4.7-11.75-8.22-14.1-7-5.87-20-10.56-39.93-15.26a273.18,273.18,0,0,0-62.24-7.05c-5.87,0-10.57,1.18-12.92,3.53s-3.52,5.87-3.52,10.56c0,11.75,5.87,20,18.79,24.66s34.06,8.22,62.24,8.22h10.57a9,9,0,0,1,5.87,2.35,17,17,0,0,1,2.35,8.22c-2.35,2.35-8.22,5.87-17.62,9.4a76.13,76.13,0,0,0-20,10.57,77.29,77.29,0,0,0-24.66,27c-5.87,10.56-9.4,20-9.4,29.35,0,5.88,1.18,11.75,3.53,20s3.52,12.91,3.52,14.09v4.7c-7.05,0-12.92-4.7-17.61-12.92S121,299.45,121,285.36V283c-1.17,1.17-2.34,2.35-3.52,2.35s-2.35,1.17-4.7,1.17H108c-1.18,0-2.35-1.17-4.7-1.17,0,2.35,1.17,3.52,1.17,5.87v4.7a23.17,23.17,0,0,1-7,16.44,23.93,23.93,0,0,1-17.62,7c-10.57,0-21.13-4.69-32.88-15.26-10.57-10.57-16.44-20-16.44-30.54,0-2.34,0-3.52,1.18-4.69,0-5.87,1.17-7.05,2.35-8.22Zm76.33,5.87a12,12,0,0,0,11.74-11.74c0-3.53-2.35-10.57-7-22.32a187.11,187.11,0,0,0-17.61-34c-4.7-8.22-10.57-15.27-15.27-18.79a18.59,18.59,0,0,0-14.09-5.87c-3.52,0-7,2.35-11.74,7s-5.87,8.22-5.87,12.92c0,3.52,2.34,10.57,5.87,18.79a229.83,229.83,0,0,0,16.44,25.84c7,9.39,14.09,17.61,21.13,23.48,7,2.35,11.75,4.7,16.45,4.7Zm24.66-122.13L106.86,65.76c-7-20-11.74-34.05-16.44-39.93-3.52-5.87-7-9.39-11.74-9.39A10.66,10.66,0,0,0,70.46,20a15.11,15.11,0,0,0-4.7,11.75c0,8.22,3.52,21.13,9.4,39.92s15.26,44.63,27,75.16c1.17-2.35,2.34-3.52,4.69-3.52,2.35-1.18,4.7-1.18,7-1.18h5.87c3.52,1.18,8.22,1.18,15.27,2.35Zm28.18,76.33c-7,0-14.09-1.17-21.14-2.35s-12.92-2.35-18.79-4.7c2.35,5.88,4.7,10.57,7,16.45a86.62,86.62,0,0,1,4.7,16.44c3.52-4.7,8.22-9.4,12.91-14.1,5.87-4.69,10.57-8.22,15.27-11.74Zm34.05-68.11c11.75-30.53,20-56.37,27-76.33,5.88-20,9.4-31.71,9.4-36.4a19.93,19.93,0,0,0-3.52-11.75,10.67,10.67,0,0,0-8.23-3.52c-4.69,0-9.39,3.52-14.09,11.74A203.86,203.86,0,0,0,191.41,74l-25.83,72.81,31.7,5.87Z"
                  transform="translate(0 0)"
                />
              </svg>
            </a>
            <a
              className="group -m-1 p-1"
              aria-label="Follow on Twitter"
              href="https://twitter.com/sub_0dh"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 lg:h-8 lg:w-8 fill-core-green-300 hover:fill-core-green-700"
              >
                <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
              </svg>
            </a>

            <a
              className="group -m-1 p-1"
              aria-label="Follow on GitHub"
              href="https://github.com/subodhGalande"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 lg:h-8 lg:w-8 fill-core-green-300 hover:fill-core-green-700"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                ></path>
              </svg>
            </a>
            <a
              className="group -m-1 p-1"
              aria-label="Follow on LinkedIn"
              href="https://www.linkedin.com/in/subodh-galande/"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 lg:h-8 lg:w-8 fill-core-green-300 hover:fill-core-green-700"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

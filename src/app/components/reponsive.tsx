import Image from 'next/image';
import React from 'react';

const Responsive = () => {
  return (
    <div className="text-yellow-400 py-1">
      {/* Navbar */}
      <nav className="bg-[#2f2f1a] py-3 flex justify-between items-center px-6">
        <h1 className="italic font-bold text-2xl">Levish</h1>
        <ul className="hidden sm:flex space-x-8 font-semibold">
          <li className="hover:text-yellow-300 cursor-pointer">HOME</li>
          <li className="hover:text-yellow-300 cursor-pointer">ABOUT</li>
          <li className="hover:text-yellow-300 cursor-pointer">SERVICES</li>
        </ul>
      </nav>

      {/* Products Section */}
      <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center px-4">
        {/* Product 1 */}
        <div className="border-2 border-[#d9ae2b] rounded-md p-5 w-full max-w-xs">
          <Image
            className="rounded-sm mx-auto mt-5"
            src="/products/perfume1.jpg"
            width={300}
            height={300}
            alt="Perfume Bottle"
          />
          <h1 className="text-2xl font-serif mt-4 text-center">DOLCE & GABBANA</h1>
          <p className="text-xl font-normal mt-4 text-center">Rs : 5,400</p>
          <button className="mt-5 py-3 w-full border-2 border-[#d9ae2b] rounded-md hover:bg-[#d9ae2b] hover:text-black transition duration-200">
            ADD TO CART
          </button>
        </div>

        {/* Product 2 */}
        <div className="border-2 border-[#d9ae2b] rounded-md p-5 w-full max-w-xs">
          <Image
            className="rounded-sm mx-auto mt-5"
            src="/products/perfume2.jpg"
            width={300}
            height={300}
            alt="Perfume Bottle"
          />
          <h1 className="text-2xl font-serif mt-4 text-center">NaeeSH</h1>
          <p className="text-xl font-normal mt-4 text-center">Rs : 5,400</p>
          <button className="mt-5 py-3 w-full border-2 border-[#d9ae2b] rounded-md hover:bg-[#d9ae2b] hover:text-black transition duration-200">
            ADD TO CART
          </button>
        </div>

        {/* Product 3 */}
        <div className="border-2 border-[#d9ae2b] rounded-md p-5 w-full max-w-xs">
          <Image
            className="rounded-sm mx-auto mt-5"
            src="/products/perfume3.jpg"
            width={300}
            height={300}
            alt="Perfume Bottle"
          />
          <h1 className="text-2xl font-serif mt-4 text-center">NaeeSH</h1>
          <p className="text-xl font-normal mt-4 text-center">Rs : 5,400</p>
          <button className="mt-5 py-3 w-full border-2 border-[#d9ae2b] rounded-md hover:bg-[#d9ae2b] hover:text-black transition duration-200">
            ADD TO CART
          </button>
        </div>

        {/* Product 4 */}

{/* Product 4 */}
<div className="border-2 border-[#d9ae2b] rounded-md p-5 flex flex-col justify-between">
  <Image
    className="rounded-sm mx-auto mt-5"
    src="/products/perfume4.jpg"
    width={300}
    height={300}
    alt="Perfume Bottle"
  />
  <h1 className="text-2xl font-serif mt-6 text-center">NaeeSH</h1> {/* Added margin-top */}
  <p className="text-xl font-normal mt-4 text-center">Rs : 5,400</p> {/* Added margin-top */}
  <button className="mt-auto py-3 w-full border-2 border-[#d9ae2b] rounded-md hover:text-green-500">
    ADD TO CART
  </button>
</div>


        {/* Product 5 */}

<div className="border-2 border-[#d9ae2b] rounded-md p-5 flex flex-col min-h-full">
  <Image
    className="rounded-sm mx-auto mt-5 md:my-10"
    src="/products/perfume5.jpg"
    width={300}
    height={300}
    alt="Perfume Bottle"
  />
  <h1 className="text-2xl font-serif mt-2 text-center">NaeeSH</h1> {/* Added margin-top */}
  <p className="text-xl font-normal mt-4 text-center">Rs : 5,400</p> {/* Added margin-top */}
  <button className="mt-auto py-3 w-full border-2 border-[#d9ae2b] rounded-md hover:text-green-500">
    ADD TO CART
  </button>
</div>



        {/* Product 6 */}
        <div className="border-2 border-[#d9ae2b] rounded-md p-5 w-full max-w-xs">
          <Image
            className="rounded-sm mx-auto mt-5"
            src="/products/perfume6.jpg"
            width={300}
            height={300}
            alt="Perfume Bottle"
          />
          <h1 className="text-2xl font-serif mt-4 text-center">NaeeSH</h1>
          <p className="text-xl font-normal mt-4 text-center">Rs : 5,400</p>
          <button className="mt-5 py-3 w-full border-2 border-[#d9ae2b] rounded-md hover:bg-[#d9ae2b] hover:text-black transition duration-200 ">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Responsive;




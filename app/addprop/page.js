import React from 'react';



export default function Page() {
  return (
    <main className="max-w-[1260px] mx-auto p-4 height-[100%]">


   <section class="bg-cream text-[#92400e] flex justify-between items-center p-4 rounded-lg">
      <span>Have a question? +9985 254 784</span>
      <span>Visit us: 9am to 10pm (Mon - Fri)</span>
   </section>


   <section className="rounded-lg relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/addp.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-sm md:text-lg text-[#fff] font-bold">Property Add</h2>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold text-[#3b83f6d6]">Add Property</h1>
         <p className="mt-4 text-md md:text-lg text-[#fff] font-bold">Huge number of properties available here for buy and sell, <br />also you can find co-living property</p>
       </div>
  </section>





     <section class=" mt-10 max-w-[1260px] mx-auto bg-white p-6 rounded-lg shadow-md">
    {/* <!-- Property Title and Price --> */}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="propertyTitle">Property Title</label>
        <input type="text" id="propertyTitle" placeholder="Property Title" class="mt-2 h-20  w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
      </div>
      <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="price">Price</label>
        <select id="price" class="mt-2 h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent">
          <option>Price $</option>
          <option>$100</option>
          {/* <!-- Additional options can be added here --> */}
        </select>
      </div>
    </div>

    {/* <!-- Property Description --> */}
    <div class="mt-6">
      <label class="block text-lg font-medium text-[#3b83f6d6]" for="propertyDescription">Property Description</label>
      <textarea id="propertyDescription" placeholder="Write Your Text Here" class="mt-2  w-full h-32 border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"></textarea>
    </div>

    {/* <!-- Location 1 and Location 2 --> */}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="location1">Location 1</label>
        <input type="text" id="location1" placeholder="Address line 1" class="mt-2 h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
      </div>
      <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="location2">Location 2</label>
        <input type="text" id="location2" placeholder="Address line 2" class="mt-2  h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
      </div>
    </div>


     {/* <!-- city and zipcode --> */}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="location1">City</label>
        <input type="text" id="city" placeholder="city" class="mt-2  h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
      </div>
      <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="location2">ZipCode</label>
        <input type="text" id="zipcode" placeholder="zipcode" class="mt-2  h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
      </div>
    </div>


     {/* <!-- property type and property status --> */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
        <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="price">Property Type</label>
        <select id="price" class="mt-2  h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent">
          <option>Duplex Villa</option>
          <option>Duplex</option>
          <option>villa</option>
          {/* <!-- Additional options can be added here --> */}
        </select>
        </div>
        <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="price">Property Status</label>
        <select id="price" class="mt-2  h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent">
          <option>Sale</option>
          <option>High price</option>
          <option>Low Price</option>
          {/* <!-- Additional options can be added here --> */}
        </select>
        </div>
      </div>



       {/* <!-- Property Type and Number of Bedroom --> */}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="location1">Property Type</label>
        <input type="text" id="Property Type" placeholder="Property Size(sqft)" class="mt-2 h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
      </div>
      <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="location2">Number of Bedroom</label>
        <input type="text" id="Number of Bedroom" placeholder="Number of Bedroom" class="mt-2 h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
      </div>
    </div>



     {/* <!-- Number of Bathroom and Number of Garage --> */}
     <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="location1">Number of Bathroom</label>
        <input type="text" id="NumberofBathroom" placeholder="Number of Bathroom" class="mt-2 h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
      </div>
      <div>
        <label class="block text-lg font-medium text-[#3b83f6d6]" for="location2">Number of Garage</label>
        <input type="text" id="NumberofGarage" placeholder="Number of Garage" class="mt-2  h-20 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
      </div>
    </div>



    <div className="mt-6">
     <h2 className="text-lg font-semibold text-[#3b83f6d6] mb-2">Add Images</h2>
   <div className=" place-content-center text-center relative w-full mt-2 h-32  border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent">
    <input 
      type="file" 
      accept="image/*" 
     placeholder="Upload Image"
    />
    </div>
   </div>



   <div className="mt-6">
     <h2 className="text-lg font-semibold text-[#3b83f6d6] mb-2">Add Videos</h2>
   <div className=" place-content-center text-center relative w-full mt-2 h-32  border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent">
    <input 
      type="file" 
      accept="video/*" 
     placeholder="Upload Video"
    />
    </div>
   </div>






   <div class="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
    <div class="w-full md:w-1/2">
        <h2 class="text-xl font-semibold mb-4 text-[#3b83f6d6]" >Property Amenities</h2>
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 bg-[#3b83f6d6]" />
                    <span class="ml-2">Air Conditioning</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]" />
                    <span class="ml-2">Bedding</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]" />
                    <span class="ml-2">Balcony</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]"/>
                    {/* Typo in ACable TV can be corrected if needed
                     */}
                    <span class="ml-2">ACable TV</span>  
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]"/>
                    <span class="ml-2">Oven</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]"/>
                    <span class="ml-2">Internet</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]"/>
                    <span class="ml-2">Parking</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]"/>
                    <span class="ml-2">Lift</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]"/>
                    <span class="ml-2">Pool</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]"/>
                    <span class="ml-2">Dishwasher</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]"/>
                    <span class="ml-2">Washing Machine</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-[#3b83f6d6]"/>
                    <span class="ml-2">Toaster</span>
                </label>
            </div>
        </div>
    </div>

   <div class="w-full md:w-1/2">
        <h2 class="text-xl font-semibold mb-4">Place on Map</h2>
        <div class="border rounded-md overflow-hidden">
        <iframe
                class="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622623648!2d-74.30932711162491!3d40.69701928803442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1722617960116!5m2!1sen!2sng"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0">
            </iframe>
        </div>
    </div>
</div>

<div class="mt-6">
    <button class="bg-[#3b83f6d6] text-[#fff] hover:bg-[#92400e] p-5 rounded-[10px]">
        Add Property
    </button>
</div>











  </section>
    </main>
  );
}
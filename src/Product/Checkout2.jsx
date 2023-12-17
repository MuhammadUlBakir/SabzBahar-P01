import React from 'react'
import PageHeader from '../Contents/PageHeader'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Checkout2 = () => {
  return (
      <>
          {/* ------------- Navbar */}
          <PageHeader />
          {/* ------------ Main */}
          <section>
          <div className='container mx-auto pt-[120px]'>
              <div className='flex gap-x-[30px]'>
                  <div className='col1 w-[55%] rounded-[10px] sticky top-0 bottom-0 overflow-hidden   '>
                          <div className=' pt-[35px]   bg-[#e9ffe9] px-[42px] pb-[83px]'>
                              <div className='w-[80%]  mx-auto'>
                                  {/* <div className='flex items-center gap-x-[17px] pb-[22px]'>
                                      <div>
                                          <p className='text-[green] font-inter text-[16px] font-medium leading-normal m-0'>Account</p>
                                      </div>
                                      <div className='flex items-center gap-x-[9px]'>
                                          <div className='h-[1px] w-full bg-[green]'></div>
                                          <div>
                                              <img src="/images/check1.svg" className='w-[70px] h-[24px]' alt="" />
                                          </div>
                                          <div className='h-[1px] w-full bg-[green]'></div>

                                      </div>
                                      <div>
                                          <p className='text-[#828282] font-inter text-[16px] font-medium leading-normal m-0'>Shipping</p>
                                      </div>
                                      <div className='flex items-center gap-x-[9px]'>
                                          <div className='h-[1px] w-full bg-[green]'></div>
                                          <div>
                                              <img src="/images/check1.svg" className='w-[70px] h-[24px]' alt="" />
                                          </div>
                                          <div className='h-[1px] w-full bg-[green]'></div>

                                      </div>
                                      <div>
                                          <p className='text-[#828282] font-inter text-[16px] font-medium leading-normal m-0'>Payment</p>
                                      </div>
                                  </div> */}
                                  <Swiper
                                      spaceBetween={40}
                                      slidesPerView={1}
                                      speed={700}
                                      pagination={{
                                          clickable: true,
                                          renderBullet: (index, className) => `<span class="${className}">${index === 0 ? "Acount" : (index === 1 ? "Shipping" : (index === 2 ? "Payment" : ""))}</span>`,
                                              modifierClass: 'custom-pagination', // Add a custom class

                                        }}
                                      
                                      modules={[Pagination]}
                                  >
                                      
                                      
                                      <SwiperSlide>
                                          
                                          <div className='pt-[52px] pb-[40px]'>
                                              <div className='pb-[15px]'>
                                              <div className='full h-[2px] bg-[#E2E8F0]'></div>
                                              </div>
                                      <p className='text-black text-[19px] font-semibold leading-normal font-inter m-0 pt-[15px] pb-[15px]'>Account details</p>
                                      <div className='pt-[15px] pb-[17.5px]'>
                                          <p className='text-[#718096] font-inter text-[14px] font-medium pb-[10.5px]'>Email address</p>
                                          <div className='mt-[10.5px] mb-[10px] px-[20px] py-[20px] bg-[#c8fdc8] rounded-[10px]'>
                                              <input type="email" placeholder='Email@myemail.com' className='bg-transparent border-0 focus:outline-none w-full font-inter text-[14px] font-medium placeholder:text-black' />
                                          </div>
                                          <p className='text-[#718096] font-inter text-[14px] font-medium pb-[10.5px] pt-[10px]'>Email address</p>
                                          <div className='mt-[10.5px] px-[20px] py-[20px] bg-[#c8fdc8] rounded-[10px]'>
                                              <input type="text" placeholder='********' className='bg-transparent border-0 focus:outline-none w-full font-inter text-[14px] font-medium placeholder:text-black' />
                                          </div>
                                      </div>
                                      <div className='flex items-center justify-end text-right pt-[17.5px] gap-x-[30px] '>
                                          <div className='col1'>
                                              <p className='font-inter text-[14px] font-medium'>Register for account</p>
                                          </div>
                                          <div className='col2'>
                                              <div className='px-[28px] cursor-pointer py-[16px] bg-[#3e6553] rounded-[8px] font-inter text-[14px] font-medium  text-white'>Login</div>
                                          </div>
                                      </div>
                                  </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                      <div className='pt-[52px] pb-[40px]'>
                                      <div className='pb-[15px]'>
                                              <div className='full h-[2px] bg-[#E2E8F0]'></div>
                                              </div>
                                              <p className='text-black text-[19px] font-semibold leading-normal font-inter m-0 pt-[15px] pb-[15px]'>Shipping details</p>
                                              
                                              <div className='pt-[15px] pb-[10px]'>
                                              <p className='text-[#718096] font-inter text-[14px] font-medium pb-[10.5px]'>First line of address</p>
                                          <div className='mt-[10.5px] mb-[10px] px-[20px] py-[20px] bg-[#c8fdc8] rounded-[10px]'>
                                              <input type="text" placeholder='Enter Your Full Address' className='bg-transparent border-0 focus:outline-none w-full font-inter text-[14px] font-medium placeholder:text-black' />
                                          </div>
                                     </div>
                                     <div className='pt-[10px] pb-[10px]'>
                                              <p className='text-[#718096] font-inter text-[14px] font-medium pb-[10.5px]'>Street name</p>
                                          <div className='mt-[10.5px] mb-[10px] px-[20px] py-[20px] bg-[#c8fdc8] rounded-[10px]'>
                                              <input type="text" placeholder='Enter Your Street Name' className='bg-transparent border-0 focus:outline-none w-full font-inter text-[14px] font-medium placeholder:text-black' />
                                          </div>
                                     </div>
                                     <div className='pt-[10px] flex justify-between'>
                                                  <div className='col1 w-[40%]'>
                                                  <p className='text-[#718096] font-inter text-[14px] font-medium pb-[10.5px]'>Postcode</p>
                                          <div className='mt-[10.5px] mb-[10px] px-[20px] py-[20px] bg-[#c8fdc8] rounded-[10px]'>
                                              <input type="text" placeholder='Code' className='bg-transparent border-0 focus:outline-none w-full font-inter text-[14px] font-medium placeholder:text-black' />
                                          </div>
                                                  </div>
                                                  <div className='col1 w-[50%]'>
                                                  <p className='text-[#718096] font-inter text-[14px] font-medium pb-[10.5px]'>Select shipping</p>
                                      
                                          <div class="relative pt-[10.5px] flex items-center">
  <select class="block appearance-none w-full px-[20px] py-[24px] bg-[#c8fdc8] rounded-[10px] text-[14px] font-inter text-black font-medium leading-tight focus:outline-none">
    <option>Leopard</option>
    <option>TCS</option>
    <option>DHL</option>
  </select>
  <div class="pointer-events-none absolute right-[10px] top-[50%] translate-y-[-50%] flex items-center pt-[13px]  text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8 1.5-1.5L10 9l6.5-6.5L18 4z"/></svg>
  </div>
                                          </div>
                                              </div>
                                     </div>
                                    
                                  </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                      <div className='pt-[52px] pb-[40px]'>
                                      <p className='text-black text-[16px] font-medium leading-normal font-inter m-0 pb-[15px]'>Account details</p>
                                      <div className='pt-[15px] pb-[17.5px]'>
                                          <p className='text-[#718096] font-inter text-[14px] font-medium pb-[10.5px]'>Email address</p>
                                          <div className='mt-[10.5px] mb-[10px] px-[20px] py-[20px] bg-[#c8fdc8] rounded-[10px]'>
                                              <input type="email" placeholder='Email@myemail.com' className='bg-transparent border-0 focus:outline-none w-full font-inter text-[14px] font-medium placeholder:text-black' />
                                          </div>
                                          <p className='text-[#718096] font-inter text-[14px] font-medium pb-[10.5px] pt-[10px]'>Email address</p>
                                          <div className='mt-[10.5px] px-[20px] py-[20px] bg-[#c8fdc8] rounded-[10px]'>
                                              <input type="text" placeholder='********' className='bg-transparent border-0 focus:outline-none w-full font-inter text-[14px] font-medium placeholder:text-black' />
                                          </div>
                                      </div>
                                      <div className='flex items-center justify-end text-right pt-[17.5px] gap-x-[30px] '>
                                          <div className='col1'>
                                              <p className='font-inter text-[14px] font-medium'>Register for account</p>
                                          </div>
                                          <div className='col2'>
                                              <div className='px-[28px] cursor-pointer py-[16px] bg-[#3e6553] rounded-[8px] font-inter text-[14px] font-medium  text-white'>Login</div>
                                          </div>
                                      </div>
                                  </div>
                                      </SwiperSlide>
                                  </Swiper>
                                  <div className='mt-[40px] mb-[19.25px] h-[2px] w-full bg-[#E2E8F0]'></div>
                                  <div className='flex gap-x-[30px] items-center justify-end pt-[19.25px]'>
                                  <div className='col1'>
                                              <p className='font-inter text-[14px] font-medium'>Cancel order</p>
                                          </div>
                                          <div className='col2'>
                                              <div className='px-[28px] cursor-pointer py-[16px] bg-[#3e6553] rounded-[8px] font-inter text-[14px] font-medium  text-white'>Shipping details</div>
                                          </div>
                                  </div>
                          </div>
                          </div> 
                      </div>
                      <div className='col2 w-[45%] bg-[#e9ffe9] rounded-[10px]'>
                          <div className='px-[45px] pt-[35px] pb-[61px]'>
                              <p className='text-black font-inter font-medium leading-normal m-0 pb-[10px]'>Order Summary</p>
                              {/* ------------Item Div */}
                              <div className='pb-[10px]'>
                              <div className='pt-[10px] pb-[10px]'>
                                  <div className='aspect-[6/3] rounded-[10px] overflow-hidden shadow-md '>
                                      <img src="/images/pot.png" className='w-[40%] mx-auto h-[100%] object-cover' alt="" />
                                  </div>
                              </div>
                              <div className='pt-[10px]  items-center justify-between flex'>
                                  <div className='col1 w-[60%]'>
                                      <p className='font-inter text-black font-medium leading-normal m-0 pb-[6.5px]'>Sony wireless headphones</p>
                                      <p className='font-inter text-[15px] font-semibold leading-normal m-0 '>£320.45</p>
                                  </div>
                                  <div className='col2 flex gap-x-[15px] items-center w-[30%]'>
                                      <div className='px-[8px] py-[8px] cursor-pointer text-center select-none  rounded-[5px] bg-[#E2E8F0]'>
                                          <img src="/images/plus.svg" className='w-[18px] h-[18px]' alt="" />
                                      </div>
                                      <div>
                                          <p className='text-black font-inter text-[14px] font-medium m-0'>1</p>
                                      </div>
                                      <div className='px-[8px] cursor-pointer select-none py-[8px] text-center  rounded-[5px] bg-[#E2E8F0]'>
                                          <img src="/images/minus.svg" className='w-[18px] h-[18px]' alt="" />
                                      </div>
                                  </div>
                              </div>
                              </div>
                              <div className='pb-[10px]'>
                              <div className='pt-[10px] pb-[10px]'>
                                  <div className='aspect-[6/3] rounded-[10px] overflow-hidden shadow-md '>
                                      <img src="/images/flowerp.png" className='w-[40%] mx-auto h-[100%] object-cover' alt="" />
                                  </div>
                              </div>
                              <div className='pt-[10px]  items-center justify-between flex'>
                                  <div className='col1 w-[60%]'>
                                      <p className='font-inter text-black font-medium leading-normal m-0 pb-[6.5px]'>Sony wireless headphones</p>
                                      <p className='font-inter text-[15px] font-semibold leading-normal m-0 '>£320.45</p>
                                  </div>
                                  <div className='col2 flex gap-x-[15px] items-center w-[30%]'>
                                      <div className='px-[8px] py-[8px] cursor-pointer text-center select-none  rounded-[5px] bg-[#E2E8F0]'>
                                          <img src="/images/plus.svg" className='w-[18px] h-[18px]' alt="" />
                                      </div>
                                      <div>
                                          <p className='text-black font-inter text-[14px] font-medium m-0'>1</p>
                                      </div>
                                      <div className='px-[8px] cursor-pointer select-none py-[8px] text-center  rounded-[5px] bg-[#E2E8F0]'>
                                          <img src="/images/minus.svg" className='w-[18px] h-[18px]' alt="" />
                                      </div>
                                  </div>
                              </div>
                              </div>
                              <div className='pt-[15px]'>
                                  <p className='text-[#718096] m-0 text-[14px] font-medium pb-[11px]'>Gift Card / Discount code</p>
                                  <div className='flex pt-[11px] pb-[25px] gap-x-[26px]'>
                                      <div className='col1 w-[70%]'>
                                          <div className='px-[20px] py-[16px] bg-[#c8fdc8] '>
                                          <input type="text" placeholder='Enter Code' className='bg-transparent border-0 select-none focus:outline-none w-full font-inter text-[14px] text-black text-semibold placeholder:text-black' name="" id="" />
                                          </div>
                                      </div>
                                      <div className='col2 w-[30%]'>
                                          <div className='px-[28px] cursor-pointer rounded-[10px] py-[16px] border-[2px] border-solid border-[#3e6553] text-[3e6553] text-[14px] font-medium font-inter leading-normal'>Apply</div>
                                      </div>
                                  </div>
                                  <div className='pt-[25px] flex justify-between'>
                                          <p className='font-inter text-black text-[16px] font-medium m-0'>Sub total</p>
                                          <p className='font-inter text-black text-[16px] font-medium'>£316.55</p>
                                  </div>
                                  <div className='pt-[20px] pb-[20px] flex justify-between'>
                                          <p className='font-inter text-black text-[16px] font-medium m-0'>Tax</p>
                                          <p className='font-inter text-black text-[16px] font-medium'>£3.45</p>
                                  </div>
                                  <div className='pb-[20px] flex justify-between'>
                                          <p className='font-inter text-black text-[16px] font-medium m-0'>Shipping</p>
                                          <p className='font-inter text-black text-[16px] font-medium'>None</p>
                                  </div>
                                  <div className='h-[2px] w-full bg-[grey] mb-[10px]'></div>
                                  <div className='pb-[20px] flex justify-between'>
                                          <p className='font-inter text-black text-[20px] font-medium m-0'>Total</p>
                                          <p className='font-inter text-black text-[20px] font-medium'>£320.45</p>
                                  </div>
                              </div>
                          </div>
                      </div>
              </div>
          </div>
          </section>
      </>
    )
}

export default Checkout2
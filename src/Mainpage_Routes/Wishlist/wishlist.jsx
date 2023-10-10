import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Pagetitle from '../../Contents/Pagetitle'
import PageHeader from '../../Contents/PageHeader'
import CardPreview from '../Product/CardPreview'
import cookie from 'cookie_js'
import Wishlistcard from './Wishlistcard'
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Newest', href: '#' },
  { name: 'Best Rating', href: '#' },
  { name: 'Price : Low to High', href: '#' },
  { name: 'Price : High to Low', },
]
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'Flower', label: 'Flower', checked: false },
      { value: 'Nonflower', label: 'Nonflower', checked: false },
      { value: 'Outdoor', label: 'Outdoor', checked: false },
      { value: 'Indoor', label: 'Indoor', checked: false },
      { value: 'Succulents', label: 'Succulents', checked: false },
      { value: 'Medicinal', label: 'Medicinal', checked: false },

    ],
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Wishlistpage () {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [loading, Setloading] = useState(false);
    const [data, Setdata] = useState([]);
  const Navigate = useNavigate();
    //------------------------
    const WishlistItems = async () => {
      try {
          const userid = cookie.get("Userid");
          const products = await axios.post("/api/getwishdata" , {userid});
        if (products.data) {
          Setdata(products.data.getWishlistdata.whishproducts);
        } else {
          console.log("Data Not Found");
         }
      } catch (error) {
          console.log(error);
      }
  }
    //---------------------------- hi
    useEffect(() => {
        WishlistItems();
    },[])
  return (
    <>
      <Pagetitle title = {`Wishlist`} />
      <PageHeader/>
     <div className="">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen} >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto  py-4 pb-12 shadow-xl" style={{backgroundColor : "white" , color : "black"}}>
                  {/* <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md  p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div> */}

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                      <h3 style={{ color: "black", marginLeft: "25px", marginTop: "10px" , paddingBlock : "30px" }} onClick={() => setMobileFiltersOpen}>{"< Close Menu"}</h3>
                     
                    {/* <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                          
                          </a>
                        </li>
                      ))}
                    </ul> */}

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6" style={{backgroundColor : "white"}}>
                        
                          <>
                            {/* <h3 className="-mx-2 -my-3 flow-root">
                              
                              <Disclosure.Button className="flex w-full items-center justify-between  px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                
                                </span>
                              </Disclosure.Button>
                            </h3> */}
                           
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                      onClick={() => MobileFilterNaigate(option.label)}
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            
                          </>
                        
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900" style={{color : "grey"}}>Wishlist Items</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md  shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>


          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              

              {/* Product grid */}
                {/* <Product_Cards carddata ={filterProduct}/> */}
                {/* {!filterProduct ? alert("data Not Found") : <><CardPreview data = {filterProduct} loadingStatus = {loading} /></>} */}
                <Wishlistcard data = {data} />
                              <ul>
                                  
                                  {/* {datas.map((elm , ind) => {
                                      return (<li key={elm._id}>{ind}</li>)
                                 })} */}
                              </ul>
            </div>
          </section>
        </main>
      </div>
      </div>
     
    </>
  )
}

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Product_Cards from './Product_Cards'
import './style.css'
import PageHeader from '../Contents/PageHeader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import PageFooter from '../Contents/PageFooter'
import PageFooter2 from '../Contents/PageFooter2'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import CardPreview from '../Mainpage_Routes/Product/CardPreview'
import Pagetitle from '../Contents/Pagetitle'
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

export default function Product_Filter () {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filterProduct, setFilterProduct] = useState([]); // State to store filtered products
  const [loading, Setloading] = useState(false);
  const { cname } = useParams();
  const Navigate = useNavigate();
  const LowtoHigh = async () => {
    try {
      Setloading(true);
      const productdata = await axios.get("https://cyan-light-chameleon.cyclic.cloud/api/getproduct");
      const Filterproduct = productdata.data.Productdata.filter(elm => elm.productcategory === cname);
  
      // Sort Filterproduct array by productprice in ascending order (low to high)
      Filterproduct.sort((a, b) => a.productprice - b.productprice);
      Setloading(false)
      setFilterProduct(Filterproduct);
    } catch (error) {
      console.log(error);
    }
  };
  const MobileFilterNaigate = (val) => {
    setMobileFiltersOpen(false)
    Navigate(`/filter/${val}`);

  }
  const HightoLow = async () => {
    try {
      const productdata = await axios.get("https://cyan-light-chameleon.cyclic.cloud/api/getproduct");
      const Filterproduct = productdata.data.Productdata.filter(elm => elm.productcategory === cname);
  
      // Sort Filterproduct array by productprice in descending order (high to low)
      Filterproduct.sort((a, b) => b.productprice - a.productprice);
  
      setFilterProduct(Filterproduct);
    } catch (error) {
      console.log(error);
    }
  };
  const Newest = async () => {
    try {
      const productdata = await axios.get("https://cyan-light-chameleon.cyclic.cloud/api/getproduct");
      const Filterproduct = productdata.data.Productdata.filter(elm => elm.productcategory === cname);

      // Sort the products based on createdAt timestamp in descending order (newest first)
      Filterproduct.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
      // You can modify the number to get the desired amount of newest products
      const numberOfNewestProducts = 4; // For example, get the 5 newest products
      
      const newestProducts = Filterproduct.slice(0, numberOfNewestProducts);
      setFilterProduct(newestProducts);

    } catch (error) {
      console.log(error);
    }
  }
  const Rating = async () => {
    try {
      const productdata = await axios.get("https://cyan-light-chameleon.cyclic.cloud/api/getproduct");
      const Filterproduct = productdata.data.Productdata.filter(elm => elm.productcategory === cname);
  
      // Sort Filterproduct array by productprice in descending order (high to low)
      Filterproduct.sort((a, b) => b.productprice - a.productprice);
      const Toprating = Filterproduct.slice(0, 4);
      setFilterProduct(Toprating);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      if (cname) {
        Setloading(true);
        try {
          const productdata = await axios.get("https://cyan-light-chameleon.cyclic.cloud/api/getproduct");
          const Filterproduct = productdata.data.Productdata.filter(elm => elm.productcategory === cname);
          Setloading(false)
          setFilterProduct(Filterproduct);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [cname]);
  return (
    <>
      <Pagetitle title = {`${cname} plants`} />
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
              <h1 className="text-3xl font-bold tracking-tight text-gray-900" style={{color : "grey"}}>{cname} Plants</h1>

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
              <form className="hidden lg:block border-r-2">

                <h2 className='text-xl mb-5 font-semibold'>Filters</h2>
                <h3 className="sr-only " style={{color : "grey"}}>Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900" style={{color : "grey"}}>
                    <li onClick={Newest}>Newest</li>
                    <li onClick={Rating}>Top Rating</li>
                    <li onClick={LowtoHigh}>Price : Low to high</li>
                    <li onClick={HightoLow}>Price : High to Low</li>
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6" >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900"  style={{color : "grey" , fontSize : "17px" , fontWeight : "bold"}}>{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center"  style={{color : "grey"}}>
                                
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                  onClick={() => Navigate(`/filter/${option.value}`)}
                                  style={{ color: "grey" }}
                                >
                                  {option.value}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
                {/* <Product_Cards carddata ={filterProduct}/> */}
                {!filterProduct ? alert("data Not Found") : <><CardPreview data = {filterProduct} loadingStatus = {loading} /></>}
            </div>
          </section>
        </main>
      </div>
      </div>
     
    </>
  )
}

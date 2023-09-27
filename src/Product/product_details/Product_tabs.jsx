import React, { useEffect } from 'react'
import '../style.css'
import {
    Tab,
    initTE,
} from "tw-elements";

function Product_tabs(props) {
    const { productdata , Customerdata } = props;
    useEffect(() => {
        initTE({ Tab });
    }, [])


    return (
        <>
            {/* <!--Tabs navigation for neutral-800 color--> */}
            <ul
                className="mb-5 flex list-none flex-row flex-wrap border-0 pl-0"
                role="tablist"
                data-te-nav-ref>
                <li role="presentation">
                    <a
                        href="#tabs-home7"
                        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-[#3e6553] data-[te-nav-active]:text-[#3e6553] data-[te-nav-active]:font-bold dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-neutral-600 dark:data-[te-nav-active]:text-neutral-600"
                        data-te-toggle="pill"
                        data-te-target="#tabs-home7"
                        data-te-nav-active
                        role="tab"
                        aria-controls="tabs-home7"
                        aria-selected="true"
                    >Description</a>
                </li>
                <li role="presentation">
                    <a
                        href="#tabs-profile7"
                        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-[#3e6553] data-[te-nav-active]:text-[#3e6553] data-[te-nav-active]:font-bold dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-neutral-600 dark:data-[te-nav-active]:text-neutral-600"
                        data-te-toggle="pill"
                        data-te-target="#tabs-profile7"
                        role="tab"
                        aria-controls="tabs-profile7"
                        aria-selected="false"
                    >User Reviews</a>
                </li>
            </ul>

            {/* <!--Tabs content for neutral-800 color--> */}
            <div className="mb-6 border-[#3e6553] border-[1px] rounded-lg h-[250px] p-5   ">
                <div
                    className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-home7"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tab7"
                    data-te-tab-active>
                    {productdata}
                </div>
                <div
                    className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-profile7"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab7">
                    {Customerdata}
                </div>
            </div>
        </>
    )
}

export default Product_tabs

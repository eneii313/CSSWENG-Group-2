import { IconCameraPlus, IconPlus } from "@tabler/icons";

function Add_Product() {
    return (
        <>
            <div className="flex bg-[#282828] w-full h-[100px] items-center place-content-between pr-16">
                <p className="text-[26px] text-white ml-[25px] font-semibold">Add New Product</p>
                <button className="px-[32px] py-[10px] bg-sky-500 rounded-md text-[20px] text-white font-bold
                                    hover:bg-sky-600 hover:shadow-md hover:transition duration-300"
                                    id="preview">
                                    Live Preview
                </button>
            </div>

            <form action="">
                <div className="flex-row px-[50px] py-[25px] bg-white">

                    {/* Image Upload */}
                    <div className="flex flex-col mt-3">
                        <div className="flex">
                            <span className="text-[20px] font-semibold w-48 text-right">Product Images: </span>
                            <div className="px-3 py-2"> 
                                <span className="ml-2 text-[20px] font-normal">
                                    <button className="bg-transparent text-black px-6 py-2 text-[20px] border-dashed border-2 border-gray-600
                                                        hover:bg-gray-200  hover:transition duration-300"
                                            id="addimage">
                                        <span className="flex justify-center items-center"><IconCameraPlus size="46px" /></span>Add Image
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Product Name */}
                    <div className="flex flex-col mt-3">
                        <div className="flex items-center ">
                            <span className="text-[20px] font-semibold w-48 text-right">Product Name: </span>
                            <span className="text-[20px] font-normal px-3 w-9/12">
                            <input
                                type="text"
                                name="productname"
                                id="productname"
                                className="w-full rounded-sm border border-black block p-1 px-2"
                            />
                            </span>
                        </div>
                    </div>

                    {/* Product Category */}
                    <div className="flex flex-col mt-3">
                        <div className="flex items-center ">
                            <span className="text-right text-[20px] font-semibold w-48 text-right">Category: </span>
                            <span className="flex text-[20px] font-normal px-3">
                            <select
                                name="category"
                                id="category"
                                className="w-auto rounded-sm border border-black block p-1 px-2"
                            >
                                {/* TODO: Retrieve Category Options from database */}
                                <option value="category0">None</option>
                                <option value="category1">Business & Marketing</option>
                                <option value="category2">Events</option>
                                <option value="category3">Office & Stationery</option>
                            </select>
                            </span>
                        </div>
                    </div>

                    {/* Featured */}
                    <div className="flex flex-col mt-3">
                        <div className="flex items-center">
                            <span className="text-[20px] font-semibold w-48 text-right">Featured Product: </span>
                            <span className="text-[20px] font-normal px-3">
                            <input
                                type="checkbox"
                                name="featured"
                                id="featured"
                                className="w-5 h-5 rounded-sm border border-black block p-1 mt-1"
                            />
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col mt-3">
                        <div className="flex">
                            <span className="text-[20px] font-semibold w-48 text-right">Product Description: </span>
                            <span className="text-[20px] font-normal px-3 w-9/12">
                            <textarea
                                name="productdesc"
                                id="productdesc"
                                className="w-full rounded-sm border border-black block p-1 px-2"
                            />
                            </span>
                        </div>
                    </div>

                    <div id="productfeatures" className="mt-8">
                        <span className="font-bold text-[20px]">PRODUCT FEATURES</span>
                        {/* Product Sizes */}
                        <div className="flex flex-col mt-4">
                            <div className="flex">
                                <span className="text-[20px] font-semibold w-48 text-right">Product Size: </span>
                                <div className="flex w-9/12 px-3">
                                    <span className="text-[20px] font-normal">
                                    
                                        <input
                                            type="text"
                                            name="productname"
                                            id="productname"
                                            className="w-full rounded-sm border border-black block p-1 px-2 mb-2"
                                        />
                                        
                                        <button className="flex justify-center w-full text-black px-6 py-2 text-[20px] bg-gray-300 rounded-md
                                                            hover:bg-gray-400 hover:transition duration-300"
                                                        id="addsize">
                                                    <IconPlus size="20px" /> Add Product Size
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Paper Types */}
                        <div className="flex flex-col mt-4">
                            <div className="flex">
                                <span className="text-[20px] font-semibold w-48 text-right">Paper Type: </span>
                                <div className="flex w-9/12 px-3">
                                    <span className="text-[20px] font-normal">
                                    
                                        <input
                                            type="text"
                                            name="productname"
                                            id="productname"
                                            className="w-full rounded-sm border border-black block p-1 px-2 mb-2"
                                        />
                                        
                                        <button className="flex justify-center w-full text-black px-6 py-2 text-[20px] bg-gray-300 rounded-md
                                                            hover:bg-gray-400 hover:transition duration-300"
                                                        id="addpaper">
                                                    <IconPlus size="20px" /> Add Paper Type
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Add New Product Feature */}
                        <button className="flex justify-center w-5/6 text-black px-6 py-2 text-[20px] bg-teal-200 rounded-md m-auto mt-4
                                            font-semibold hover:bg-teal-300 hover:transition duration-300"
                                            id="addpaper">
                                            <IconPlus size="20px" /> Add New Product Feature
                        </button>

                        {/* Product Variations */}
                        <div className="flex flex-col mt-8">
                            <div className="flex">
                                <span className="text-[20px] font-semibold w-48 text-right">Product Variations: </span>
                                
                                <table className="w-9/12 table-fixed ml-10">
                                    <tr>
                                        <td className="text-[20px]">Product Size:</td>
                                        <td className="text-[20px]">Quantity:</td>
                                        <td className="text-[20px]">Pieces:</td>
                                    </tr>

                                    <tr>
                                        <td className="text-[20px]">
                                        <select
                                            name="size1"
                                            id="size1"
                                            className="w-2/3 rounded-sm border border-black block p-1 px-2">
                                            {/* TODO: Retrieve Product Size Options from database */}
                                            <option value="size1">-</option>
                                            <option value="size2">-</option>
                                        </select>
                                        </td>
                                        <td className="text-[20px]">
                                            <input
                                                type="number"
                                                name="quantity1"
                                                id="quantity1"
                                                className="w-2/3 rounded-sm border border-black block p-1 px-2"
                                            />
                                        </td>
                                        <td className="text-[20px]">
                                            <input
                                                type="number"
                                                name="pieces1"
                                                id="pieces1"
                                                className="w-2/3 rounded-sm border border-black block p-1 px-2"
                                            />
                                        </td>
                                    </tr>
                                </table>
                                
                            </div>
                            {/* Add New Product Variation */}
                            <button className="flex justify-center w-5/6 text-black px-6 py-2 text-[20px] bg-teal-200 rounded-md m-auto mt-4
                                            font-semibold hover:bg-teal-300 hover:transition duration-300"
                                        id="addrow">
                                        <IconPlus size="20px" /> Add New Row
                            </button>
                        </div>

                    </div>
                    

                    <div className="flex justify-end mt-16">
                        <span >
                        <button className="px-[32px] py-[10px] bg-gray-200 rounded-md text-[20px] text-black font-bold
                                            hover:bg-gray-400 hover:shadow-md hover:transition duration-300 "
                            id="cancel">
                            CANCEL
                        </button>
                        </span>

                        <span className = " ml-12">
                            <button className="px-[32px] py-[10px] bg-green-600 rounded-md text-[20px] text-white font-bold
                                                hover:bg-green-800 hover:shadow-md hover:transition duration-300 "
                                id="publish">
                                PUBLISH
                            </button>
                        </span>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Add_Product;
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";

const Recipes = ({ title, descsh, desccost, cost, img, level, time, ing, withDefaultButtons = true }) => {

    return (
        <div className="flex bg-white h-38 rounded-md overflow-hidden shadow-md">
            <div className="h-full ">
                <img className='md:w-96 md:h-full md:block hidden rounded-md' src={img} alt="Recipes" />
            </div>
            <div className="flex py-4 px-4 w-full">
                <div className='w-4/5'>
                    <div className='font-bold text-xl'>
                        {title}
                    </div>
                    <p className="px-1 mt-2 text-gray-400 text-xs">{descsh}</p>
                    <div className="flex">
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiFillStar className="mt-2 text-yellow-300" />
                        <AiOutlineStar className="mt-2 text-gray-300" />
                    </div>
                    <div className="">
                        <div className="flex px-2 py-2 text-gray-400 text-xs">
                            <p className="w-1/2">Level</p>
                            <p className="w-1/2">{level}</p>
                        </div>
                        <div className="flex px-2 py-2 text-gray-400 text-xs">
                            <p className="w-1/2">Time</p>
                            <p className="w-1/2">{time}</p>
                        </div>
                        <div className="flex px-2 py-2 text-gray-400 text-xs">
                            <p className="w-1/2">Ingredients</p>
                            <p className="w-1/2 text-red-400">{ing}</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 flex flex-col">
                    <div className='px-1 py-1 font-bold text-base'>
                        {cost}
                    </div>
                    <p className="px-1 py-1 text-gray-400 text-xs">{desccost}</p>

                    <div className="bottom-0 right-0 space-x-3 flex justify-end items-center mt-auto">
                        {withDefaultButtons
                            ? <>
                                <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"><AiOutlineClose className="text-red-500" /></button>
                                <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><BsFillEmojiLaughingFill className="text-yellow-300" /></button>
                                <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><AiOutlineCheck className="text-green-700" /></button>
                            </>
                            : <>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold md:py-2 md:px-4 py-1.5 px-2 text-base rounded"> Dismiss</button>
                                <button className="bg-main hover:bg-main-dark text-white font-bold md:py-2 md:px-4 py-1.5 px-2 text-base rounded"> Select</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipes;
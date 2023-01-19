import React from 'react'
import { AiOutlineHome } from "react-icons/ai";

const Tabs = (props) => {
    const { changeCurrentTab } = props
  return (
    
<div className="border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="mr-2" onClick={() => changeCurrentTab("AddedProperties") }>
            <div className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg focus:text-red-600 focus:border-red-600  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <AiOutlineHome className="w-5 h-5 mr-2 text-gray-400 focus:text-red-600 group-focus:text-red-600 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" /> Added Properties
            </div>
        </li>
        <li className="mr-2" onClick={() => changeCurrentTab("ListedProperties") }>
            <div className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <AiOutlineHome className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" /> Listed properties
            </div>
        </li>
        {/* <li className="mr-2" onClick={() => changeCurrentTab("messages") }>
            <div className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <AiOutlineHome className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" /> Messages
            </div>
        </li>         */}
    </ul>
</div>

  )
}

export default Tabs
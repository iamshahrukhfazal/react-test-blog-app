import moment  from "moment"
export const PostTag = ({postedDate, date=true})=>{
    return <span
    class="m-1 flex flex-wrap justify-center items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
    {
        date?moment(postedDate).fromNow():postedDate
    }
    <svg xmlns="http://www.w3.org/2000/svg"
    class="w-3 h-3 sm:h-4 sm:w-4 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
    viewBox="0 0 20 20" fill="currentColor">

    </svg>
</span>
}

import React from 'react'

const ListItems = () => {
    const categories = [
        'All', 'Music', 'React', 'News', 'Java', 'Movies', 'Lives', 'Cricket', 'Drama', 'Horro', 'Computer'
        , 'Education', 'Mobiles', 'Games', 'Blog', 'Motivational', 'Maithili', 'Bihar', 'Madhubani', 'Love'
        , 'Courses',
    ]
  return (
    <div
    style={{
      scrollbarWidth: "none",        // Firefox
      msOverflowStyle: "none"        // IE and Edge
    }}
     className='flex overflow-x-scroll hide-scroll-bar px-4 '>
      <div className='flex space-x-4 flex-nowrap'>
      {categories.map((category)=>{
        return(
            <div key={category} className='flex-none border-b-2 rounded-xl
             border-gray-200 bg-gray-200 hover:bg-gray-300 duration-300 font-medium
             text-gray-700  cursor-pointer
             px-4 py-2 '>{category}</div>
        )

      })}
      </div>
    </div>
  )
}

export default ListItems

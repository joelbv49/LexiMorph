import React from 'react'

export default function Alert(props) {
  
  return (
    (props.alert)&&<div className={` bg-green-200 h-10 w-80 absolute left-[40rem] mt-3 transition-transform ease-linear translate-y-10 rounded-md px-2  items-center  space-x-3 flex `} role='alert'>
        <svg class="flex-shrink-0 w-4 h-4 fill-green-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
      <span className='text-green-500 font-semibold'>{props.alert.type},{props.alert.msg}</span>
    </div>
  )
}

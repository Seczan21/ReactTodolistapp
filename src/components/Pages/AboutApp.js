import React from 'react'

const AboutApp = () => {
  return (
   <>
  
   <div>
    <h1 className="font-bold text-justify flex pl-2 pr-4 mt-32  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl font-bold">About the App</h1>
    <p className="text-xl font-semibold text-justify flex pl-2 pr-4">
    In this app, you can add , delete, submit and edit items. To edit items,simply double click on it.Once you are done, press the enter key to resubmit.This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.
    </p>
   </div>
   </>
  )
}

export default AboutApp
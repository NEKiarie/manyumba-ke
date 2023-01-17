import React,{ useEffect } from 'react'

const Alert = (props) => {
    const { title, type, body,toggleAlert } = props
    useEffect(() => {
        const timeoutId = setTimeout(() => toggleAlert(false),3000)
        return () => {
            clearTimeout(timeoutId)
        }
    },[])
    let clss
    if(type === "success"){
        clss = "bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-5"
    } else {
        clss = "bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-5"
    }
    
    
  return (
    <div className={clss} role="alert">
        <p className="font-bold">{title}</p>
        <p className="text-sm">{body}</p>
    </div>
  )
}

export default Alert
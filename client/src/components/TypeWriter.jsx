import React, { useState, useEffect } from 'react'

const TypeWriter = ({ text, speed = 150, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <span className={className}>
      {displayedText}
      {displayedText.length < text.length && (
        <span className='animate-pulse'>|</span>
      )}
    </span>
  )
}

export default TypeWriter

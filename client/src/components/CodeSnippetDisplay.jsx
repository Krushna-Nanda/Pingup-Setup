import React, { useState, useEffect } from 'react'
import { Copy, Check, Sun, Moon } from 'lucide-react'
import toast from 'react-hot-toast'

// Syntax highlighting helper - simple implementation
const highlightCode = (code, language) => {
  // This is a simplified version. In production, use highlight.js or prism.js
  // For now, we'll just return the code with basic formatting
  return code
}

const CodeSnippetDisplay = ({ snippet }) => {
  const [copied, setCopied] = useState(false)
  const [theme, setTheme] = useState('dark') // 'dark' or 'light'

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code)
    setCopied(true)
    toast.success('Code copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  const isDarkTheme = theme === 'dark'

  return (
    <div
      className={`rounded-xl overflow-hidden border shadow ${
        isDarkTheme
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700'
          : 'bg-gradient-to-br from-white via-gray-50 to-white border-gray-200'
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between px-4 py-3 border-b ${
          isDarkTheme
            ? 'bg-gray-800 border-gray-700'
            : 'bg-gray-100 border-gray-200'
        }`}
      >
        <div className='flex items-center gap-3'>
          <span
            className={`text-base font-bold tracking-wide ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}
          >
            {snippet.title}
          </span>
          <span
            className={`text-sm font-extrabold px-3 py-1 rounded-full shadow transition-all duration-200 border-2 uppercase tracking-wider ${
              snippet.language === 'javascript'
                ? isDarkTheme
                  ? 'bg-yellow-400/20 border-yellow-400 text-yellow-300'
                  : 'bg-yellow-100 border-yellow-400 text-yellow-700'
              : snippet.language === 'python'
                ? isDarkTheme
                  ? 'bg-blue-400/20 border-blue-400 text-blue-200'
                  : 'bg-blue-100 border-blue-400 text-blue-700'
              : snippet.language === 'java'
                ? isDarkTheme
                  ? 'bg-red-400/20 border-red-400 text-red-200'
                  : 'bg-red-100 border-red-400 text-red-700'
              : isDarkTheme
                ? 'bg-indigo-900/50 border-indigo-400 text-indigo-200'
                : 'bg-indigo-100 border-indigo-400 text-indigo-700'
            }`}
            style={{letterSpacing: '0.08em'}}
          >
            {snippet.language}
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-1.5 rounded transition cursor-pointer ${
              isDarkTheme
                ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-200'
                : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
            }`}
            title='Toggle theme'
          >
            {isDarkTheme ? (
              <Sun className='w-4 h-4' />
            ) : (
              <Moon className='w-4 h-4' />
            )}
          </button>

          <button
            onClick={handleCopy}
            className={`p-1.5 rounded transition cursor-pointer flex items-center gap-1 ${
              isDarkTheme
                ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-200'
                : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
            }`}
            title='Copy code'
          >
            {copied ? (
              <>
                <Check className='w-4 h-4 text-green-500' />
                <span className='text-xs text-green-500'>Copied!</span>
              </>
            ) : (
              <Copy className='w-4 h-4' />
            )}
          </button>
        </div>
      </div>

      {/* Code */}
      <pre
        className={`p-4 overflow-x-auto text-sm font-mono rounded-b-xl ${
          isDarkTheme
            ? 'bg-gray-950 text-gray-100'
            : 'bg-white text-gray-900'
        }`}
        style={{fontSize: '1.05em', lineHeight: '1.7'}}
      >
        <code>{snippet.code}</code>
      </pre>
    </div>
  )
}

export default CodeSnippetDisplay

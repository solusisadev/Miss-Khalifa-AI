import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { Volume2, Clipboard, Check, User } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Logo from '../../../public/miss_khalifa_ai.png'
import ReactMarkdown from 'react-markdown'
import DataVisualization from './DataVisualization'

interface MessageProps {
  message: {
    text: string
    isBot: boolean
    chart?: {
      type: 'chart' | 'table'
      data: { year: string; value: number }[]
      title: string
    }
  }
  index: number
  copiedIndex: number | null
  handleTextToSpeech: (text: string) => void
  handleCopyText: (text: string, index: number) => void
}

const Message: React.FC<MessageProps> = ({
  message,
  index,
  copiedIndex,
  handleTextToSpeech,
  handleCopyText,
}) => {
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
      variants={messageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {message.isBot ? (
        <div className="flex max-w-2xl items-start space-x-3">
          <Avatar className="h-10 w-10 bg-none shadow-md">
            <AvatarFallback className="flex items-center justify-center bg-none text-white">
              <Image src={Logo} width={48} height={48} alt="Miss Khalifa AI" />
            </AvatarFallback>
          </Avatar>
          <div className="rounded-xl bg-white px-4 py-3 text-gray-800 shadow-md dark:bg-[#241242] dark:text-gray-200">
            <ReactMarkdown className="markdown-content">
              {message.text}
            </ReactMarkdown>
            {message.chart && (
              <div className="mt-4 w-full">
                <DataVisualization
                  type={message.chart.type}
                  data={message.chart.data}
                  title={message.chart.title}
                />
              </div>
            )}
            <div className="mt-2 flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleTextToSpeech(message.text)}
                className="rounded-full p-1 text-pink-500 transition-colors duration-200 hover:bg-transparent hover:font-extrabold hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300"
              >
                <Volume2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopyText(message.text, index)}
                className="rounded-full p-1 text-purple-500 transition-colors duration-200 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
              >
                {copiedIndex === index ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex max-w-2xl flex-row-reverse items-start space-x-3">
          <Avatar className="h-10 w-10 bg-gradient-to-r from-pink-400 to-purple-500 shadow-md">
            <AvatarFallback className="flex items-center justify-center text-white">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 text-white shadow-md">
            <ReactMarkdown className="markdown-content text-base leading-relaxed">
              {message.text}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Message
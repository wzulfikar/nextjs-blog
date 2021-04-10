import { useEffect, useRef } from 'react'
import { useGreeting } from '@lib/valtio'
import { GITHUB_REPO } from '@lib/constants'

const Intro = () => {
  const greetingRef = useRef(null)

  const { greeting, shuffle } = useGreeting()

  useEffect(() => {
    let t1 = setInterval(() => {
      shuffle()
    }, 3000)

    return () => {
      clearInterval(t1)
    }
  }, [])

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 ref={greetingRef} className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 bg-clip-text text-transparent bg-gradient-to-l from-blue-700 to-blue-500">
        {greeting}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Welcome to my blog.{' '}By the way, the source code is in{' '}
        <a
          href={GITHUB_REPO}
          className="underline hover:text-success duration-200 transition-colors font-medium cursor-pointer"
        >
          Github!
        </a>
      </h4>
    </section>
  )
}

export default Intro

import Container from './container'
import { GITHUB_REPO, ANALYTIC_URL } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="flex flex-col text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-2/3">
            <span><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">Statically Generated</span> with Next.js.</span>
            <span><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-500">Privacy-first</span> with Fathom analytic.</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/3">
            <a
              href={GITHUB_REPO}
              className="mx-3 font-bold hover:underline py-3 px-12 lg:px-8 mb-6 lg:mb-0"
            >
              View on GitHub
            </a>
            <a
              href={ANALYTIC_URL}
              className="cursor-pointer mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              See Analytic
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

import Link from 'next/link'
import {APP_NAME} from '@lib/constants'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">{APP_NAME}</a>
      </Link>
    </h2>
  )
}

export default Header

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <Image src={"/error_page.png"}
                  alt="disconnect" height={400} width={400}
                  className="h-50 w-auto object-contain"
                />
      <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">Oops! The page you are looking for does not exist or has been moved.</p>
      <Link href="/">
        <Button>Return home</Button>
      </Link>
    </div>
  )
}

export default NotFound
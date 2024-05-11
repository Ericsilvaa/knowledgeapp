import { Hydration } from '@components/hydration'
import { Providers } from '@providers/index'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Knowledger ',
  description: 'Your knowledge base for everything you need to know.'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${openSans.className}`}>
        <Providers>
          <Hydration>{children}</Hydration>
        </Providers>
      </body>
    </html>
  )
}

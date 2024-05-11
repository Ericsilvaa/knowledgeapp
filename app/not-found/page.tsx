import Image from 'next/image'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className='h-full w-full items-center justify-center'>
      <div className='flex h-[calc(100%-150px)] flex-col items-center justify-center text-base text-orange-light dark:text-[#FAFAFA]'>
        <Image
          className='h-[300px] w-[500px]'
          src='/images/forbidden.webp'
          alt='Error 404'
          width={0}
          height={0}
          sizes='100vw'
          priority
        />
        <p className=''>
          Ops, você não possui permissão para acessar essa página.
        </p>
        <Link
          href='/attendance?page=1'
          className='pt-2 font-bold underline hover:cursor-pointer hover:text-orange-dark'
        >
          Navegue para uma página disponível.
        </Link>
      </div>
    </div>
  )
}

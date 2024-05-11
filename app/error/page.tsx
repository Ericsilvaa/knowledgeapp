import SignOutButton from '@/components/button/SignOutButton'
import Image from 'next/image'

export default function ErrorPage() {
  return (
    <div className='h-full w-full items-center justify-center'>
      <div className='flex h-[calc(100%-150px)] flex-col items-center justify-center text-base text-orange-light dark:text-[#FAFAFA]'>
        <Image
          className='h-[400px] w-[400px]'
          src='/images/error.png'
          alt='Error 404'
          width={0}
          height={0}
          sizes='100vw'
          priority
        />
        <p className=''>
          Seu token expirou. Por favor, faça login novamente para continuar.
        </p>
        <SignOutButton text='Ir para a página de login' />
      </div>
    </div>
  )
}

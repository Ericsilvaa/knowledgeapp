import { paths } from '@utils/constants/paths'
import Link from 'next/link'

interface ContactUsFooterProps {
  hideFooter: boolean
}

export default function ContactUsFooter({ hideFooter }: ContactUsFooterProps) {
  const bearerToken = true

  if (!bearerToken) {
    return null
  }

  return (
    !hideFooter && (
      <div className='flex justify-around items-center text-white  bg-primary-dark py-3'>
        <Link
          rel='stylesheet'
          href='#'
          className={'flex flex-row items-center gap-2'}
        >
          <p>Precisa de ajuda?</p>
          <p className={'hover:underline text-blue-500 text-xs'}>Contate-nos</p>
        </Link>
        {/* button */}
        <Link rel='stylesheet' href={paths.logout}>
          Sair
        </Link>
      </div>
    )
  )
}

import { paths } from '@utils/constants/paths'
import Link from 'next/link'

interface IContactUsFooterProps {
  styles?: any
}

export default function ContactUsFooter({ styles }: IContactUsFooterProps) {
  const bearerToken = true

  const itemStyle = {
    margin: 'auto',
    marginTop: '0.875rem',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

  const requiredStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'flex-start',
    background: 'bg-primary-dark',
    bottom: '0px',
    left: '0px'
  }

  // * IMPORTANTE *******************
  // passar na primeira div filha
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const style = styles ? { ...requiredStyle, ...itemStyle } : requiredStyle

  return bearerToken ? (
    <div
      className={
        'flex justify-around items-center bg-primary-dark fixed bottom-0 left-0 w-full'
      }
    >
      <div className={`${style.background}`}>
        <p>Precisa de ajuda?</p>
        <Link rel='stylesheet' href='#'>
          Contate-nos
        </Link>
      </div>
      <div>
        <Link rel='stylesheet' href={paths.logout}>
          Sair
        </Link>
      </div>
    </div>
  ) : null
}

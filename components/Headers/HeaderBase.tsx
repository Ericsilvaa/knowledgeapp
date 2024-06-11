import { DRAWER_WIDTH } from '@utils/constants/theme'

interface IHeaderProps {
  showLogo?: boolean
  showReturnButton?: boolean
  showMessageCenterButton?: boolean
  returnButtonType?: 'arrow-back' | 'close'
}

export default function SideBarBase({
  showLogo,
  returnButtonType,
  showReturnButton
}: IHeaderProps) {
  return (
    <section
      className={` flex flex-col bg-blue-700 max-w-[${DRAWER_WIDTH}] items-center shadow-md`}
    >
      {/* componente logo */}
      <div className='p-3 mt-10'>
        <h2 className='font-semibold text-2xl font-serif text-white'>
          Knowledgement
        </h2>
      </div>
    </section>
  )
}

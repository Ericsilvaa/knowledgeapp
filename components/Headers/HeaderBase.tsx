interface IHeaderProps {
  showLogo?: boolean
  showReturnButton?: boolean
  showMessageCenterButton?: boolean
  returnButtonType?: 'arrow-back' | 'close'
}

export default function HeaderBase({
  showLogo,
  returnButtonType,
  showReturnButton
}: IHeaderProps) {
  return (
    <div>
      <p>Header Base</p>
    </div>
  )
}

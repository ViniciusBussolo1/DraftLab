import Image from 'next/image'

import Check from '../../../public/Header/Check.svg'

interface BulletsProps {
  text: string
}

export default function Bullets({ text }: BulletsProps) {
  return (
    <div className="flex items-center gap-2">
      <Image src={Check} alt="Icon Check" />
      <span className="text-base text-white70">{text}</span>
    </div>
  )
}

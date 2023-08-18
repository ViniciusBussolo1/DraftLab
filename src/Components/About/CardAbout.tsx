import Image from 'next/image'

interface CardAboutProps {
  title: string
  image: string
  description: string
}

export default function CardAbout({
  image,
  title,
  description,
}: CardAboutProps) {
  return (
    <div className="max-w-[22rem] w-full space-y-2">
      <div className="flex items-center gap-4">
        <Image src={image} alt="heart" />
        <span className="text-base text-white">{title}</span>
      </div>
      <div className="flex gap-3 pl-[0.875rem]">
        <div className="h-[7.5rem] w-1 bg-purple-800"></div>
        <p className="max-w-[19.25rem] text-base text-white70">{description}</p>
      </div>
    </div>
  )
}

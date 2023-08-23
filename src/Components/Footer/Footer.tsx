'use client'

import Image from 'next/image'

import Logo from '../../../public/Logo_DraftLab.svg'
import Github from '../../../public/Footer/Github.svg'
import ChevronsUp from '../../../public/Footer/ChevronsUp.svg'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="w-full bg-linear-gradient px-4 flex justify-center items-center">
      <div className="max-w-[70rem] w-full py-[1.875rem] space-y-7">
        {/* NEWSLETTER */}
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="Logo DraftLab" />
          <span className="text-base leading-[1.4rem] font-medium text-white lining-nums proportional-nums">
            Newsletter
          </span>
        </div>

        {/* LINE */}
        <div className="w-full h-[0.063rem] bg-purple-800"></div>

        {/* BACK TO TOP */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src={Github} alt="Icon Github" />
            <span className="text-xs font-medium leading-normal text-white70">
              Criado por:{' '}
              <span className="text-xs font-semibold leading-normal text-purple-800">
                Vinicius Bussolo
              </span>
            </span>
          </div>
          <div
            className="flex items-center gap-[0.375rem] cursor-pointer"
            onClick={scrollToTop}
          >
            <span className="text-base font-medium text-white70 oldstyle-nums proportional-nums ">
              Voltar para o topo
            </span>
            <Image src={ChevronsUp} alt="Icon Chevrons Up" />
          </div>
        </div>
      </div>
    </footer>
  )
}

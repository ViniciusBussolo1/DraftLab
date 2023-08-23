import Image from 'next/image'

import Bullets from './Bullets'

import Logo from '../../../public/Logo_DraftLab.svg'
import HeroRight from '../../../public/Header/Hero_Right.svg'

export default function Header() {
  return (
    <header className="w-full h-[46.5rem] bg-linear-gradient flex justify-center items-center px-4 pb-20">
      <div className="max-w-[70rem] w-full">
        <div className="flex justify-between items-center">
          <Image src={Logo} alt="Logo DraftLab" className="cursor-pointer" />
          <div className="flex items-center gap-10">
            <span className="max-[472px]:hidden text-lg leading-normal font-bold uppercase text-purple-800 cursor-pointer hover:text-purple-500">
              Entrar
            </span>
            <button className="bg-purple-800 py-3 px-[1.125rem] rounded max-[472px]:text-xs text-lg leading-[1.625rem] font-bold text-white uppercase hover:bg-purple-500">
              Aceite o Desafio
            </button>
          </div>
        </div>

        <div className="max-[779px]:w-full mt-20 min-[780px]:grid min-[780px]:grid-cols-2 gap-7">
          {/* HEADER HERO LEFT */}
          <div className="max-[779px]:w-full space-y-4">
            <h1 className="max-[779px]:max-w-[568px] max-w-[30rem] text-5xl leading-[3.5rem] font-bold text-white">
              Supere Desafios e Desenvolva Habilidades
            </h1>
            <div className="space-y-3">
              <Bullets text="Desenvolva seu talento em equipe" />
              <Bullets text="Mostre suas habilidades para o mundo" />
              <Bullets text="Explore projetos criativos e inovadores" />
            </div>
            <div className="flex items-center gap-3 pt-6">
              <button className="bg-purple-800 py-3 px-[1.125rem] rounded text-base font-medium text-white hover:bg-purple-500">
                Explore Desafios
              </button>
              <span className="text-base font-medium text-purple-800 cursor-pointer hover:text-purple-500">
                Junte-se à Comunidade
              </span>
            </div>
          </div>

          {/* HEADER HERO RIGHT */}
          <Image
            src={HeroRight}
            alt="Image of peoples"
            className="max-[779px]:hidden"
          />
        </div>
      </div>
    </header>
  )
}

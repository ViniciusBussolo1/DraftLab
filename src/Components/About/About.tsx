import Image from 'next/image'

import CardAbout from './CardAbout'

import ImageAbout from '../../../public/About/Image_About.svg'
import Heart from '../../../public/About/Heart.svg'
import Globe from '../../../public/About/Globe.svg'
import Smile from '../../../public/About/Smile.svg'
import Users from '../../../public/About/Users.svg'

export default function About() {
  return (
    <section className="w-full bg-black flex justify-center items-center px-4 py-20">
      <div className="flex gap-12">
        <Image src={ImageAbout} alt="Picture of a Person" />

        <div className="w-[46rem] flex flex-col gap-[1.375rem]">
          {/* CARDS */}
          <div className="w-full grid grid-cols-2 grid-rows-2 gap-12">
            <CardAbout
              image={Heart}
              title="Trabalhe em equipe"
              description="Na força da colaboração e cooperação, encontramos o caminho para o sucesso trabalhando em equipe, superando desafios e alcançando grandes conquistas"
            />
            <CardAbout
              image={Globe}
              title="Mostre suas habilidades"
              description="Brilhe ao demonstrar suas habilidades em ação! Supere desafios, colabore coletivamente e alcance resultados excepcionais, mostrando ao mundo o poder da cooperação"
            />
            <CardAbout
              image={Smile}
              title="Criatividade em ação"
              description="Desperte sua imaginação e supere limites!, exploraremos a magia da criatividade em ação. Traga sua visão única e trabalhe em equipe para transformar ideias em soluções incríveis"
            />
            <CardAbout
              image={Users}
              title="Expanda suas conexões"
              description="Participe para fazer networking e fortalecer sua rede profissional! Conheça colegas inspiradores e explore oportunidades únicas para impulsionar sua carreira"
            />
          </div>
          <span className="text-purple-800 cursor-pointer hover:text-purple-500">
            Saiba mais
          </span>
        </div>
      </div>
    </section>
  )
}

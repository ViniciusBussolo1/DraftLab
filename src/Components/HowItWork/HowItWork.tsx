import Image from 'next/image'

import Step from '../../../public/HowItWork/Step2.svg'

export default function HowItWork() {
  return (
    <section className="w-full bg-linear-gradient flex justify-center items-center px-4 pt-[6.188rem] pb-[5rem]">
      <div className="max-w-[70rem] w-full space-y-6">
        {/* HOW IT WORK 1 */}
        <div className="max-w-[34rem] w-full">
          <div className="flex items-center gap-9">
            <span className="text-[7.75rem] leading-normal font-bold text-purple-800">
              1
            </span>
            <h1 className="text-5xl leading-[3.5rem] font-bold text-white">
              Cadastre-se na Plataforma
            </h1>
          </div>
          <p className="text-base text-white70">
            Registre-se na plataforma preenchendo o formulário com suas
            informações e escolhendo seu perfil (programador, designer ou
            outro). É rápido e simples!
          </p>
        </div>

        {/* HOW IT WORK 2 */}
        <div className="flex gap-6 pl-10">
          <Image src={Step} alt="" className="h-[5.188rem]" />
          <div className="max-w-[34rem] w-full ">
            <div className="max-h-[9.375rem] w-full flex items-center gap-9">
              <span className="text-[7.75rem] leading-normal font-bold text-purple-800">
                2
              </span>
              <h1 className="text-5xl leading-[3.5rem] font-bold text-white">
                Explore os Desafios
              </h1>
            </div>
            <p className="text-base text-white70">
              Navegue por desafios emocionantes! Encontre projetos alinhados com
              suas habilidades. Filtrar por categoria e dificuldade para as
              melhores opções.
            </p>
          </div>
        </div>

        {/* HOW IT WORK 3 */}
        <div className="flex justify-end gap-6 pl-10">
          <Image src={Step} alt="" className="h-[5.188rem]" />
          <div className="max-w-[34rem] w-full ">
            <div className="max-h-[9.375rem] w-full flex items-center gap-9">
              <span className="text-[7.75rem] leading-normal font-bold text-purple-800">
                3
              </span>
              <h1 className="text-5xl leading-[3.5rem] font-bold text-white">
                Enfrente os Desafios e Cresça
              </h1>
            </div>
            <p className="text-base text-white70">
              Escolha um desafio que atraia e coloque suas habilidades à prova.
              Trabalhe em equipe ou individualmente. Receba feedback valioso e
              construa sua reputação!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

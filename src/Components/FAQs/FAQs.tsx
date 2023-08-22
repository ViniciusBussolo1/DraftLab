'use client'

import Image from 'next/image'

import * as Accordion from '@radix-ui/react-accordion'

import Minus from '../../../public/FAQs/Minus.svg'
import Plus from '../../../public/FAQs/Plus.svg'
import { useState } from 'react'

export default function FAQs() {
  const [isOpen01, setIsOpen01] = useState(false)
  const [isOpen02, setIsOpen02] = useState(false)
  const [isOpen03, setIsOpen03] = useState(false)
  const [isOpen04, setIsOpen04] = useState(false)
  const [isOpen05, setIsOpen05] = useState(false)

  return (
    <section className="bg-black px-4 py-20 flex justify-center items-center">
      <div className="max-w-[70rem] w-full space-y-[1.875rem]">
        <h1 className="text-5xl leading-normal font-bold text-white">
          Perguntas frequentes
        </h1>
        <Accordion.Root className="space-y-8" type="single" collapsible>
          <Accordion.Item
            id="AccordionItem"
            value="item-1"
            onClick={() => setIsOpen01(!isOpen01)}
          >
            <Accordion.AccordionTrigger
              id="AccordionTrigger"
              className="w-full px-4 pt-4 pb-5 border border-purple-800 rounded-lg backdrop-blur-[7.5px]"
            >
              <div className="w-full flex justify-between items-center">
                <div className="space-x-11">
                  <span className="text-2xl leading-normal font-extralight text-white">
                    01
                  </span>
                  <span className="text-xl leading-normal font-medium text-white">
                    Quem pode participar dos desafios da plataforma?
                  </span>
                </div>
                {isOpen01 ? (
                  <Image src={Minus} alt="Minus Operator Image" />
                ) : (
                  <Image src={Plus} alt="Plus Operator Image" />
                )}
              </div>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent
              id="AccordionContent"
              className="pl-[5.313rem] pt-5 pr-[0.625rem] pb-4"
            >
              <p className="max-w-[60.5rem] w-full text-lg leading-[2.25rem] font-normal text-white70 ">
                Todos são bem-vindos! Programadores, designers, e entusiastas de
                tecnologia podem participar individualmente ou formar times para
                enfrentar os desafios
              </p>
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item
            id="AccordionItem"
            value="item-2"
            onClick={() => setIsOpen02(!isOpen02)}
          >
            <Accordion.AccordionTrigger
              id="AccordionTrigger"
              className="w-full px-4 pt-4 pb-5 border border-purple-800 rounded-lg backdrop-blur-[7.5px]"
            >
              <div className="w-full flex justify-between items-center">
                <div className="space-x-11">
                  <span className="text-2xl leading-normal font-extralight text-white">
                    02
                  </span>
                  <span className="text-xl leading-normal font-medium text-white">
                    É possível participar de mais de um desafio ao mesmo tempo?
                  </span>
                </div>
                {isOpen02 ? (
                  <Image src={Minus} alt="Minus Operator Image" />
                ) : (
                  <Image src={Plus} alt="Plus Operator Image" />
                )}
              </div>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent
              id="AccordionContent"
              className="pl-[5.313rem] pt-5 pr-[0.625rem] pb-4"
            >
              <p className="max-w-[60.5rem] w-full text-lg leading-[2.25rem] font-normal text-white70 ">
                Todos são bem-vindos! Programadores, designers, e entusiastas de
                tecnologia podem participar individualmente ou formar times para
                enfrentar os desafios
              </p>
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item
            id="AccordionItem"
            value="item-3"
            onClick={() => setIsOpen03(!isOpen03)}
          >
            <Accordion.AccordionTrigger
              id="AccordionTrigger"
              className="w-full px-4 pt-4 pb-5 border border-purple-800 rounded-lg backdrop-blur-[7.5px]"
            >
              <div className="w-full flex justify-between items-center">
                <div className="space-x-11">
                  <span className="text-2xl leading-normal font-extralight text-white">
                    03
                  </span>
                  <span className="text-xl leading-normal font-medium text-white">
                    Quais são os incentivos para participar dos desafios?
                  </span>
                </div>
                {isOpen03 ? (
                  <Image src={Minus} alt="Minus Operator Image" />
                ) : (
                  <Image src={Plus} alt="Plus Operator Image" />
                )}
              </div>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent
              id="AccordionContent"
              className="pl-[5.313rem] pt-5 pr-[0.625rem] pb-4"
            >
              <p className="max-w-[60.5rem] w-full text-lg leading-[2.25rem] font-normal text-white70 ">
                Todos são bem-vindos! Programadores, designers, e entusiastas de
                tecnologia podem participar individualmente ou formar times para
                enfrentar os desafios
              </p>
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item
            id="AccordionItem"
            value="item-4"
            onClick={() => setIsOpen04(!isOpen04)}
          >
            <Accordion.AccordionTrigger
              id="AccordionTrigger"
              className="w-full px-4 pt-4 pb-5 border border-purple-800 rounded-lg backdrop-blur-[7.5px]"
            >
              <div className="w-full flex justify-between items-center">
                <div className="space-x-11">
                  <span className="text-2xl leading-normal font-extralight text-white">
                    04
                  </span>
                  <span className="text-xl leading-normal font-medium text-white">
                    Posso participar mesmo não sendo um especialista em
                    determinada área?
                  </span>
                </div>
                {isOpen04 ? (
                  <Image src={Minus} alt="Minus Operator Image" />
                ) : (
                  <Image src={Plus} alt="Plus Operator Image" />
                )}
              </div>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent
              id="AccordionContent"
              className="pl-[5.313rem] pt-5 pr-[0.625rem] pb-4"
            >
              <p className="max-w-[60.5rem] w-full text-lg leading-[2.25rem] font-normal text-white70 ">
                Todos são bem-vindos! Programadores, designers, e entusiastas de
                tecnologia podem participar individualmente ou formar times para
                enfrentar os desafios
              </p>
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item
            id="AccordionItem"
            value="item-5"
            onClick={() => setIsOpen05(!isOpen05)}
          >
            <Accordion.AccordionTrigger
              id="AccordionTrigger"
              className="w-full px-4 pt-4 pb-5 border border-purple-800 rounded-lg backdrop-blur-[7.5px]"
            >
              <div className="w-full flex justify-between items-center">
                <div className="space-x-11">
                  <span className="text-2xl leading-normal font-extralight text-white">
                    05
                  </span>
                  <span className="text-xl leading-normal font-medium text-white">
                    Como posso encontrar membros para formar um time?
                  </span>
                </div>
                {isOpen05 ? (
                  <Image src={Minus} alt="Minus Operator Image" />
                ) : (
                  <Image src={Plus} alt="PLus Operator Image" />
                )}
              </div>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent
              id="AccordionContent"
              className="pl-[5.313rem] pt-5 pr-[0.625rem] pb-4"
            >
              <p className="max-w-[60.5rem] w-full text-lg leading-[2.25rem] font-normal text-white70 ">
                Todos são bem-vindos! Programadores, designers, e entusiastas de
                tecnologia podem participar individualmente ou formar times para
                enfrentar os desafios
              </p>
            </Accordion.AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </section>
  )
}

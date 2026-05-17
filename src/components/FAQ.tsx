// FAQ - rozwijane pytania i odpowiedzi
// Navy + Gold kolorystyka

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'Czy program jest bezpłatny?',
    answer: 'Tak, konsultacja i wszystkie materiały edukacyjne są całkowicie bezpłatne. Płacisz tylko jeśli zdecydujesz się na zakup produktów omega-3 (ceny od ok. 150 zł/mies.). Nie ma żadnych ukrytych kosztów ani zobowiązań.',
  },
  {
    question: 'Ile kosztują produkty Eqology?',
    answer: 'Cena flagowego produktu Pure Arctic Oil w modelu subskrypcyjnym wynosi 172 zł miesięcznie. Pierwszy miesiąc to podwójna dawka (2 butelki) dla komfortowego nasycenia organizmu oraz gwarancji zdrowia lub zwrotu pieniędzy. W Eqology nie kupujesz jednak tylko „kolejnej butelki tranu" - inwestujesz w kompletny program naprawczy organizmu oparty na twardych danych medycznych. Najbardziej opłacalne są pakiety lojalnościowe (subskrypcje lub przedpłaty 6-miesięczne), które gwarantują najniższą cenę oraz bonusy: darmowe produkty jak witamina K2+D3, Essential czy kolagen.',
  },
  {
    question: 'Dla kogo jest ten program?',
    answer: 'Program Witalność 60+ jest dedykowany osobom po 55. roku życia, które chcą zadbać o swoje zdrowie i witalność. Sprawdzi się również dla opiekunów seniorów, którzy szukają sprawdzonych rozwiązań dla swoich bliskich.',
  },
  {
    question: 'Kiedy dostanę broszurę?',
    answer: 'Broszura „5 filarów witalności seniora 60+" przyjdzie na Twój email natychmiast po zapisie. Jeśli podasz telefon, możemy też zadzwonić i omówić Twoje pytania. Zero presji, zero zobowiązań.',
  },
  {
    question: 'Czy mogę wycofać zgodę na kontakt?',
    answer: 'Oczywiście. W każdej chwili możesz wycofać zgodę - wystarczy SMS lub email. Twoje dane zostaną usunięte zgodnie z RODO. Szanujemy Twoją prywatność.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 hover:bg-slate-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="text-base sm:text-lg font-semibold text-slate-800 pr-2 sm:pr-4">
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-amber-100 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3 sm:pt-4">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

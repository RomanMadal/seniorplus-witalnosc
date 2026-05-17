import { ClipboardCheck, Phone, Heart, type LucideIcon } from 'lucide-react'

export type Step = {
  id: number
  icon: LucideIcon
  title: string
  description: string
}

export const steps: Step[] = [
  {
    id: 1,
    icon: ClipboardCheck,
    title: 'Zostaw kontakt',
    description:
      'Wystarczy imię i numer telefonu. Lub zadzwoń bezpośrednio — szybciej i wygodniej.',
  },
  {
    id: 2,
    icon: Phone,
    title: 'Porozmawiamy',
    description:
      'Oddzwonimy w ciągu 24 godzin. Wysłuchamy, odpowiemy na pytania, dobierzemy rozwiązanie. Bez nacisków.',
  },
  {
    id: 3,
    icon: Heart,
    title: 'Plan na zdrowie',
    description:
      'Otrzymasz dopasowany plan i materiały informacyjne. Decyzja o programie zawsze należy do Ciebie.',
  },
]

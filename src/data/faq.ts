// TODO (Roman): zweryfikować i rozszerzyć z bratem — to są placeholder/restrukturyzacja FAQ
// z poprzedniej wersji. Każdy health claim musi mieć pokrycie w EFSA register.
export type FaqItem = {
  q: string
  a: string
}

export const faq: FaqItem[] = [
  {
    q: 'Kiedy otrzymam broszurę?',
    a: 'Broszura „5 filarów witalności seniora 60+" przychodzi na podany adres email natychmiast po zapisie. Jeśli zostawią Państwo również numer telefonu, możemy zadzwonić i odpowiedzieć na pytania.',
  },
  {
    q: 'Czy zapis i broszura są naprawdę bezpłatne?',
    a: 'Tak. Broszura jest darmowa i pobranie nie wiąże się z żadnymi opłatami ani zobowiązaniem zakupu. Jeśli zdecydują się Państwo na rozmowę telefoniczną — również jest bezpłatna.',
  },
  {
    q: 'Kto będzie dzwonił?',
    a: 'Roman Madaliński — koordynator programu Witalność 60+, Independent Business Partner Eqology. Telefon przychodzący z numeru +48 503 354 437.',
  },
  {
    q: 'Co to jest Fundacja SeniorPlus?',
    a: 'Organizacja działająca na rzecz osób w wieku 60+. Program Witalność 60+ jest realizowany we współpracy z Fundacją.',
  },
  {
    q: 'Czy muszę coś kupować po rozmowie?',
    a: 'Nie. Po rozmowie otrzymują Państwo informacje i mogą spokojnie się zastanowić. Bez nacisku, bez ponawianych telefonów.',
  },
  {
    q: 'Skąd mam pewność że to nie oszustwo?',
    a: 'Współpracujemy z Fundacją SeniorPlus. Produkty pochodzą od norweskiej firmy Eqology z 30-letnią historią. Wszystkie dane są chronione zgodnie z RODO. Można też napisać na WhatsApp przed rozmową.',
  },
  {
    q: 'Czy moje dane będą bezpieczne?',
    a: 'Tak. Dane przetwarzamy tylko w celu kontaktu, zgodnie z RODO (Rozporządzenie o Ochronie Danych Osobowych). Nie udostępniamy ich firmom trzecim. W każdej chwili można zażądać ich usunięcia.',
  },
]

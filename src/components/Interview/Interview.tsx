'use client'

import React from 'react'
import Container from '../layout/Container'
import Section from './Section'
import Quote from './Quote'

const Interview: React.FC = () => {
    return (
        <Container className="py-16">
            <h1 className="text-4xl md:text-5xl font-sans text-gold mb-12 text-center">
                Інтерв’ю з мистецтвознавцем
            </h1>

            <Section
                title="Початок інтерв’ю"
                content="Тут йде великий текст інтерв’ю, який розкриває історію та думки експерта. Можна писати кілька абзаців, а текст буде в межах зручної ширини для читання."
                initiallyOpen
            />

            <Quote text="Головна думка цього інтерв’ю — мистецтво оживає через сприйняття." author="Мистецтвознавець" />

            <Section
                title="Про сучасне мистецтво"
                content="Тут другий великий блок тексту. Можна додавати цитати, вставки, і все буде зручно для читання завдяки мінімалістичному дизайну."
            />

            <Section
                title="Висновки"
                content="Остання частина інтерв’ю. Підсумки, важливі моменти, думки автора. Кожна секція може бути згортається, щоб користувач сам вибирав, що читати."
            />
        </Container>
    )
}

export default Interview

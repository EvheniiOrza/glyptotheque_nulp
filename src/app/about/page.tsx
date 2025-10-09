'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 text-black overflow-x-hidden w-screen max-w-[100vw]">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full px-4 text-center mb-12 pt-8"
                >
                    <div className="mx-auto w-full max-w-[95vw]">
                        <h1 className="text-3xl md:text-4xl font-sans text-black mb-4 break-words">
                            Навіщо нам гліптотека?
                        </h1>
                        <p className="text-base md:text-lg text-gray-800 font-body mx-auto break-words leading-relaxed max-w-[90vw]">
                            Діана Клочко
                        </p>
                    </div>
                </motion.section>

                {/* Main Content */}
                <div className="w-full px-4">
                    <div className="mx-auto w-full max-w-[95vw]">
                        {/* Content Sections */}
                        <div className="space-y-8 w-full">
                            {/* Section 1 */}
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="w-full"
                            >
                                <p className="text-gray-800 font-body text-base leading-relaxed break-words">
                                    Вперше в історії людства так поставив питання на початку ХІХ століття монарх{' '}
                                    <strong className="text-black font-display">Людвіг І Баварський</strong>.
                                    Він був противником Наполеона, але швидко зрозумів думку французького імператора,
                                    що велич держави не в останню чергу тримається на колекціях творів давніх цивілізацій.
                                </p>
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="w-full"
                            >
                                <p className="text-gray-800 font-body text-base leading-relaxed break-words">
                                    До Лувру скульптурні артефакти часів античності надходили передусім завдяки військовим походам —
                                    і великою мірою в уламках. Людвіг формував власну колекцію скульптури без грабунку — завдяки антикварам,
                                    археологам і приятельським стосункам із данським художником Торвальдсеном, з яким він ретельно обговорював
                                    знахідки й замовляв класицистичні композиції у стилістиці та на теми античної скульптури.
                                </p>
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="w-full"
                            >
                                <p className="text-gray-800 font-body text-base leading-relaxed break-words">
                                    Ймовірно, розуміючи, що його приватна колекція повинна чимось вигідно відрізнятися від інших музейних збірок,
                                    які постали в європейських країнах на основі велетенських монарших і папських зібрань, Людвіг вирішив оформити
                                    її оригінально. Він побудував спеціальне приміщення (а не розміщував у палаці) і за допомогою бібліотекаря навіть
                                    надав йому специфічну назву. За аналогією з Пінакотекою, тобто зібранням живопису, що розміщувалося неподалік,
                                    1816 року він відкрив у Мюнхені для публічного відвідування Гліптотеку. Хоча давньогрецьке glypho означає «різати камінь» —
                                    передусім дорогоцінний, чого у колекції Людвіга Баварського не було, — назва добре «лягла на вухо» мюнхенцям і
                                    дійсно зацікавила іноземців.
                                </p>
                            </motion.section>

                            {/* Historical Sections with Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
                            >
                                <div className="bg-white rounded-none p-4 border-l-4 border-gray-300 shadow-sm w-full break-words">
                                    <h3 className="text-lg md:text-xl font-sans text-black mb-3">Мюнхенська Гліптотека</h3>
                                    <p className="text-gray-800 font-body text-sm leading-relaxed">
                                        Усього 14 кімнат мала класицистична будівля, споруджена за проєктом Лео фон Кленце,
                                        але чітка структура показу експонатів доби античності — від архаїки (близько 650 р. до н. е.)
                                        до пізньоелліністичного IV ст. н. е. — швидко перетворила цей невеликий музей на зразковий
                                        для вивчення античної скульптури.
                                    </p>
                                </div>

                                <div className="bg-white rounded-none p-4 border-l-4 border-gray-300 shadow-sm w-full break-words">
                                    <h3 className="text-lg md:text-xl font-sans text-black mb-3">Гліптотека Карлсберга</h3>
                                    <p className="text-gray-800 font-body text-sm leading-relaxed">
                                        «Нова Гліптотека Карлсберга» постала у Копенгагені завдяки Карлу Якобсену,
                                        сину засновника знаменитої броварні. Задум архітектора Вільгельма Далерупа полягав
                                        у створенні музею денного світла, відкритого лише в світлий час доби.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Modern Era Section */}
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="bg-white rounded-none p-5 border-l-4 border-gray-300 shadow-sm w-full break-words"
                            >
                                <h3 className="text-xl md:text-2xl font-sans text-black mb-4 text-center">
                                    Сучасна ера гліптотек
                                </h3>
                                <div className="text-gray-800 font-body text-base leading-relaxed space-y-3">
                                    <p>
                                        ХХ століття не сприяло розвитку ідеї музею, присвяченого давній скульптурі. Інтерес до неї не було втрачено,
                                        але тенденції артринку й законодавства європейських країн щодо археологічних знахідок, здавалося, унеможливили
                                        появу нових музеїв такого типу.
                                    </p>
                                    <p>
                                        Однак у Греції, яка володіє найбільшою кількістю скульптурних артефактів античності, на початку ХХІ століття
                                        розпочався масштабний процес створення Нового музею Акрополя. Під приводом переговорів про ймовірне повернення
                                        з Британського музею в Лондоні так званих «мармурів лорда Елгіна», у 2009 році в Афінах, поблизу Акрополя,
                                        відкрили сучасний музейний комплекс.
                                    </p>
                                </div>
                            </motion.section>

                            {/* Ukrainian Context */}
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="w-full"
                            >
                                <div className="bg-white rounded-none p-5 border-l-4 border-gray-300 shadow-sm w-full break-words">
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-sans text-black mb-4 text-center">
                                        Навіщо нам, українцям, гліптотека?
                                    </h2>
                                    <div className="text-gray-800 font-body text-base leading-relaxed space-y-3">
                                        <p>
                                            Мюнхенці й копенгагенці не мали великого античного минулого, зафіксованого у скульптурних артефактах,
                                            проте у сприятливих умовах археологічного буму створили принцип музеєфікації творів, що має загальноєвропейську
                                            цінність — зокрема у вивченні старожитностей. Афіняни ж перетворили ідею музею скульптури на потужний комплекс —
                                            у туристичному, просвітницькому та навіть юридичному сенсах.
                                        </p>
                                        <p>
                                            Українська культура входить до середземноморської культурної традиції, відтак музеї зберігають чимало артефактів,
                                            що належать до доби античності, хоча власне кам&#39;яна скульптура не є пріоритетною — ні за чисельністю, ні за збереженістю.
                                        </p>
                                        <p className="text-black font-display font-semibold">
                                            Однак сама ідея «гліптотеки» — тобто збереження, реставрації та демонстрації фрагментів, решток скульптурних
                                            артефактів давніх епох — може бути переосмислена й доповнена. Як у контексті реставрації та вивчення кам&#39;яної
                                            пластики всіх українських земель за століття їхнього існування, так і в посиленні уваги до копій, реплік, реконструкцій,
                                            алюзій і сучасних переосмислень того, що від кам&#39;яної скульптури давніх епох в Україні збереглося.
                                        </p>
                                    </div>
                                </div>
                            </motion.section>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage
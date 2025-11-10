'use client'

import React, { useState } from 'react'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io'
import { Transition } from '@headlessui/react'
import { IntroSection, EducationSection, CareerSection } from '../../components/about'

type Section = 'intro' | 'education' | 'career'

interface SectionData {
    id: Section
    navigation?: {
        prev?: { label: string; action: () => void }
        next?: { label: string; action: () => void }
    }
}

const About = () => {
    const [currentSection, setCurrentSection] = useState<Section>('intro')

    const sections: SectionData[] = [
        {
            id: 'intro',
            navigation: {
                next: { label: 'Education', action: () => setCurrentSection('education') }
            }
        },
        {
            id: 'education',
            navigation: {
                prev: { label: 'Intro', action: () => setCurrentSection('intro') },
                next: { label: 'Career', action: () => setCurrentSection('career') }
            }
        },
        {
            id: 'career',
            navigation: {
                prev: { label: 'Education', action: () => setCurrentSection('education') }
            }
        }
    ]



    return (
        <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white text-lg" id="aboutContent">
            <div className="py-10 px-4 sm:px-10 text-justify w-full max-w-6xl mx-auto">
                <h1 className="text-3xl font-semibold text-[#007EA7] mb-8">About me</h1>

                <div id="horizontalScrollSection">
                    {sections.map((section) => (
                        <Transition
                            key={section.id}
                            show={currentSection === section.id}
                            as="div"
                            enter="transition ease-in duration-600"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-out duration-600"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            {currentSection === section.id && (
                                <>
                                    {/* Navigation */}
                                    {section.navigation && (
                                        <div className={`pb-4 flex ${section.navigation.next && section.navigation.prev ? 'justify-between' : section.navigation.prev ? 'justify-start' : 'justify-end'}`}>
                                            {section.navigation.prev && (
                                                <button
                                                    type="button"
                                                    className="text-gray-400 hover:text-black dark:hover:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                                                    onClick={section.navigation.prev.action}
                                                >
                                                    <IoIosArrowRoundBack className="inline mr-2" />
                                                    {section.navigation.prev.label}
                                                </button>
                                            )}

                                            {section.navigation.next && (
                                                <button
                                                    type="button"
                                                    className="text-gray-400 hover:text-black dark:hover:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                                                    onClick={section.navigation.next.action}
                                                >
                                                    {section.navigation.next.label}
                                                    <IoIosArrowRoundForward className="inline ml-2" />
                                                </button>
                                            )}
                                        </div>
                                    )}

                                    {/* Content */}
                                    {section.id === 'intro' && <IntroSection />}
                                    {section.id === 'education' && <EducationSection />}
                                    {section.id === 'career' && <CareerSection />}
                                </>
                            )}
                        </Transition>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About

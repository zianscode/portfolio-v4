'use client'

import { usePathname } from 'next/navigation'

import React from 'react'
import { TbCoffee } from 'react-icons/tb'

import { DONATE_URL } from '@/constants/links'
import { sendDataLayer } from '@/lib/gtm'

interface DonateButtonProps {
  withText?: boolean
}
export default function DonateButton({ withText = false }: DonateButtonProps) {
  const pathname = usePathname()

  function openDonatePage() {
    sendDataLayer({
      event: 'saweria_clicked',
      page_path: pathname
    })
    window.open(DONATE_URL, '_blank')
  }

  return withText ? (
    <button
      data-testid="donate-button-with-text"
      onClick={openDonatePage}
      className="flex h-max w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white shadow-sm transition-all delay-75 duration-300 hover:gap-3 hover:transition-all hover:duration-300 md:w-max"
    >
      <TbCoffee />
      <span>Buy me a Coffee</span>
    </button>
  ) : (
    <button data-testid="donate-button-without-text" onClick={openDonatePage} aria-label="Buy me a coffee">
      <TbCoffee size={25} />
    </button>
  )
}

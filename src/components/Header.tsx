import nlwUniteIcon from '@/assets/logo.svg'
import Image from 'next/image'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <Image src={nlwUniteIcon} alt="NLW Unite" />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  )
}
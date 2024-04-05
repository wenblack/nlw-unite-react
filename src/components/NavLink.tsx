import Link, { LinkProps } from "next/link"

interface NavLinkProps extends LinkProps {
  children: string
}

export function NavLink(props: NavLinkProps) {
  return (
    <Link {...props} className="font-medium text-sm text-zinc-300">
      {props.children}
    </Link>
  )
}
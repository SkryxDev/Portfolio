import { Bot, Code2, Laptop, Server } from 'lucide-react'

export const siteConfig = {
  name: 'SkryxDev',
  email: 'dev@skryxdev.eu',
  github: 'https://github.com/skryxdev',
  githubLabel: 'github.com/skryxdev',
  discord: 'skryxdev',
  age: 16,
}

export const terminalLines: Array<{ type: 'cmd' | 'out'; text: string }> = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'skryxdev, 16 y/o student developer' },
  { type: 'cmd', text: 'ls ~/projects' },
  { type: 'out', text: 'Trace/  portfolio/  websites/' },
  { type: 'cmd', text: 'cat focus.txt' },
  { type: 'out', text: 'web + swift (macOS, iOS)' },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    icon: Laptop,
    title: 'Mac & iPhone apps',
    description:
      'Native apps for macOS and iOS in Swift and SwiftUI. When SwiftUI is not enough I use AppKit, like for the menu bar panel in Trace.',
    details: ['Swift', 'SwiftUI', 'AppKit', 'Xcode'],
  },
  {
    icon: Code2,
    title: 'Websites',
    description:
      'Landing pages and small web apps with React and Next.js, written in TypeScript. Fast to load and easy to keep updated.',
    details: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Bot,
    title: 'Bots & Minecraft plugins',
    description:
      'Discord bots in Node.js and Paper / Spigot plugins in Java and Kotlin. Commands, events, configs, the usual stuff.',
    details: ['discord.js', 'Node.js', 'Java', 'Kotlin', 'Paper API'],
  },
  {
    icon: Server,
    title: 'Servers & Linux',
    description:
      'Linux servers with Docker, Proxmox and Pterodactyl. This site runs on one of them.',
    details: ['Linux', 'Docker', 'Proxmox', 'Pterodactyl'],
  },
]

export const trace = {
  name: 'Trace',
  icon: '/trace-icon.png',
  repo: 'https://github.com/SkryxDev/Trace',
  download: 'https://github.com/SkryxDev/Trace/releases/latest',
  tags: ['macOS', 'Swift 6', 'SwiftUI', 'AppKit'],
  status: '1.0 beta',
}

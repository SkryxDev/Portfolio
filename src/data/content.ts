import { Blocks, Bot, Code2, Server } from 'lucide-react'

export const siteConfig = {
  name: 'SkryxDev',
  email: 'dev@skryxdev.eu',
  github: 'https://github.com/skryxdev',
  githubLabel: 'github.com/skryxdev',
  discord: 'skryxdev',
  location: 'Vicenza, Italy',
  age: 16,
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const terminalLines: Array<{ type: 'cmd' | 'out'; text: string }> = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'skryxdev — 16 y/o student developer' },
  { type: 'cmd', text: 'ls ~/projects' },
  { type: 'out', text: 'websites/  mc-plugins/  discord-bots/  linux/' },
  { type: 'cmd', text: 'cat status.txt' },
  { type: 'out', text: 'open to small projects — say hi' },
]

export const services = [
  {
    icon: Code2,
    title: 'Websites',
    description:
      'Simple portfolios, landing pages, and small dashboards that are easy to use and edit.',
    details: ['Vite', 'TypeScript', 'Mobile friendly', 'SEO basics'],
  },
  {
    icon: Blocks,
    title: 'Minecraft Plugins',
    description:
      'Custom Paper/Spigot stuff: commands, events, configs, permissions, and small utilities. Libraries too.',
    details: ['Paper', 'Spigot', 'Maven', 'YAML'],
  },
  {
    icon: Bot,
    title: 'Discord Bots',
    description:
      'Moderation, logs, commands, and small automations between Discord and Minecraft.',
    details: ['Commands', 'Logs', 'Moderation', 'Webhooks'],
  },
  {
    icon: Server,
    title: 'Linux Setups',
    description:
      'Basic setups, panels, security, and tools to keep things running without too much mess.',
    details: ['Proxmox', 'Docker', 'Pterodactyl', 'Fail2ban'],
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS', 'Next.js (learning)'],
  },
  {
    title: 'Bots & APIs',
    items: ['Node.js', 'Express', 'discord.js', 'REST', 'Webhooks'],
  },
  {
    title: 'Minecraft',
    items: ['Java', 'Paper', 'Spigot', 'Maven', 'YAML', 'Gradle (learning)', 'Kotlin (learning)'],
  },
  {
    title: 'Servers',
    items: ['Linux', 'Docker', 'Proxmox', 'Pterodactyl', 'Firewall'],
  },
]

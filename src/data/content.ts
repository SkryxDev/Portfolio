import { Blocks, Bot, Code2, Server } from 'lucide-react'

export const navItems = ['About', 'Work', 'Skills', 'Contact']

export const heroStack = ['Websites', 'MC plugins', 'Bots', 'Linux']

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
    title: 'Plugins for Minecraft',
    description:
      'Custom Paper/Spigot stuff: commands, events, configs, permissions, and small utilities.',
    details: ['Paper', 'Spigot', 'Maven', 'YAML'],
  },
  {
    icon: Bot,
    title: 'Bots',
    description: 'Moderation, logs, commands, and small automations between Discord and Minecraft.',
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
    items: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS'],
  },
  {
    title: 'Bots & APIs',
    items: ['Node.js', 'Express', 'discord.js', 'REST', 'Webhooks'],
  },
  {
    title: 'Minecraft',
    items: ['Java', 'Paper', 'Spigot', 'Maven', 'YAML'],
  },
  {
    title: 'Servers',
    items: ['Linux', 'Docker', 'Proxmox', 'Pterodactyl', 'Firewall'],
  },
]

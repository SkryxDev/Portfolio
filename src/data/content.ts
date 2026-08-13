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
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    icon: Code2,
    title: 'Websites',
    description:
      'Fast, modern landing pages and small apps built with React and Next.js — styled with Tailwind CSS and shipped quickly.',
    details: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Bot,
    title: 'Bots & APIs',
    description:
      'Discord bots and REST APIs in Node.js, Express and Spring Boot, glued together with webhooks and clean JSON.',
    details: ['Node.js', 'Express', 'Spring Boot', 'Webhooks'],
  },
  {
    icon: Blocks,
    title: 'Minecraft Plugins',
    description:
      'Custom Paper / Spigot / Bukkit plugins in Java and Kotlin: commands, events, configs, permissions and small utilities.',
    details: ['Paper API', 'Spigot API', 'Bukkit API', 'Gradle', 'Maven'],
  },
  {
    icon: Server,
    title: 'Servers & Linux',
    description:
      'Linux boxes and panels: Docker containers, Proxmox and Pterodactyl setups, with firewalls and hardening basics.',
    details: ['Linux', 'Docker', 'Proxmox', 'Pterodactyl', 'Firewalls'],
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Bots & APIs',
    items: ['Node.js', 'discord.js', 'Express', 'REST', 'Webhooks', 'Spring Boot'],
  },
  {
    title: 'Minecraft',
    items: ['Java', 'Kotlin', 'Gradle', 'Maven', 'Paper API', 'Spigot API', 'Bukkit API', 'YAML'],
  },
  {
    title: 'Servers',
    items: ['Linux', 'Docker', 'Pterodactyl', 'Proxmox', 'Firewalls'],
  },
]

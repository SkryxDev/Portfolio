import { Braces, FileCode2, Laptop, Shield, Smartphone, Webhook, type LucideIcon } from 'lucide-react'
import {
  siApachemaven,
  siApple,
  siDiscorddotjs,
  siDocker,
  siExpress,
  siGradle,
  siJavascript,
  siKotlin,
  siLinux,
  siMariadb,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siProxmox,
  siPterodactyl,
  siReact,
  siRedis,
  siSpigotmc,
  siSpringboot,
  siSqlite,
  siSwift,
  siTailwindcss,
  siTypescript,
  siVite,
  siXcode,
  type SimpleIcon,
} from 'simple-icons'

// Kept apart from content.ts: only the (server) Skills section imports the
// logos, so they never end up in the client bundle.

export type Skill = {
  name: string
  icon: SimpleIcon | LucideIcon
  /** Brand colour; logos that are near-black use the text colour instead. */
  color?: string
}

export type SkillGroup = {
  title: string
  note?: string
  main?: boolean
  items: Skill[]
}

function brand(name: string, icon: SimpleIcon, color = `#${icon.hex}`): Skill {
  return { name, icon, color: isTooDark(color) ? undefined : color }
}

function isTooDark(hex: string) {
  const value = parseInt(hex.slice(1), 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 70
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Apple',
    note: 'Apps for the Mac and iPhone',
    main: true,
    items: [
      brand('Swift', siSwift),
      brand('SwiftUI', siSwift, '#0a84ff'),
      brand('AppKit', siApple),
      brand('Xcode', siXcode),
      { name: 'macOS', icon: Laptop },
      { name: 'iOS', icon: Smartphone },
    ],
  },
  {
    title: 'Web',
    note: 'Sites and small web apps',
    main: true,
    items: [
      brand('React', siReact),
      brand('Next.js', siNextdotjs),
      brand('TypeScript', siTypescript),
      brand('JavaScript', siJavascript),
      brand('Vite', siVite),
      brand('Tailwind CSS', siTailwindcss),
    ],
  },
  {
    title: 'Bots & APIs',
    items: [
      brand('Node.js', siNodedotjs),
      brand('discord.js', siDiscorddotjs),
      brand('Express', siExpress),
      brand('Spring Boot', siSpringboot),
      { name: 'REST', icon: Braces },
      { name: 'Webhooks', icon: Webhook },
    ],
  },
  {
    title: 'Minecraft',
    items: [
      brand('Java', siOpenjdk),
      brand('Kotlin', siKotlin),
      brand('Gradle', siGradle),
      brand('Maven', siApachemaven),
      { name: 'Paper API', icon: FileCode2 },
      brand('Spigot API', siSpigotmc),
    ],
  },
  {
    title: 'Servers',
    items: [
      brand('Linux', siLinux),
      brand('Docker', siDocker),
      brand('Pterodactyl', siPterodactyl),
      brand('Proxmox', siProxmox),
      { name: 'Firewalls', icon: Shield },
    ],
  },
  {
    title: 'Databases',
    items: [
      brand('MySQL', siMysql),
      brand('MariaDB', siMariadb),
      brand('PostgreSQL', siPostgresql),
      brand('Redis', siRedis),
      brand('MongoDB', siMongodb),
      brand('SQLite', siSqlite),
    ],
  },
]

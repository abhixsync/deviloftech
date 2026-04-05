import mongoose from 'mongoose'
import { Profile } from '../src/lib/models/Profile'
import { Experience } from '../src/lib/models/Experience'
import { Project } from '../src/lib/models/Project'
import { Skill } from '../src/lib/models/Skill'
import { Achievement } from '../src/lib/models/Achievement'
import { Education } from '../src/lib/models/Education'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/deviloftech'

async function seed() {
  await mongoose.connect(MONGODB_URI)
  console.log('Connected to MongoDB')

  // Clear existing data
  await Promise.all([
    Profile.deleteMany({}),
    Experience.deleteMany({}),
    Project.deleteMany({}),
    Skill.deleteMany({}),
    Achievement.deleteMany({}),
    Education.deleteMany({}),
  ])
  console.log('Cleared existing data')

  // ── PROFILE ──────────────────────────────────────────────────────────────
  await Profile.create({
    name: 'Abhishek',
    tagline: 'Senior Software Engineer · SD3',
    roles: ['Backend', 'DevOps', 'Fintech', 'AI Systems'],
    bio: "I'm a Senior Software Engineer (SD3) with a decade-long obsession with building systems that don't break when it matters most — payment corridors, bank APIs, multi-tenant SaaS, NFT infrastructure. My craft sits at the intersection of backend engineering, cloud architecture, and developer tooling. I've shipped OCR engines, built 25+ bank integrations, designed archive pipelines on Kubernetes, and led teams through zero-downtime migrations. Outside code, I'm building WrenForge — a personal brand rooted in precision engineering and content that teaches through storytelling. Currently also running @deviloftech — where Lucifer himself teaches software engineering.",
    heroStats: [
      { number: '8+', label: 'Years of Experience', sub: 'Backend · DevOps · Cloud' },
      { number: '25+', label: 'Bank Integrations Built', sub: 'FsBankAPI · CarDekho Group' },
      { number: '3×', label: 'CarDekho Awards', sub: 'Excellence · Innovation' },
      { number: 'AWS', label: 'Certified', sub: 'Solutions Architect' },
    ],
    detailCards: [
      { icon: '📍', label: 'Location', value: 'Ghaziabad, UP · India' },
      { icon: '🏢', label: 'Current Role', value: 'Senior Software Engineer · SD3', sub: 'SK Finance' },
      { icon: '🎓', label: 'Education', value: 'MBA · NMIMS Mumbai', sub: 'B.Tech · MIT Meerut' },
      { icon: '🌐', label: 'Brand', value: 'WrenForge · @deviloftech', sub: 'wrenforge.com · wrenforge.in' },
      { icon: '☁️', label: 'Certification', value: 'AWS Certified Solutions Architect' },
    ],
    socialLinks: {
      email: 'abhishek@wrenforge.com',
      linkedin: 'https://linkedin.com/in/abhishek',
      github: 'https://github.com/abhishek',
      website: 'https://wrenforge.com',
      youtube: 'https://youtube.com/@deviloftech',
      instagram: 'https://instagram.com/deviloftech',
    },
  })
  console.log('✓ Profile seeded')

  // ── EXPERIENCES ───────────────────────────────────────────────────────────
  await Experience.insertMany([
    {
      period: '2023 — Present',
      role: 'Senior Software Engineer · SD3',
      company: 'SK Finance',
      location: 'Jaipur',
      description:
        'Leading backend architecture for an AP invoice processing platform built on Django, Celery, and Kubernetes. Designed a full data lifecycle and archive system with MinIO cold storage, JSONL.gz pipelines, and an ArchiveRestoreService. Built Gmail notification infrastructure with bulk-create patterns, OAuth-based delivery, and production-grade logging. Architected an email classification and attachment validation gateway for GRN-based invoice filtering.',
      pills: ['Django', 'Celery', 'Kubernetes', 'PostgreSQL', 'MinIO', 'Gmail API', 'Python'],
      sortOrder: 0,
    },
    {
      period: '2020 — 2023',
      role: 'Senior Software Engineer',
      company: 'Rupyy / CarDekho Group',
      location: 'Gurgaon',
      description:
        'Built and maintained FsBankAPI — a unified bank integration gateway connecting 25+ Indian banks for loan disbursals. Led development of Bankbox v2, a core payment engine. Designed LineX — a credit line product. Built an OCR engine using AWS Textract for document processing. Won multiple CarDekho Excellence and Innovation awards. Led zero-downtime migrations and multi-environment deployments on AWS ECS/Fargate.',
      pills: ['Node.js', 'TypeScript', 'AWS ECS/Fargate', 'AWS Textract', 'PostgreSQL', 'Redis', 'Terraform'],
      sortOrder: 1,
    },
    {
      period: '2018 — 2020',
      role: 'Software Engineer',
      company: 'Tosh Innovations',
      location: 'Noida',
      description:
        'Core contributor to NFTically — a white-label NFT marketplace platform built on Web3/Solidity. Also worked on a multi-tenant eLearning SaaS platform. Handled smart contract integration, storefront customization, and API architecture for multiple client deployments.',
      pills: ['Node.js', 'Solidity', 'Web3.js', 'React.js', 'MongoDB', 'PHP'],
      sortOrder: 2,
    },
  ])
  console.log('✓ Experiences seeded')

  // ── PROJECTS ──────────────────────────────────────────────────────────────
  await Project.insertMany([
    {
      slug: 'fsbankapi',
      num: '01',
      tag: 'Fintech · Payment Infrastructure',
      name: 'FsBankAPI — 25-Bank Gateway',
      description:
        'A unified bank integration layer connecting 25+ Indian banks to a single loan disbursal API. Handled authentication, reconciliation, retry logic, and webhook normalization across wildly inconsistent bank APIs — built to be fault-tolerant at scale.',
      impact: '↑ Reduced integration time from weeks to hours per bank · Powering crores in daily disbursals',
      stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Webhooks'],
      status: 'past',
      isFeatured: true,
      sideStats: [
        { label: 'Scale', value: '25+', sub: 'Banks Connected' },
        { label: 'Status', value: 'Production · Live' },
      ],
      sortOrder: 0,
    },
    {
      slug: 'bankbox-v2',
      num: '02',
      tag: 'Fintech · Core Banking',
      name: 'Bankbox v2',
      description:
        "Complete rebuild of CarDekho's core payment engine — handling loan disbursals, repayments, and reconciliation. Designed for high throughput with zero-downtime deployment strategy.",
      impact: '↑ Core engine for ₹100Cr+ in monthly transactions',
      stack: ['Node.js', 'TypeScript', 'AWS ECS', 'PostgreSQL'],
      status: 'past',
      isFeatured: false,
      sortOrder: 1,
    },
    {
      slug: 'ocr-engine',
      num: '03',
      tag: 'AI · Document Processing',
      name: 'OCR Engine · AWS Textract',
      description:
        'Built an intelligent document processing pipeline using AWS Textract. Auto-extracts structured data from bank statements, salary slips, and KYC documents — feeding directly into loan underwriting workflows.',
      impact: '↑ Eliminated manual document review for 80%+ of applications',
      stack: ['AWS Textract', 'Node.js', 'S3', 'Lambda'],
      status: 'past',
      isFeatured: false,
      sortOrder: 2,
    },
    {
      slug: 'ap-invoice-lifecycle',
      num: '04',
      tag: 'Django · Archive System',
      name: 'AP Invoice Data Lifecycle',
      description:
        'End-to-end archive and restore system for an AP invoice processing platform. Designed ArchiveRestoreService, EligibleInvoiceSelector, and cold storage pipelines to MinIO with JSONL.gz compression running on Kubernetes.',
      impact: '↑ Reduced hot DB size by ~60% · Compliant cold storage',
      stack: ['Django', 'Celery', 'MinIO', 'Kubernetes', 'PostgreSQL'],
      status: 'current',
      isFeatured: false,
      sortOrder: 3,
    },
    {
      slug: 'nftically',
      num: '05',
      tag: 'Web3 · NFT Marketplace',
      name: 'NFTically Platform',
      description:
        'White-label NFT marketplace powering multiple storefronts on Ethereum and Polygon. Handled smart contract integration, royalty splits, marketplace listings, and multi-tenant storefront customization.',
      impact: '↑ Deployed for 50+ creator brands globally',
      stack: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      status: 'past',
      isFeatured: false,
      sortOrder: 4,
    },
    {
      slug: 'deviloftech',
      num: '06',
      tag: 'Content · Personal Brand',
      name: 'DevilOfTech · @deviloftech',
      description:
        'YouTube and Instagram channel where Lucifer himself teaches software engineering — through skits, moral lessons, and cursed production incidents. Building a dev-education brand at the intersection of comedy and craft.',
      impact: "↑ Hell's Hottest Tech Channel · Growing 🔥",
      stack: ['YouTube', 'Instagram', 'Content Strategy', 'WrenForge'],
      status: 'current',
      isFeatured: false,
      links: {
        live: 'https://youtube.com/@deviloftech',
      },
      sortOrder: 5,
    },
    {
      slug: 'deviloftech-website',
      num: '07',
      tag: 'Personal Brand · Web',
      name: 'DevilOfTech Brand Website',
      description:
        'A full-stack Next.js brand website for DevilOfTech — DB-driven, multi-page, with the dark medieval forge aesthetic. Built to showcase projects, experience, and the DevilOfTech brand.',
      impact: '↑ The very site you are reading',
      stack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind'],
      status: 'current',
      isFeatured: false,
      sortOrder: 6,
    },
  ])
  console.log('✓ Projects seeded')

  // ── SKILLS ────────────────────────────────────────────────────────────────
  await Skill.insertMany([
    {
      clusterTitle: 'Backend Engineering',
      tags: [
        { name: 'Node.js', isHot: true },
        { name: 'TypeScript', isHot: true },
        { name: 'Python', isHot: true },
        { name: 'Django', isHot: true },
        { name: 'NestJS', isHot: false },
        { name: 'PHP', isHot: false },
        { name: 'REST APIs', isHot: false },
        { name: 'GraphQL', isHot: false },
        { name: 'Celery', isHot: false },
        { name: 'FastAPI', isHot: false },
      ],
      sortOrder: 0,
    },
    {
      clusterTitle: 'Cloud & DevOps',
      tags: [
        { name: 'AWS', isHot: true },
        { name: 'Kubernetes', isHot: true },
        { name: 'Docker', isHot: true },
        { name: 'Terraform', isHot: false },
        { name: 'AWS ECS', isHot: false },
        { name: 'AWS Fargate', isHot: false },
        { name: 'CI/CD', isHot: false },
        { name: 'MinIO', isHot: false },
        { name: 'GitHub Actions', isHot: false },
      ],
      sortOrder: 1,
    },
    {
      clusterTitle: 'Databases & Storage',
      tags: [
        { name: 'PostgreSQL', isHot: true },
        { name: 'MongoDB', isHot: true },
        { name: 'Redis', isHot: true },
        { name: 'MySQL', isHot: false },
        { name: 'S3', isHot: false },
        { name: 'ElasticSearch', isHot: false },
        { name: 'DynamoDB', isHot: false },
      ],
      sortOrder: 2,
    },
    {
      clusterTitle: 'Frontend & Web',
      tags: [
        { name: 'React.js', isHot: true },
        { name: 'Next.js', isHot: false },
        { name: 'HTML/CSS', isHot: false },
        { name: 'Tailwind', isHot: false },
        { name: 'JavaScript', isHot: false },
        { name: 'Web3/Solidity', isHot: false },
      ],
      sortOrder: 3,
    },
    {
      clusterTitle: 'AI & Automation',
      tags: [
        { name: 'AWS Textract', isHot: true },
        { name: 'Claude API', isHot: true },
        { name: 'OCR Pipelines', isHot: false },
        { name: 'LLM Integration', isHot: false },
        { name: 'Prompt Engineering', isHot: false },
        { name: 'AI Automation', isHot: false },
      ],
      sortOrder: 4,
    },
    {
      clusterTitle: 'Architecture & Patterns',
      tags: [
        { name: 'Microservices', isHot: true },
        { name: 'Event-Driven', isHot: true },
        { name: 'CQRS', isHot: false },
        { name: 'Multi-tenant SaaS', isHot: false },
        { name: 'Data Lifecycle', isHot: false },
        { name: 'Payment Systems', isHot: false },
        { name: 'NFT / Web3', isHot: false },
      ],
      sortOrder: 5,
    },
  ])
  console.log('✓ Skills seeded')

  // ── ACHIEVEMENTS ──────────────────────────────────────────────────────────
  await Achievement.insertMany([
    {
      icon: '🏆',
      title: 'CarDekho Excellence Award',
      description:
        'Recognized for outstanding contributions to fintech infrastructure — building FsBankAPI and leading the Bankbox v2 rebuild.',
      year: 'CarDekho Group · 2022',
      sortOrder: 0,
    },
    {
      icon: '⚡',
      title: 'Innovation Award',
      description:
        'Awarded for building the OCR document processing engine using AWS Textract — eliminating manual review in the loan pipeline.',
      year: 'CarDekho Group · 2021',
      sortOrder: 1,
    },
    {
      icon: '🎯',
      title: '3× Award Winner',
      description:
        'Multiple consecutive recognitions across Excellence and Innovation categories within 3 years at CarDekho Group.',
      year: 'CarDekho Group · 2021–2023',
      sortOrder: 2,
    },
    {
      icon: '☁️',
      title: 'AWS Certified Solutions Architect',
      description:
        'Certified expertise in designing distributed systems, microservices, and cloud-native architectures on Amazon Web Services.',
      year: 'Amazon Web Services',
      sortOrder: 3,
    },
    {
      icon: '🏛️',
      title: 'MBA · NMIMS Mumbai',
      description:
        "Postgraduate in Management from one of India's top business schools — bridging technology leadership with business strategy.",
      year: 'NMIMS Mumbai',
      sortOrder: 4,
    },
    {
      icon: '🔥',
      title: 'WrenForge — Personal Brand',
      description:
        'Built a personal brand from the ground up: wrenforge.com, @deviloftech across YouTube & Instagram — precision + building under pressure.',
      year: '2024 — Present',
      sortOrder: 5,
    },
  ])
  console.log('✓ Achievements seeded')

  // ── EDUCATION ─────────────────────────────────────────────────────────────
  await Education.insertMany([
    {
      badge: '🎓',
      degree: 'MBA — Management',
      institution: 'NMIMS Mumbai',
      year: 'Postgraduate · Mumbai',
      sortOrder: 0,
    },
    {
      badge: '⚙️',
      degree: 'B.Tech — Engineering',
      institution: 'MIT Meerut',
      year: 'Undergraduate · Meerut, UP',
      sortOrder: 1,
    },
    {
      badge: '☁️',
      degree: 'AWS Solutions Architect',
      institution: 'Amazon Web Services',
      year: 'Professional Certification',
      sortOrder: 2,
    },
    {
      badge: '🔥',
      degree: '8+ Years Engineering',
      institution: 'Production Systems · School of Hard Knocks',
      year: 'The best education there is',
      sortOrder: 3,
    },
  ])
  console.log('✓ Education seeded')

  console.log('\n🔥 All data seeded successfully!')
  await mongoose.disconnect()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})

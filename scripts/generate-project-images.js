#!/usr/bin/env node
/**
 * Generate placeholder images for portfolio projects
 * These can be replaced with actual project screenshots
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const projectImages = [
  {
    name: 'finvault.png',
    title: 'FinVault Banking Platform',
    color: '#0F766E',
    icon: '🏦',
  },
  {
    name: 'greenleaf.png',
    title: 'GreenLeaf Mobile App',
    color: '#15803D',
    icon: '🌿',
  },
  {
    name: 'logicore.png',
    title: 'LogiCore Security',
    color: '#7C2D12',
    icon: '🔒',
  },
  {
    name: 'medsync.png',
    title: 'MedSync AI Diagnostics',
    color: '#DC2626',
    icon: '⚕️',
  },
  {
    name: 'retailmax.png',
    title: 'RetailMax E-Commerce',
    color: '#6B21A8',
    icon: '🛍️',
  },
  {
    name: 'edutech.png',
    title: 'EduTech Platform',
    color: '#1E40AF',
    icon: '📚',
  },
  {
    name: 'cloudflow.png',
    title: 'CloudFlow DevOps',
    color: '#0369A1',
    icon: '☁️',
  },
  {
    name: 'socialsync.png',
    title: 'SocialSync AI',
    color: '#9333EA',
    icon: '💬',
  },
  {
    name: 'securevault.png',
    title: 'SecureVault Encryption',
    color: '#DC2626',
    icon: '🔐',
  },
  {
    name: 'fittrack.png',
    title: 'FitTrack Wellness',
    color: '#EA580C',
    icon: '💪',
  },
  {
    name: 'datahub.png',
    title: 'DataHub Analytics',
    color: '#059669',
    icon: '📊',
  },
  {
    name: 'supplychain.png',
    title: 'SupplyChain Automation',
    color: '#CA8A04',
    icon: '📦',
  },
  {
    name: 'ai-website-builder.png',
    title: 'AI Website Builder',
    color: '#7C3AED',
    icon: '🤖',
  },
  {
    name: 'offline-sync.png',
    title: 'Offline-First Sync App',
    color: '#06B6D4',
    icon: '📱',
  },
  {
    name: 'job-queue.png',
    title: 'Distributed Job Queue',
    color: '#F59E0B',
    icon: '⚙️',
  },
  {
    name: 'ai-agent.png',
    title: 'Autonomous AI Agent',
    color: '#EC4899',
    icon: '🧠',
  },
  {
    name: 'collab-dashboard.png',
    title: 'Real-Time Collab Dashboard',
    color: '#10B981',
    icon: '📊',
  },
  {
    name: 'headless-cms.png',
    title: 'Headless CMS + Editor',
    color: '#3B82F6',
    icon: '✏️',
  },
];

const publicDir = path.join(__dirname, '../public/projects');

// Create projects directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate SVG-based placeholder images
projectImages.forEach((project) => {
  const svg = `
    <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${project.name}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${project.color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1f2937;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="600" height="400" fill="url(#grad-${project.name})"/>
      
      <!-- Top accent bar -->
      <rect width="600" height="8" fill="${project.color}" opacity="0.3"/>
      
      <!-- Content area -->
      <g id="content">
        <!-- Icon circle -->
        <circle cx="300" cy="120" r="60" fill="white" opacity="0.1"/>
        <text x="300" y="140" font-size="64" text-anchor="middle" dominant-baseline="middle">
          ${project.icon}
        </text>
        
        <!-- Title -->
        <text x="300" y="220" font-size="28" font-weight="bold" text-anchor="middle" fill="white" font-family="sans-serif">
          ${project.title}
        </text>
        
        <!-- Decorative elements -->
        <circle cx="100" cy="320" r="3" fill="white" opacity="0.6"/>
        <circle cx="120" cy="320" r="3" fill="white" opacity="0.6"/>
        <circle cx="140" cy="320" r="3" fill="white" opacity="0.6"/>
        <circle cx="500" cy="80" r="3" fill="white" opacity="0.6"/>
        <circle cx="520" cy="80" r="3" fill="white" opacity="0.6"/>
        <circle cx="540" cy="80" r="3" fill="white" opacity="0.6"/>
      </g>
      
      <!-- Velmora watermark -->
      <text x="300" y="380" font-size="12" text-anchor="middle" fill="white" opacity="0.4" font-family="sans-serif">
        Velmora Portfolio
      </text>
    </svg>
  `;

  const filePath = path.join(publicDir, project.name);
  fs.writeFileSync(filePath, svg.trim());
  console.log(`✓ Generated ${project.name}`);
});

console.log(`\n✅ All ${projectImages.length} project images generated successfully!`);
console.log(`📁 Images saved to: ${publicDir}`);

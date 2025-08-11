#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Task Flow Mobile Setup...\n');

const checks = [
  {
    name: 'Capacitor Config',
    check: () => fs.existsSync('capacitor.config.ts'),
    fix: 'Run: npx cap init "Task Flow" "com.taskflow.app"'
  },
  {
    name: 'Android Platform',
    check: () => fs.existsSync('android/app/build.gradle'),
    fix: 'Run: npx cap add android'
  },
  {
    name: 'Package.json Mobile Scripts',
    check: () => {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return pkg.scripts && pkg.scripts['mobile:dev'] && pkg.scripts['mobile:build'];
    },
    fix: 'Mobile scripts missing in package.json'
  },
  {
    name: 'Next.js Mobile Config',
    check: () => {
      const config = fs.readFileSync('next.config.ts', 'utf8');
      return config.includes('ignoreDuringBuilds') && config.includes('ignoreBuildErrors');
    },
    fix: 'Next.js config needs mobile optimizations'
  },
  {
    name: 'Mobile CSS Styles',
    check: () => {
      const css = fs.readFileSync('src/app/globals.css', 'utf8');
      return css.includes('Mobile-specific styles') && css.includes('safe-area-inset');
    },
    fix: 'Mobile CSS styles missing in globals.css'
  },
  {
    name: 'Android Manifest',
    check: () => {
      const manifest = fs.readFileSync('android/app/src/main/AndroidManifest.xml', 'utf8');
      return manifest.includes('INTERNET') && manifest.includes('ACCESS_NETWORK_STATE');
    },
    fix: 'Android permissions missing in manifest'
  }
];

let allPassed = true;

checks.forEach((check, index) => {
  const passed = check.check();
  const status = passed ? '✅' : '❌';
  console.log(`${status} ${check.name}`);
  
  if (!passed) {
    console.log(`   Fix: ${check.fix}`);
    allPassed = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('🎉 All checks passed! Your mobile setup is ready.');
  console.log('\nNext steps:');
  console.log('1. Run: npm run mobile:dev');
  console.log('2. Run: npm run mobile:open');
  console.log('3. Open Android Studio and run the app');
} else {
  console.log('⚠️  Some checks failed. Please fix the issues above.');
}

console.log('\n📖 See MOBILE_DEVELOPMENT_GUIDE.md for detailed instructions.');
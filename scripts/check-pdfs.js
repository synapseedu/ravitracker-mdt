#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const patientDir = path.join(__dirname, '..', 'data', 'patients');
const pdfDir = path.join(__dirname, '..', 'public', 'pdfs');

// Get patient files (.ts or .tsx) excluding index and types
const patientFiles = fs
  .readdirSync(patientDir)
  .filter((f) => /(\.ts|\.tsx)$/.test(f) && !['index.ts', 'types.ts'].includes(f));

let missing = [];
for (const file of patientFiles) {
  const content = fs.readFileSync(path.join(patientDir, file), 'utf8');
  const pdfSection = content.match(/pdfs:\s*{([\s\S]*?)}/);
  if (!pdfSection) continue;
  const pdfs = [...pdfSection[1].matchAll(/'([^']+\.pdf)'/g)].map((m) => m[1]);
  for (const pdf of pdfs) {
    const pdfPath = path.join(pdfDir, pdf);
    if (!fs.existsSync(pdfPath)) {
      missing.push(`${file}: ${pdf}`);
    }
  }
}

if (missing.length > 0) {
  console.error('Missing PDF files:');
  for (const m of missing) console.error(`- ${m}`);
  process.exit(1);
} else {
  console.log('All referenced PDF files are present.');
}

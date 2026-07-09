#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const visibleKoreanPattern = /[가-힣]/;

const root = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith('.html')).sort();
const requiredFiles = [
  'index.html',
  'global-exercise.html',
  'homework-helper.html',
  'nolpang.html',
  'shipdae.html',
];

function fail(message) {
  console.error(`Static validation failed: ${message}`);
  process.exitCode = 1;
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) fail(`missing ${file}`);
}

if (!htmlFiles.includes('index.html')) fail('index.html is required as the deployment entry point');

for (const file of htmlFiles) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  if (!source.includes('<!DOCTYPE html>')) fail(`${file} is missing <!DOCTYPE html>`);
  if (!source.includes('<meta name="viewport"')) fail(`${file} is missing a mobile viewport meta tag`);

  const visibleMarkup = source
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--([\s\S]*?)-->/g, '');
  if (visibleKoreanPattern.test(visibleMarkup)) {
    fail(`${file} contains visible Korean fallback text outside i18n scripts`);
  }

  const scriptPattern = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let index = 0;
  while ((match = scriptPattern.exec(source)) !== null) {
    try {
      new vm.Script(match[1], { filename: `${file}#inline-script-${index}` });
    } catch (error) {
      fail(`${file} inline script ${index} has a syntax error: ${error.message}`);
    }
    index += 1;
  }
}

const hub = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const app of requiredFiles.filter((file) => file !== 'index.html')) {
  if (!hub.includes(app)) fail(`index.html does not link to ${app}`);
}

if (!process.exitCode) {
  console.log(`Static validation passed for ${htmlFiles.length} HTML files.`);
}

'use strict';
const fs=require('node:fs'), test=require('node:test'), assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
test('recent deep link uses allowlisted existing UI state',()=>{
  assert.match(html,/view !== 'live'/); assert.match(html,/filter !== 'recent'/);
  assert.match(html,/textContent\.trim\(\) === '剛完賽'/);
  assert.doesNotMatch(html,/innerHTML\s*=\s*params/);
});

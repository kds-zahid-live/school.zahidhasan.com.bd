const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');

const obfuscateFile = (inputFile, outputFile) => {
  const code = fs.readFileSync(inputFile, 'utf8');
  const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    shuffleStringArray: true,
    splitStrings: true,
    stringArrayThreshold: 0.75,
  });

  fs.writeFileSync(outputFile, obfuscationResult.getObfuscatedCode(), 'utf8');
};

// Replace with paths to your actual build files
obfuscateFile('build/static/js/main.54781381.js', 'build/static/js/main.54781381.js');

// Repeat for other build files as needed

console.log('Obfuscation completed.');

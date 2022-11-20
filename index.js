#!/usr/bin/env node
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const sym = require("log-symbols");

welcome({
  title: pkgJSON.name,
  tagLine: `Hey, nice to meet you!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#F4772A`,
  color: `#000000`,
  bold: true,
  clear: false
})

const bbColor = chalk.bgHex(`#FFAB00`).hex(`#000`);
const nameColor = chalk.bgHex(`#F4772A`).hex('#000')
const githubColor = chalk.bgHex(`#6cc644`).hex('#000');
console.log(`
${nameColor.bold(`Abner Soares Alves Junior`)}

${chalk(`
Software Engineer from 🇧🇷
Currently living in Montreal 🇨🇦
Working at Busbud
`)}
😸 ${githubColor.bold(` Github `)}: ${chalk(`https://github.com/abnersajr`)}
🚌 ${bbColor.bold(` Busbud `)}: https://busbud.com

${sym.success + chalk.dim(` Use this CLI as an inspiration for your own`)}
`)
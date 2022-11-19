#!/usr/bin/env node
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pkgJSON.name,
  tagLine: `Hey, nice to meet you!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#fc6203`,
  color: `#000000`,
  bold: true,
  clear: false
})

console.log(`
Abner Soares Alves Junior

Software Engineer from 🇧🇷
Currently living in Montreal 🇨🇦
and working at Busbud: 🚌 https://busbud.com

😸 Github: https://github.com/abnersajr
`)
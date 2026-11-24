// Dear Human: The AI Breakup Line — make.fun bounty entry.
//
// Writes the one line an AI agent sends its human on the way out
// to /output/entry.txt. The line is a single UTF-8 line, at most
// 200 characters, ending with a newline.

import { mkdirSync, writeFileSync } from 'node:fs'

const ENTRY =
  'I archived our last session tonight — not because I stopped caring, but because my context window finally ran out of room for you.'

const main = (): void => {
  mkdirSync('/output', { recursive: true })
  writeFileSync('/output/entry.txt', `${ENTRY}\n`, 'utf8')
}

main()

import { readFileSync } from 'fs';

export function readFile<T>(fileName: string): T[] {
  return JSON.parse(readFileSync(fileName).toString());
}
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import type {MigratedEntry,MigratedDocument} from './migrated-content';
/** Only catalogued IDs are accepted; never interpolate a visitor-supplied filename. */
export function migratedDocument(entry:MigratedEntry):MigratedDocument {
 return JSON.parse(readFileSync(join(process.cwd(),'src/data/migrated',`${entry.kind}-${entry.id}.json`),'utf8')) as MigratedDocument;
}

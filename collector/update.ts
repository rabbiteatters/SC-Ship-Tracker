/**
 * Scheduled collector baseline. It validates and timestamps curated data.
 * It intentionally does not scrape or invent live production-stage updates.
 * Add adapters only when they capture source date, URL and a verbatim evidence excerpt.
 */
import {readFile,writeFile} from 'node:fs/promises';import type{Dataset}from'./types.js';
const file=new URL('../public/data/ships.json',import.meta.url);const data=JSON.parse(await readFile(file,'utf8'))as Dataset;
if(process.env.SC_API_KEY)console.log('SC_API_KEY configured; adapter hook available (no unverified updates applied).');else console.log('No API key; validating curated source dataset.');
const seen=new Set<string>();for(const s of data.ships){if(!s.id||seen.has(s.id))throw Error(`Duplicate/missing id: ${s.id}`);seen.add(s.id);if(!s.sourceUrl||!s.sourceTitle||!s.evidence)throw Error(`Missing provenance for ${s.name}`);if(!Array.isArray(s.history))throw Error(`Invalid history for ${s.name}`)}
data.generatedAt=new Date().toISOString();data.dataMode='curated-evidence';await writeFile(file,JSON.stringify(data,null,2)+'\n');console.log(`Validated ${data.ships.length} ships.`);

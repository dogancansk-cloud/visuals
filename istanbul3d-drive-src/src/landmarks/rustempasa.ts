// Rüstem Paşa Camii (Tahtakale) landmark builder: toy model on its vaulted shop podium; ribbed lead dome on a ring of lattice
// windows, corner semi-domes and small domes, double portico, one minaret with one şerefe.
// Files: public/models/rustempasa.web.glb + rustempasa.anchor.json; plain copy models_game/rustempasa.glb. Built by data_pipeline/rustempasa/.
// Model frame: metres, +Y up, map axes (+X east, +Z south), origin = main dome centre at street level.
import type { BuildOptions } from './ayasofya';
import { buildGltfLandmark } from './topkapi';
export const buildRustemPasa = (o: BuildOptions) => buildGltfLandmark('rustempasa', o);

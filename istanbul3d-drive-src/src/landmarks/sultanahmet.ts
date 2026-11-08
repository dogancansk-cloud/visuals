// Sultanahmet Camii (Blue Mosque) landmark builder: toy model with the full dome cascade (main dome, 4 half-domes + exedrae,
// pier turrets, corner domes), 6 minarets and the domed courtyard. Same pattern as ayasofya.ts / topkapi.ts.
// Files: public/models/sultanahmet.web.glb + sultanahmet.anchor.json; plain copy models_game/sultanahmet.glb. Built by data_pipeline/sultanahmet/.
// Model frame: metres, +Y up, map axes (+X east, +Z south), origin = main dome centre at ground.
import type { BuildOptions } from './ayasofya';
import { buildGltfLandmark } from './topkapi';
export const buildSultanahmet = (o: BuildOptions) => buildGltfLandmark('sultanahmet', o);

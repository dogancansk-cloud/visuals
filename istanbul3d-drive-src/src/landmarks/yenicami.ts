// Yeni Cami (Yeni Valide Camii, Eminönü) landmark builder: toy model with the dome cascade (main dome on a windowed drum,
// 4 half-domes + exedrae, pier turrets, corner domes), 2 minarets × 3 şerefe, domed courtyard with the octagonal şadırvan,
// and the Hünkâr Kasrı in simple form. Files: public/models/yenicami.web.glb + yenicami.anchor.json; plain copy models_game/yenicami.glb.
// Built by data_pipeline/yenicami/. Model frame: metres, +Y up, map axes (+X east, +Z south), origin = main dome centre at ground.
import type { BuildOptions } from './ayasofya';
import { buildGltfLandmark } from './topkapi';
export const buildYeniCami = (o: BuildOptions) => buildGltfLandmark('yenicami', o);

import { serveHTTP } from "stremio-addon-sdk";
import initAddon from "./addon";

initAddon()
    .then((addonInterface) => serveHTTP(addonInterface, {port: +process.env.PORT || +process.argv[2] || 69}))
    .catch(ex => console.error(ex));

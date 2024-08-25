import { setup as setupHtml } from "./html";
import { setup as setupBC } from "./bc";

export function setupTranslation() {
    setupHtml();
    setupBC();
}

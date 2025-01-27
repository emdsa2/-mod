import "./Tooltip.css";

function globalTooltip() {
    const tooltip_id = "echo-tooltip";

    let tooltip = /** @type {HTMLDivElement}*/ (document.querySelector(`#${tooltip_id}`));
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = tooltip_id;
        tooltip.classList.add("echo-tooltip");
        document.body.appendChild(tooltip);
    }

    return tooltip;
}

class InventoryObserver {
    constructor() {
        this.observer = new MutationObserver((mutations) => {
            mutations.forEach((mutations) => {
                mutations.removedNodes.forEach((node) => {
                    if (node instanceof HTMLElement && node.id === "dialog-inventory") {
                        globalTooltip().classList.remove("show");
                    }
                });
            });
        });
    }

    reTarget() {
        const t = document.body.querySelector("#dialog-inventory");
        if (t) {
            this.observer.disconnect();
            this.observer.observe(t.parentNode, { childList: true });
        }
    }

    static _instance = null;
    static instance() {
        if (!this._instance) {
            this._instance = new InventoryObserver();
        }
        return this._instance;
    }
}

/**
 * 生成一个带有tooltip的图标
 * @param {string} content tooltip的内容
 * @param {string} imageSrc 图标的路径
 * @returns
 */
export function makeTooltipIcon(content, imageSrc) {
    const icon = document.createElement("img");
    icon.src = imageSrc;
    icon.classList.add("echo-item-tooltip-img");

    const tooltip = globalTooltip();

    icon.addEventListener("mouseover", (event) => {
        const { top, left, height } = /**@type {HTMLImageElement}*/ (event.target).getBoundingClientRect();

        tooltip.textContent = content;
        tooltip.style.top = `${top + height / 2}px`;
        tooltip.style.left = `${left - tooltip.offsetWidth - 8}px`;
        tooltip.classList.add("show");
    });

    icon.addEventListener("mouseleave", () => {
        tooltip.classList.remove("show");
    });

    const wrapper = document.createElement("div");
    wrapper.classList.add("echo-item-tooltip-wrapper");
    wrapper.appendChild(icon);

    InventoryObserver.instance().reTarget();

    return wrapper;
}

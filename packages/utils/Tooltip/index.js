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
        tooltip.style.visibility = "visible";
    });

    icon.addEventListener("mouseleave", () => {
        tooltip.style.visibility = "hidden";
    });

    const wrapper = document.createElement("div");
    wrapper.classList.add("echo-item-tooltip-wrapper");
    wrapper.appendChild(icon);

    return wrapper;
}

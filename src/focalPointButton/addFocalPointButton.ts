import { getFieldByLabel } from "@liferay-editor-custom-fields/framework";
import { handleFocalPointClick } from "./handleFocalPointClick";

/**
 * Looks for a combination of an image and focal point fields
 * If it finds the right combo, adds a button element
 */

export const addFocalPointButton = () => {

    const inputX = getFieldByLabel("Focal Point X");
    const inputY = getFieldByLabel("Focal Point Y");

    if (inputX && inputY) {
        const focalPointButton = document.createElement("button");
        focalPointButton.className = "btn btn-secondary focal-point-button";
        focalPointButton.type = "button";
        focalPointButton.innerHTML = "Add focal point";
        focalPointButton.addEventListener("click", handleFocalPointClick);
        const formFieldContainer = (inputY as HTMLInputElement).closest(
            ".page-editor__sidebar__fieldset, .col-ddm",
        );
        // styling for web content
        if (
            formFieldContainer &&
            formFieldContainer.classList.contains("col-ddm") &&
            focalPointButton
        ) {
            focalPointButton.style.height = "2.5rem";
            focalPointButton.style.alignSelf = "center";
            focalPointButton.style.marginBottom = "1.375rem";
        }
        if (
            formFieldContainer &&
            !formFieldContainer?.parentElement.parentElement.querySelector(".focal-point-button")
        ) {
            const buttonSpot = (inputY as HTMLInputElement).closest(".col-ddm") || (inputY as HTMLInputElement).parentElement;
            buttonSpot.after(focalPointButton);
        }
    }
};

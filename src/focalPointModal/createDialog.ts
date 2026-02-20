import { dialogContainerCss, dialogCss, dialogImageCss, dialogMarkerCss, focalPointContainerCss } from "../styles/createFocalPointModal.styles";

export const createDialog = ({ imgSrc }: { imgSrc: string }) => {
    const dialog:HTMLDialogElement = document.createElement("dialog");
    dialog.classList.add("focal-point-container");
    dialog.style.cssText = dialogCss;
    dialog.innerHTML = `
            <div style="${dialogContainerCss}">
                <h3>Set Focal Point</h3>
                <div id="fp-container" style="${focalPointContainerCss}">
                    <img src="${imgSrc}" style="${dialogImageCss}" draggable="false">
                    <div id="fp-marker" style="${dialogMarkerCss}"></div>
                </div>
                <div style="display:flex; gap:10px;">
                    <button id="fp-save" class="btn btn-primary">Save Coordinates</button>
                    <button id="fp-cancel" class="btn btn-secondary">Cancel</button>
                </div>
            </div>
        `;
    document.body.appendChild(dialog);
    return dialog;
}
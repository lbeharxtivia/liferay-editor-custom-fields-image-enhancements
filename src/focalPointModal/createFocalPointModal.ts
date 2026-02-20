import { getFieldByLabel, getPreviewImage } from "../../../liferay-editor-custom-fields-framework-2/build/static";
import { createDialog } from "./createDialog";
import { showSuccessBorder } from "./showSuccessBorder";
import { updateXyValues } from "./updateXyValues";



export const createFocalPointModal = () => {

    const inputX = getFieldByLabel("Focal Point X") as HTMLInputElement;
    const inputY = getFieldByLabel("Focal Point Y") as HTMLInputElement;
    const previewImage = getPreviewImage() as HTMLImageElement;

    const x:number = parseInt(inputX?.value) || 50;
    const y:number = parseInt(inputY?.value) || 50;
    const imgSrc:string = previewImage?.src;

    let pendingX = x;
    let pendingY = y;

    const dialog = createDialog({ imgSrc });
    dialog.showModal();

    const container = dialog.querySelector("#fp-container");
    const modalImg = dialog.querySelector("img");
    const marker: HTMLDivElement = dialog.querySelector("#fp-marker");

    const updateMarkerPosition = (xPct, yPct) => {
        marker.style.left = `${xPct}%`;
        marker.style.top = `${yPct}%`;
    };
    // initial marker position
    updateMarkerPosition(pendingX, pendingY);
    container.addEventListener("click", (ev: MouseEvent) => {
        const rect = modalImg.getBoundingClientRect();
        pendingX = Math.round(((ev.clientX - rect.left) / rect.width) * 100);
        pendingY = Math.round(((ev.clientY - rect.top) / rect.height) * 100);

        pendingX = Math.max(0, Math.min(100, pendingX));
        pendingY = Math.max(0, Math.min(100, pendingY));

        updateMarkerPosition(pendingX, pendingY);
    });

    const saveButton: HTMLButtonElement = dialog.querySelector("#fp-save");
    saveButton.onclick = async () => {
        updateXyValues({ pendingX, pendingY })
        showSuccessBorder({ previewImage })
        dialog.close();
        dialog.remove();
    };

    const cancelButton: HTMLButtonElement = dialog.querySelector("#fp-cancel");
    cancelButton.onclick = () => {
        dialog.close();
        dialog.remove();
    };
};
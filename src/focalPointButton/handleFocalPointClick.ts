import { getPreviewImage } from "@liferay-editor-custom-fields/framework";
import { createFocalPointModal } from "../focalPointModal/createFocalPointModal";

export const handleFocalPointClick = (focalPointClickEvent: MouseEvent) => {
    focalPointClickEvent.stopPropagation();
    focalPointClickEvent.preventDefault();

    const previewImage = getPreviewImage() as HTMLImageElement;

    if (previewImage?.src) {
        createFocalPointModal();
    } else {
        alert("Please select an image.");
    }
};
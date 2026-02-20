import { encode } from "blurhash";
import { getPreviewImage, getContentImageInput, getFieldByLabel, setReactDomInputValue } from "@liferay-editor-custom-fields/framework";
import { blurhashToGradientCssObject } from "@unpic/placeholder";
import { getSrcFromObservedEl } from "../util";

const loadImage = async src =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (...args) => reject(args);
        img.src = src;
    });

const getImageData = image => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
};

const encodeImageToBlurhash = async imageUrl => {
    const image = await loadImage(imageUrl);
    const imageData = getImageData(image);
    return encode(imageData.data, imageData.width, imageData.height, 4, 4);
};

export const addBlurHash = async () => {
    const elToObserve = getContentImageInput() || getPreviewImage();
    const src = getSrcFromObservedEl(elToObserve);
    const blurHashField = getFieldByLabel('BlurHash');
    if (src && blurHashField) {
        const blurHash = await encodeImageToBlurhash(src);
        const { backgroundImage } = blurhashToGradientCssObject(blurHash);
        if (blurHashField.value !== backgroundImage) {
            setReactDomInputValue(blurHashField, backgroundImage);
            const descriptionEl: HTMLInputElement = document.querySelector('input[name^="_com_liferay_journal_web_portlet_JournalPortlet_ddm$$Image"][name$="description"]');
            descriptionEl?.focus();
        }
    }
}

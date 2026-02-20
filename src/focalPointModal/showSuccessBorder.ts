export const showSuccessBorder = ({ previewImage }: { previewImage: HTMLElement }) => {
    previewImage.style.outline = "4px solid #4CAF50";
    setTimeout(() => (previewImage.style.outline = "none"), 1000);
}
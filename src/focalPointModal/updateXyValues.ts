import { getFieldByLabel, setReactDomInputValue } from "@liferay-editor-custom-fields/framework";

// Defining an interface for the function arguments
interface UpdateXyValuesArgs {
    pendingX: string | number;
    pendingY: string | number;
}

export const updateXyValues = async ({
    pendingX,
    pendingY
}: UpdateXyValuesArgs): Promise<void> => {
    const inputX = getFieldByLabel("Focal Point X") as HTMLInputElement;
    const inputY = getFieldByLabel("Focal Point Y") as HTMLInputElement;

    if (!inputX || !inputY) {
        console.error("Could not find focal point input fields.");
        return;
    }

    setReactDomInputValue(inputX, pendingX.toString());

    // We can't set both inputs simultaneiously
    const updateInputY = (): Promise<boolean> =>
        new Promise((resolve) =>
            setTimeout(() => {
                setReactDomInputValue(inputY, pendingY.toString());
                resolve(true);
            }, 100),
        );

    setTimeout(() => {
        // jiggle the input a bit so React DOM autosaves
        inputX.focus();
        inputX.dispatchEvent(new Event("input", { bubbles: true }));
        inputX.dispatchEvent(new Event("change", { bubbles: true }));
        (document.body as HTMLElement).focus();
        inputX.dispatchEvent(new Event("blur", { bubbles: true }));
    }, 200);

    await updateInputY();
};
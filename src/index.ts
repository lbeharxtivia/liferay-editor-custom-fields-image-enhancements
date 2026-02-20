declare const Liferay;

import initFramework from '@liferay-editor-custom-fields/framework';
import { addBlurHash } from "./blurhash/addBlurHash";
import { addFocalPointButton } from "./focalPointButton/addFocalPointButton";

const initImageTools: () => void = () => {
    initFramework();
    Liferay.on('EditorCustomFields_WebContentFields_OnLoad', addFocalPointButton);
    Liferay.on('EditorCustomFields_FragmenConfig_OnLoad', addFocalPointButton);
    Liferay.on('EditorCustomFields_Image_OnChange', addBlurHash);
}
export default initImageTools;
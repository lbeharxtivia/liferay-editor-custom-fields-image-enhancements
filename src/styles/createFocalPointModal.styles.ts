  export const dialogCss = `
    padding: 20px;
    border-radius: 8px;
    border: none;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    max-width: 95vw;
    max-height: 95vh;
    overflow: hidden;
    `;

  export const dialogContainerCss = `
    display:flex; 
    flex-direction:column; 
    gap:15px; 
    align-items:center;
    `;

  export const focalPointContainerCss = `
    position:relative; 
    cursor:crosshair; 
    line-height:0;
    `;

  export const dialogImageCss = `
    max-width:80vw; 
    max-height:70vh; 
    min-height:40vh; 
    display:block; 
    user-select:none;
    `;

  export const dialogMarkerCss = `
    position:absolute; 
    width:20px; 
    height:20px; 
    background:rgba(255, 62, 62, 0.8); 
    border:2px solid #fff; 
    border-radius:50%; 
    pointer-events:none; 
    transform:translate(-50%,-50%); 
    box-shadow:0 0 5px rgba(0,0,0,0.5);
    `;
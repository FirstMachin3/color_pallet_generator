// Color generation functions
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generateColorPalette(scheme) {
    // Implement your color palette generation logic here based on the selected scheme
    // Return an array of color values
    // Example:
    const palette = [];
    for (let i = 0; i < 5; i++) {
        palette.push(getRandomColor());
    }
    return palette;
}

function createColorEntry(color) {
    const colorEntry = document.createElement("div");
    colorEntry.classList.add("color-entry");

    const colorSquare = document.createElement("div");
    colorSquare.classList.add("color-square");
    colorSquare.style.backgroundColor = color;

    const colorHex = document.createElement("div");
    colorHex.classList.add("color-hex");
    colorHex.textContent = color;

    colorEntry.appendChild(colorSquare);
    colorEntry.appendChild(colorHex);

    return colorEntry;
}

// Generate a color palette when the button is clicked
document.getElementById("generateButton").addEventListener("click", function () {
    generatePalette();
});

function generatePalette() {
    const colorScheme = document.getElementById("colorScheme").value;
    const colorPalette = generateColorPalette(colorScheme);

    const paletteList = document.getElementById("colorPaletteList");

    // Create a new palette container
    const paletteContainer = document.createElement("div");
    paletteContainer.classList.add("palette");

    // Append color squares to the palette container
    colorPalette.forEach((color) => {
        const colorEntry = createColorEntry(color);
        paletteContainer.appendChild(colorEntry);
    });

    // Append the palette container to the palette list
    paletteList.appendChild(paletteContainer);
}

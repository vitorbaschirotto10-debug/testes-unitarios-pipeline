const textoUtils = require ("../src/textoUtils")
const utils = new textoUtils();

test ("Inverter o texto", () => {
    expect(utils.inverter("Olá Mundo!")).toBe("!odnuM álO");
});
/**
 * Deixa a primeira letra de uma palavra em maíuscula
 * @param string exemplo
 * @returns Exemplo
 */
const capitalizeFirstLetter = (string: string) => {
    return string[0].toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;
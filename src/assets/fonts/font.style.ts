import { createGlobalStyle } from "styled-components";
import Fonts from "./index";

const LocalFontsStyle = createGlobalStyle`
/** Heading **/
@font-face {
    font-family: 'Alatsi';
    src: local('Alatsi'),
    url(${Fonts.Alatsi}) format('truetype');
}
@font-face {
    font-family: 'Arista';
    src: local('Arista'),
    url(${Fonts.Arista}) format('truetype');
}
@font-face {
    font-family: 'Baloo';
    src: local('Baloo'),
    url(${Fonts.Baloo}) format('truetype');
}
@font-face {
    font-family: 'Fredoka';
    src: local('Fredoka'),
    url(${Fonts.Fredoka}) format('opentype');
}
@font-face {
    font-family: 'League';
    src: local('League'),
    url(${Fonts.League}) format('opentype');
}
@font-face {
    font-family: 'TiltNeon';
    src: local('TiltNeon'),
    url(${Fonts.TiltNeon}) format('truetype');
}


@font-face {
    font-family: 'Digi';
    src: local('Digi'),
    url(${Fonts.Digi}) format('truetype');
}
@font-face {
    font-family: 'Drag';
    src: local('Drag'),
    url(${Fonts.Drag}) format('opentype');
}
@font-face {
    font-family: 'Antipasto';
    src: local('Antipasto'),
    url(${Fonts.Antipasto}) format('truetype');
}
@font-face {
    font-family: 'Changa';
    src: local('Changa'),
    url(${Fonts.Changa}) format('truetype');
}
@font-face {
    font-family: 'ColorTube';
    src: local('ColorTube'),
    url(${Fonts.ColorTube}) format('opentype');
}
@font-face {
    font-family: 'Comfortaa';
    src: local('Comfortaa'),
    url(${Fonts.Comfortaa}) format('truetype');
}
@font-face {
    font-family: 'Concert';
    src: local('Concert'),
    url(${Fonts.Concert}) format('truetype');
}
@font-face {
    font-family: 'Diavlo';
    src: local('Diavlo'),
    url(${Fonts.Diavlo}) format('opentype');
}
@font-face {
    font-family: 'Expansiva';
    src: local('Expansiva'),
    url(${Fonts.Expansiva}) format('opentype');
}
@font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
    url(${Fonts.Gilroy}) format('opentype');
}
@font-face {
    font-family: 'Graviton';
    src: local('Graviton'),
    url(${Fonts.Graviton}) format('opentype');
}
@font-face {
    font-family: 'Independent';
    src: local('Independent'),
    url(${Fonts.Independent}) format('truetype');
}
@font-face {
    font-family: 'Iceland';
    src: local('Iceland'),
    url(${Fonts.Iceland}) format('truetype');
}
@font-face {
    font-family: 'Iconic';
    src: local('Iconic'),
    url(${Fonts.Iconic}) format('truetype');
}
@font-face {
    font-family: 'Minstrel';
    src: local('Minstrel'),
    url(${Fonts.Minstrel}) format('truetype');
}
@font-face {
    font-family: 'Multicolor';
    src: local('Multicolor'),
    url(${Fonts.Multicolor}) format('opentype');
}
@font-face {
    font-family: 'Prototype';
    src: local('Prototype'),
    url(${Fonts.Prototype}) format('truetype');
}
@font-face {
    font-family: 'Quantico';
    src: local('Quantico'),
    url(${Fonts.Quantico}) format('truetype');
}
@font-face {
    font-family: 'Remini';
    src: local('Remini'),
    url(${Fonts.Remini}) format('opentype');
}
@font-face {
    font-family: 'Typo';
    src: local('Typo'),
    url(${Fonts.Typo}) format('opentype');
}
@font-face {
    font-family: 'VDS';
    src: local('VDS'),
    url(${Fonts.VDS}) format('truetype');
}
@font-face {
    font-family: 'Olney';
    src: local('Olney'),
    url(${Fonts.Olney}) format('opentype');
}
@font-face {
    font-family: 'Primer';
    src: local('Primer'),
    url(${Fonts.Primer}) format('opentype');
}
@font-face {
    font-family: 'YourGone';
    src: local('YourGone'),
    url(${Fonts.YourGone}) format('opentype');
}

/**Bold **/
@font-face {
    font-family: 'Akira';
    src: local('Akira'),
    url(${Fonts.Akira}) format('opentype');
}
@font-face {
    font-family: 'Break';
    src: local('Break'),
    url(${Fonts.Break}) format('truetype');
}
@font-face {
    font-family: 'Crystal';
    src: local('Crystal'),
    url(${Fonts.Crystal}) format('truetype');
}
@font-face {
    font-family: 'Designer';
    src: local('Designer'),
    url(${Fonts.Designer}) format('opentype');
}
@font-face {
    font-family: 'FerroRosso';
    src: local('FerroRosso'),
    url(${Fonts.FerroRosso}) format('truetype');
}
@font-face {
    font-family: 'Freshman';
    src: local('Freshman'),
    url(${Fonts.Freshman}) format('truetype');
}
@font-face {
    font-family: 'LemonMilk';
    src: local('LemonMilk'),
    url(${Fonts.LemonMilk}) format('opentype');
}
@font-face {
    font-family: 'Pavlet';
    src: local('Pavlet'),
    url(${Fonts.Pavlet}) format('truetype');
}
@font-face {
    font-family: 'Summer';
    src: local('Summer'),
    url(${Fonts.Summer}) format('truetype');
}
@font-face {
    font-family: 'TelefonBlack';
    src: local('TelefonBlack'),
    url(${Fonts.TelefonBlack}) format('woff');
}
@font-face {
    font-family: 'TelefonBold';
    src: local('TelefonBold'),
    url(${Fonts.TelefonBold}) format('woff');
}
@font-face {
    font-family: 'Vampire';
    src: local('Vampire'),
    url(${Fonts.Vampire}) format('opentype');
}
@font-face {
    font-family: 'Drius';
    src: local('Drius'),
    url(${Fonts.Drius}) format('truetype');
}
@font-face {
    font-family: 'Ethnocentric';
    src: local('Ethnocentric'),
    url(${Fonts.Ethnocentric}) format('opentype');
}
@font-face {
    font-family: 'Junegull';
    src: local('Junegull'),
    url(${Fonts.Junegull}) format('opentype');
}


/** Code **/
@font-face {
    font-family: 'Anonymous';
    src: local('Anonymous'),
    url(${Fonts.Anonymous}) format('truetype');
}
@font-face {
    font-family: 'Cascadia';
    src: local('Cascadia'),
    url(${Fonts.Cascadia}) format('woff2');
}
@font-face {
    font-family: 'Consolas';
    src: local('Consolas'),
    url(${Fonts.Consolas}) format('woff');
}
@font-face {
    font-family: 'CourierPrime';
    src: local('CourierPrime'),
    url(${Fonts.CourierPrime}) format('woff');
}
@font-face {
    font-family: 'Cousine';
    src: local('Cousine'),
    url(${Fonts.Cousine}) format('truetype');
}
@font-face {
    font-family: 'Dank';
    src: local('Dank'),
    url(${Fonts.Dank}) format('opentype');
}
@font-face {
    font-family: 'DejaVu';
    src: local('DejaVu'),
    url(${Fonts.DejaVu}) format('truetype');
}
@font-face {
    font-family: 'Dina';
    src: local('Dina'),
    url(${Fonts.Dina}) format('truetype');
}
@font-face {
    font-family: 'FiraCode';
    src: local('FiraCode'),
    url(${Fonts.FiraCode}) format('truetype');
}
@font-face {
    font-family: 'Gintroni';
    src: local('Gintroni'),
    url(${Fonts.Gintroni}) format('truetype');
}
@font-face {
    font-family: 'Hexaframe';
    src: local('Hexaframe'),
    url(${Fonts.Hexaframe}) format('opentype');
}
@font-face {
    font-family: 'IBMPlex';
    src: local('IBMPlex'),
    url(${Fonts.IBMPlex}) format('truetype');
}
@font-face {
    font-family: 'Inconsolata';
    src: local('Inconsolata'),
    url(${Fonts.Inconsolata}) format('truetype');
}
@font-face {
    font-family: 'Input';
    src: local('Input'),
    url(${Fonts.Input}) format('truetype');
}
@font-face {
    font-family: 'JetBrains';
    src: local('JetBrains'),
    url(${Fonts.JetBrains}) format('truetype');
}
@font-face {
    font-family: 'Julia';
    src: local('Julia'),
    url(${Fonts.Julia}) format('woff2');
}
@font-face {
    font-family: 'Ligconsolata';
    src: local('Ligconsolata'),
    url(${Fonts.Ligconsolata}) format('truetype');
}
@font-face {
    font-family: 'Menlo';
    src: local('Menlo'),
    url(${Fonts.Menlo}) format('truetype');
}
@font-face {
    font-family: 'Monolisa';
    src: local('Monolisa'),
    url(${Fonts.Monolisa}) format('opentype');
}
@font-face {
    font-family: 'Proggy';
    src: local('Proggy'),
    url(${Fonts.Proggy}) format('opentype');
}
@font-face {
    font-family: 'SourceCode';
    src: local('Alatsi'),
    url(${Fonts.SourceCode}) format('truetype');
}
@font-face {
    font-family: 'Sudo';
    src: local('Sudo'),
    url(${Fonts.Sudo}) format('woff');
}
@font-face {
    font-family: 'Terminus';
    src: local('Terminus'),
    url(${Fonts.Terminus}) format('truetype');
}
@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu'),
    url(${Fonts.Ubuntu}) format('truetype');
}
@font-face {
    font-family: 'Hack';
    src: local('Hack'),
    url(${Fonts.Hack}) format('woff');
}
`;
export default LocalFontsStyle;

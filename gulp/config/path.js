import * as nodePath from 'path';
const rootPath = nodePath.basename(nodePath.resolve());

const srcPath = './src';
const distPath = './dist';

export const path = {
    build: {
        html:   distPath,
        css:    `${distPath}/css/`,
        js:     `${distPath}/scripts/`,
        images: `${distPath}/images/`,
        fonts:  `${distPath}/fonts/`
    },
    src: {
        html:   `${srcPath}/pages/*.pug`,
        scss:   `${srcPath}/styles/styles.scss`,
        js:     `${srcPath}/scripts/script.js`,
        images: `${srcPath}/assets/images/**/*.{jpg,jpeg,png,gif,ico,webp,svg}`,
        icons:  `${srcPath}/assets/iconsfont/*.{eot,woff,woff2,ttf,svg}`,
        fonts:  `${srcPath}/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`
    },
    watch: {
        html:   `${srcPath}/**/*.pug`,
        scss:   `${srcPath}/**/*.scss`,
        js:     `${srcPath}/**/*.js`,
        images: `${srcPath}/assets/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp,svg}`,
        icons:  `${srcPath}/assets/iconsfont/**/*.{eot,woff,woff2,ttf,svg}`,
        fonts:  `${srcPath}/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`
    },
    clean: distPath
}
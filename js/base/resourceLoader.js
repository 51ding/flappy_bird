/*静态资源加载器*/
import {resources} from "./resources.js";

class ResourceLoader {
    constructor() {
        let source ={};
        Object.entries(resources).forEach(r => {
            let image = new Image();
            image.src = r[1];
            let key=r[0];
            source[key] = image;
        })

        this.source = source;
    }
}

export {ResourceLoader};
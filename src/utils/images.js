const loadImage = src => {
    new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = err => reject(err);
    });

}

export default loadImage
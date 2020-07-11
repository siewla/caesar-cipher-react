//ROT-13 - rotate by 13 places
//Input	    ABCDEFGHIJKLMNOPQRSTUVWXYZ
//Output	NOPQRSTUVWXYZABCDEFGHIJKLM

export default function rot13 (str) {
    str = str.toUpperCase();
    let solved = '';
    for (let i = 0; i < str.length; i++){
        let asciiCode = str[i].charCodeAt();
        if (asciiCode >= 65 && asciiCode <= 77){
            solved += String.fromCharCode(asciiCode +13);
        } else if (asciiCode >= 78 && asciiCode <=90){
            solved += String.fromCharCode(asciiCode -13);
        } else {
            solved += str[i];
        }
    }
    return solved;
}


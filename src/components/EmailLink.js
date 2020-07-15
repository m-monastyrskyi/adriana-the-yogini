import React from 'react';

const EmailLink = () => {

    const coded = "uNjj3@W2aoW4WJuNV3Po4o.U3G";
    const key = "lzXAWq2fVms5oQrZxHSgp09nLcjDh6te7YBGCK3bakdRyPT1i4FUIEuwJN8OvM";
    const shift = coded.length;
    let link = "";
    let ltr = null;

// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/

    for (let i = 0; i < coded.length; i++) {
        if (key.indexOf(coded.charAt(i)) === -1) {
            ltr = coded.charAt(i)
            link += (ltr)
        } else {
            ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
            link += (key.charAt(ltr))
        }
    }

    const style = {
        color: "#cccccc",
        textDecoration: "none"
    }

    return <a style={style}  href={`mailto:${link}`}>{link}</a>
};

export default EmailLink;
const qrcode = require('qrcode-terminal');

module.exports = async (qr) => {
    qrcode.generate(qr, { small: true });
}
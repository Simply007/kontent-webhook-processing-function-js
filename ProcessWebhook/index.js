const crypto = require('crypto');

const isValidSignature = (req, secret) => {
    if(!req || !secret){
        return false;
    }
    const givenSignature = req.headers['x-kc-signature'];
    const computedSignature = crypto.createHmac('sha256', secret)
        .update(req.rawBody)
        .digest();

    return crypto.timingSafeEqual(Buffer.from(givenSignature, 'base64'), computedSignature);
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (!isValidSignature(req, process.env['KONTENT_WEBHOOK_SECRET'])) {
        context.log('Signature was invalid');
        context.res = {
            status: 503,
            body: "Signature was invalid"
        };
    }

    // Adjust the webhook processing logic
    console.log(`Webhook received with content:`);
    console.log(JSON.stringify(req.body, undefined, 2));
    return req.body;
};
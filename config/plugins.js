module.exports = ({ env }) => ({
    // ...
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
            defaultFrom: 'saikrishna.carnati@gmail.com',
            defaultReplyTo: 'saikrishna.carnati@gmail.com',
            testAddress: 'saikrishna.carnati@gmail.com',
        },
    },
    // ...
});
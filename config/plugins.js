module.exports = ({ env }) => ({
    /* // ...
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
    // ... */
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'),
                port: env('SMTP_PORT', 587),
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
                // ... any custom nodemailer options
            },
            settings: {
                defaultFrom: 'saikrishna.carnati@gmail.com',
                defaultReplyTo: 'saikrishna.carnati@gmail.com',
            },
        },
    },
});
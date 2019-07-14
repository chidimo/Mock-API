const userSchema = {
    type: 'object',
    properties: {
        users: {
            type: 'array',
            minItems: 1,
            maxItems: 15,
            items: {
                type: 'object',
                properties: {
                    id: { type: 'integer', unique: true, minimum: 1 },
                    name: { type: 'string', faker: 'name.findName' },
                    email: { type: 'string', format: 'email', faker: 'internet.email' },
                    twitter: {
                        type: 'string',
                        chance: {
                            twitter: {},
                        },
                    },
                    birthday: {
                        type: 'date-time',
                        chance: {
                            birthday: { string: true, type: 'child' },
                        },
                    },
                },
                required: ['id', 'name', 'email', 'twitter', 'birthday'],
            },
        },
    },
    required: ['users'],
};

export default userSchema;

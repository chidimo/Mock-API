const accountsSchema = {
    type: 'object',
    properties: {
        accounts: {
            type: 'array',
            minItems: 1,
            maxItems: 15,
            items: {
                type: 'object',
                properties: {
                    id: { type: 'integer', unique: true, minimum: 1 },
                    accountnumber: { type: 'integer', minimum: 1000000 },
                    balance: { type: 'number', minimum: 0, balance: 1000000 },
                    bank: {
                        type: 'string',
                        chance: {
                            word: { syllables: 2 },
                        },
                    },
                },
                required: ['id', 'bank', 'accountnumber', 'balance'],
            },
        },
    },
    required: ['accounts'],
};

export default accountsSchema;

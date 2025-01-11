const featuredProducts = [
    {
        productId: 31,
        productImage: 'https://uccb2475301bfeefa2618d9fe00a.previews.dropboxusercontent.com/p/thumb/ACgJzeyXQ2ELvaIxOTzKsd9xlRX0DqT8MU7qmZK_2STbivW7pcP_RkMNNbLYEAIQcHf0N9P2i9qoJCh6yDcqRJSOQR8HVapbmJinNSpyZfj1gGzVi2aE5gsGouPE9fFO4YIP5VrxoU56uILqXT35iTyJjwV3_akhi4tCgviEx9EXV4IJIkcodySFv_bqYANugRf2R9bOzrFIUmblsZUgYeVIDhio8hBhFDMSzmggAlxQTxnC9a7IydILRW4iHsL3TXOCCTZVzTcixK1VXYPWNtT03cJTYDzSWeNiWxbst-yhiZvRj8-FPToCRovAHNnBAxrOmsMDlYJ7r2bInHM8JaD9_2PrLUAELbCeiXm7Xs6d5A/p.png',
        productName: 'Taz krem santi | whipped cream',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 23,
        productImage: 'https://uc3bce5d59f8d268854a6f602879.previews.dropboxusercontent.com/p/thumb/ACgfvcBnN_kjs2W8GbIrC_Po9QxhUA0lH_RZ3Jb1tX6b5pC5iLzeUwEWeu5HN0e1989ku3ZyQMRkqLeQOeYqwI7KHwxFQFe5OGy2s_EvQKcyxtD9qe-r7nbw6TMv4hG_tz541XdJhe1R8kZ96SRQVdMxvgQQF-y1Bc25Vpkv-snB7TNK40SZv1fUioxa9JqNPPSmHCjcbR0__VkV6j7AKn-vf5wfST_NDg_Ct5UyWcImBfLaL7R3A5KZkAb3AKZDhyUC98qj6NLR53cX_7zJcAuwDuY2ypcOqyAKZpxVgxdujoUtFXjIkaZPkygdqTtKneglSX8fNezBD3KvQ-vDqWaTuBU73FAm2Jp7hnUc4ide8A/p.png',
        productName: 'Puratos - Satin chocolate cream cake mix',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 11,
        productImage: 'https://uc3d82da76fb235f32ec88ccc4b9.previews.dropboxusercontent.com/p/thumb/ACjsvnXgo2UYwFtBah34XDsw9bX57mzqL177Eh034Aafisxuc0z5TbJNqI3CdZwGXelMuLkojjyj7tn9fKpVHyHjq5wBlTHDg7Eeae5PQctf1GxHcY5GVHusu4eEpnY6_XpaCcAk4FayViCg_3ZGKFzywzBBGt6_DEztDH56RNAyLrOrhzou1QZnFD-fQa36ko81_t5XFKaArwY48QxmlQsbRDLPzSlznILPTAGgihMwpsVQwzxQ-OwTAaaTMTS6jl5QTpwsLnWA603YvdIVipVMWa5376KHBP_a8Y7lXNWNyhtBUWZPLceEYRPQFOma3EwH-zlZF8WH-3gYVFcP4woGndKu57waAd7BUniT57CGgw/p.png',
        productName: 'KataKit - Chocolate Lee Wt. 4KG',
        productAvailability: 4,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 2,
        productImage: 'https://uc04520fa178a125a68b68d59abf.previews.dropboxusercontent.com/p/thumb/ACg4Qw7r7fn8yWRhjI7jKcpsO3IWLRmyV3GEq88aEgqx-jTAiaUYpB9KzKoDX7tEmsEZKGTfmceIx2F5BxH_MbFvdZNWfaihIWZrIHm0oMEYRGQPHddwRZ3URymKjo7gJWxaemRKAGci8unNJt4OQjTVDbxZk28SOQUNCLb82qPET4DAAmRMiTLvmxYlQqxM486lAXSCNGxrcSAO8q8w3FHtgANoujX9cFidL96aEHz-PANVG8y-WNC_uZh5Yva-aEdxqE7rt-BTJjkNVeGtMj1F7cK-ra4E-Ab2EtV-GTR_9FVRWUWs8b5HqGxGl9gcoFg4hq3jCe9NlAvQpZ-MT0ZGtk_I4oBkwZQLaDbC_gn_yA/p.png',
        productName: 'Blue Bead - Chocolate flavored toping',
        productAvailability: 50,
        productDescription: {
            title: 'Test Product Description',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    },

    {
        productId: 3,
        productImage: 'https://uce7aa07f9d50689a57f2e55935b.previews.dropboxusercontent.com/p/thumb/ACh-tHGNQr6-sNySMN2jf8z0S_cuoyneaPPjLvS8kegf1Ue3dFr0Zlnop3_SbPwILokUbbqKBD5RGWJPBYoNwvdB-cCVnsX4RczAnzjBuqbXwdjSTi4oWwYZlN4aOI46gUHfUqHhHlnf6wF8BiZrhf6LWlYSy_4OgGJXbz4C3oirFVrZTggsG-yVoVmmDgHIOpklOQQbZsIOyw0IFZInEg9jkphLBjzDbTmZsx4pJFXYnDXA716lbJoUMcKdKDsWE35DO0ecz6MAIQVAV1AkwnIrWjm4AI9SO-ry2e4NsTZn59DUUraYhBhq76fEqifB8OQFjfcu9CnxRGOePtMS9bDrPvZhF-8giKcirApmLZa0Bw/p.png',
        productName: 'Blue Bead - Cold Glaze caramel flavored',
        productAvailability: 50,
        productDescription: {
            title: 'Blue Bead - Cold Glaze caramel flavored',
            content: 'This is a test product description.',
            price: '950 ETB',
        }
    }
];

export default featuredProducts;
const adonForms = {
    name: "Adon Product Forms",
    data() {
        return {
            productsAdonHold: [
                {
                    name: "Ad On Hold Silver Premium",
                    price: "$450.50",
                    id: 1
                },
                {
                    name: "Ad On Hold Silver Package",
                    price: "$1036.00",
                    id: 3
                },
                {
                    name: "Ad On Hold Silver Plus",
                    price: "$1562.00",
                    id: 5
                },
                {
                    name: "Ad On Hold Gold",
                    price: "$2075.00",
                    id: 7
                },
                {
                    name: "Ad On Hold Gold Plus ",
                    price: "$2075.00",
                    id: 9
                },
                {
                    name: "Ad On Hold Gold Premium",
                    price: "$4020.00",
                    id: 11
                },
                {
                    name: "Ad On Hold Minor Change",
                    price: "$270.00",
                    id: 12
                },
                {
                    name: "Ad On Hold Message Revamp",
                    price: "$540.00",
                    id: 13
                }
            ],
            productsAdonDigital: [
                {
                    name: "Ad On Digital Video Social",
                    price: "$1365.00",
                    id: 2
                },
                {
                    name: "Ad On Digital Video Plus",
                    price: "$2727.00",
                    id: 4
                },
                {
                    name: "Ad On Digital Video Premium",
                    price: "$4364.50",
                    id: 6
                },
                {
                    name: "Video Minor Change",
                    price: "$543.00",
                    id: 8
                },
                {
                    name: "Video Revamp",
                    price: "$1635.00",
                    id: 10
                }
            ],
            productsAdonHoldOthers: [
                {
                    name: "Ad On Hold External Player",
                    price: "$93.00",
                    id: 14
                }
            ]
        }
    },
    methods: {
        sample(){
            // return productsAdonHold
            console.log("productsAdonHold");
        },
        getTotal(){
            const adonHSPremium = document.getElementById('adon-hs-premium').value;
            const adonHSPackage = document.getElementById('adon-hs-package').value;
            const adonHSPlus = document.getElementById('adon-hs-plus').value;
            const adonHGold = document.getElementById('adon-h-gold').value;
            const adonHGlodPlus = document.getElementById('adon-h-gold-plus').value;
            const adonHGlodPremium = document.getElementById('adon-h-gold-premium').value;
            const adonHMinorChange = document.getElementById('adon-h-minor-change').value;
            const adonHMessageRevamp = document.getElementById('adon-h-message-revamp').value;
        }
    }
}

Vue.createApp(adonForms).mount('#generate-pdf')

// const adonfroms = {
//     el: '#generate-pdf',
//     data() {
//         return {
//             productsAdonHold: [
//                 {
//                     name: "Ad On Hold Silver Premium",
//                     price: "$450.50",
//                     id: 1
//                 },
//                 {
//                     name: "Ad On Hold Silver Package",
//                     price: "$1036.00",
//                     id: 3
//                 },
//                 {
//                     name: "Ad On Hold Silver Plus",
//                     price: "$1562.00",
//                     id: 5
//                 },
//                 {
//                     name: "Ad On Hold Gold",
//                     price: "$2075.00",
//                     id: 7
//                 },
//                 {
//                     name: "Ad On Hold Gold Plus ",
//                     price: "$2075.00",
//                     id: 9
//                 },
//                 {
//                     name: "Ad On Hold Gold Premium",
//                     price: "$4020.00",
//                     id: 11
//                 },
//                 {
//                     name: "Ad On Hold Minor Change",
//                     price: "$270.00",
//                     id: 12
//                 },
//                 {
//                     name: "Ad On Hold Message Revamp",
//                     price: "$540.00",
//                     id: 13
//                 }
//             ],
//             productsAdonDigital: [
//                 {
//                     name: "Ad On Digital Video Social",
//                     price: "$1365.00",
//                     id: 2
//                 },
//                 {
//                     name: "Ad On Digital Video Plus",
//                     price: "$2727.00",
//                     id: 4
//                 },
//                 {
//                     name: "Ad On Digital Video Premium",
//                     price: "$4364.50",
//                     id: 6
//                 },
//                 {
//                     name: "Video Minor Change",
//                     price: "$543.00",
//                     id: 8
//                 },
//                 {
//                     name: "Video Revamp",
//                     price: "$1635.00",
//                     id: 10
//                 }
//             ],
//             productsAdonHoldOthers: [
//                 {
//                     name: "Ad On Hold External Player",
//                     price: "$93.00",
//                     id: 14
//                 }
//             ]
//         }
//     },
//     mounted() {
//         this.getSample();
//     },
//     methods: {
//         getSample() {
//             const r = this.productsAdonHold;
//             console.log(r);
//       }
//     }
//   }

//   Vue.createApp(adonfroms).mount('#generate-pdf')
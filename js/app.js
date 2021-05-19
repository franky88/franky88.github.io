const app = Vue.createApp({
    data() {
        return {
            myApps: [
                {
                    id: 1,
                    name: "Portable Illustrator",
                    link: "http://bit.ly/portableillustrator",
                    isShow: true
                }
            ],
            myTools: [
                {
                    id: 1,
                    name: "AdOn Signature Generator",
                    link: "/adon-signature",
                    isShow: true
                }
            ]
        }
    }
});
app.mount("#root")
const app = Vue.createApp({
    data() {
        return {
            myApps: [
                {
                    name: "Portable Illustrator",
                    link: "http://bit.ly/portableillustrator",
                    status: true
                }
            ],
            myTools: [
                {
                    name: "AdOn Signature Generator",
                    link: "/adon-signature",
                    status: true
                }
            ]
        }
    }
});
app.mount("#root")
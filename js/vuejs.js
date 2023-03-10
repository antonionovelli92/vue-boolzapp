console.log('Vue ok', Vue);

const app = Vue.createApp({
    name: 'Boolzapp',
    data() {
        return {
            newMessage: '',
            searchChat: '',
            currentIndex: 0,
            user: {
                name: 'Antonella',
                avatar: '_io'
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                    ],
                },
            ]

        }
    },
    computed: {
        currentContact() {
            return this.contacts[this.currentIndex];
        },
        currentChat() {
            return this.currentContact.messages;
        },


    },

    methods: {
        buildAvatarUrl(avatar) {
            return `img/avatar${avatar}.jpg`;
        },
        setCurrentIndex(index) {
            return this.currentIndex = index;
        },
        getCurrentMoment() {
            return dtime.now().setLocale('it').toLocalString(dtime.DATETIME_SHORT_WITH_SECONDS);
        },

        sendMessage() {
            if (!this.newMessage) return;
            const newMessage = {
                status: 'sent',
                date: '12:00',
                text: this.newMessage
            };
            this.contacts[this.currentIndex].messages.push(newMessage);
            this.newMessage = '';

            setTimeout(() => {
                const newMessage = {
                    status: 'received',
                    date: '13:00',
                    text: 'Ok.'
                };
                this.contacts[this.currentIndex].messages.push(newMessage);

            }, 1000)
        },
        filtredChat() {
            const searchWord = this.searchChat.toLowerCase();
            return this.contacts = this.contacts.filter(contact => contact.visible = contact.name.toLowerCase().includes(this.searchChat.toLowerCase())

            )
        }
    }
});

app.mount('#root');
// // return contact.visible = contact.name.toLowerCase().includes(this.searchChat.toLowerCase())
// //             })
// const filtred = this.contacts.map((contact) => {
//     return contact.visible = contact.name.toLowerCase().includes(this.searchChat.toLowerCase())
// })

// filtredChat() {
//     this.contacts = this.contacts.map(contact => {
//         contact.visible = contact.name.toLowerCase().includes(this.searchChat.toLowerCase())
//         return contact
//     })
// }

// filtredChat() {
//     this.contacts.forEach(contact => {
//         this.contacts.forEach(contact => {
//             contact.visible = contact.name.toLowerCase().includes(this.searchChat.toLowerCase())
//         })
//     });
// }
//     }

// //  this.contacts = this.contacts.map(contact => {
// this.contact.visible = this.contact.name.toLowerCase().includes(this.searchChat.toLowerCase())
// return contact
//             })
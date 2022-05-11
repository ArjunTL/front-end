const app = Vue.createApp(
    {
       // template :'<h2> i am the template</h2>'
       data(){
           return{
               title:' The Final Empire',
               author:'brandon',
               age:45
           }
       },
       methods:
       {
        changeTitle(title)
           {
               this.title =title
           }
       }
    }
)

app.mount('#app')
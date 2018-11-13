import Component from '@ember/component';

export default Component.extend({
    title: "Foods!",
    customTitle: "teste",

    actions:{
        showTitle(){ //olhar o all-foods.hbs
            alert(this.get("title"));
            this.set("title", "Foods alterado!");
            this.set("newTitle", "New Foods!")
        },
        showCustomTitle(title){
            this.set("title", title);
            this.set("customTitle", title);
            alert("Changed the title: " + this.get("title"));
        }
    }

});

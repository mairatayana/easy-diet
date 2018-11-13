import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    foodEdit: Ember.inject.service(),
    title: "Minha lista de alimentos",
    options: [1,2,3],
    obj: {
        item:"A"
    },
    testeInput: "Maira",
    enabledFood: true,
    textAreaTest: "Escrevendo um texto",
 
    teste: "Oi",

    actions:{
        setEnableFood(){
            this.toggleProperty("enabledFood");
            alert("Trocou o checkbox se vier do controller");
            //this.get("foodEdit").add("Teste"); pode usar as propriedade dentro de um action
           
        },
        addFood(food){
            this.get("foodEdit").add(food);
        },
        remover(food){
            this.get('foodEdit').remove(food);
        }
    }

});

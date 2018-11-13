import Service from '@ember/service';

export default Service.extend({
    foods: [],
    
    add(food){
        this.get('foods').pushObject(food);
    },

    remove(food){
        this.get('foods').removeObject(food);
    }

});

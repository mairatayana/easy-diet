import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

    model(){
        return this.get('store').findAll('food');
        /*return RSVP.hash({
            foods: [{
                "id": 1,
                "name": "Alface",
                "energy": 10,
                "creationDate": "2018-11-08T12:55:09.381Z",
                "nutritionFacts": [{
                    carboidratos: 10,
                    gordurasTotais: 0,
                    sodio: 1
                }]
            },
            {
                "id": 2,
                "name": "Alface2",
                "energy": 10,
                "creationDate": "2018-11-08T12:55:09.381Z",
                "nutritionFacts": [{
                    carboidratos: 10,
                    gordurasTotais: 0,
                    sodio: 1
                }]
            }]
            // poderia colocar , e abrir para outro atributo
        });*/
    }

});

import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    // queryParams: {

    // },


    model(params) { 
        return this.get('store').findRecord('profile', params.profile_id) //store já esta dentro ember
       // return RSVP.hash({ //com RSVP, para poder chamar mais de um
         //   foods: this.get('store').findAll('food')
         //   profile: this.get('store').findRecord('profile', params.profile_id)
        //})
    }// tem no route

    // },

    // setupController(controller, model){ // tem no route
    //     // roda antes do controller do fo profile (se não tiver, o ember cria automaticamente)
    //     // aqui pode usar o controller do application, pois ele é a casca do projeto e sempre roda primeiro. application não tem model.
        
    // }

});

// pode criar funções para ser usado no export default Route.extend
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://5be585d848c1280013fc3d66.mockapi.io',

    

    urlForFindAll(modelName, snapshot){
        return `${this.get('host')}/alimentos`;
    }

});

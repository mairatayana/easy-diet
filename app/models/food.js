import DS from 'ember-data';

export default DS.Model.extend({
    // não precisa colocar id, por padrão o ember considera que todo model tem uma propriedade 'id'
    name: DS.attr('string'),
    nutritionFacts: DS.attr({
        defaultValue(){
            return []; //se quiser que seja um tipo objeto, colocar {}
        }
    }),
    energy: DS.attr('number'),
    creationDate: DS.attr('date'),
    enabledNutritionFacts: DS.attr('boolean', {defaultValue: false})

});

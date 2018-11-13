import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // sempre usar o cli para criar os routes, linha de comando!
  this.route('profile', {path: '/:profile_id'}, function() {
    this.route('new');
  });
  // da para criar rotas aninhadas:
  // this.route('profile', function(){
  //this.route('new');
  //this.route('profile', ':/user_id')//convenção do ember
  //})
  //this.route('about', { path: "sobre"}); faz isso para alterar o nome da url
  this.route('about');
  this.route('login');
  this.route('foods'); //{path: '/:food_id'}pode usar qualquer parâmetro de food para buscar, o correto é o id, mas pode ser outro
});

export default Router;

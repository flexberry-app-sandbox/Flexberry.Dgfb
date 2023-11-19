import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dgfb-договор-l');
  this.route('i-i-s-dgfb-договор-e',
  { path: 'i-i-s-dgfb-договор-e/:id' });
  this.route('i-i-s-dgfb-договор-e.new',
  { path: 'i-i-s-dgfb-договор-e/new' });
  this.route('i-i-s-dgfb-должности-l');
  this.route('i-i-s-dgfb-должности-e',
  { path: 'i-i-s-dgfb-должности-e/:id' });
  this.route('i-i-s-dgfb-должности-e.new',
  { path: 'i-i-s-dgfb-должности-e/new' });
  this.route('i-i-s-dgfb-журнал-учета-l');
  this.route('i-i-s-dgfb-журнал-учета-e',
  { path: 'i-i-s-dgfb-журнал-учета-e/:id' });
  this.route('i-i-s-dgfb-журнал-учета-e.new',
  { path: 'i-i-s-dgfb-журнал-учета-e/new' });
  this.route('i-i-s-dgfb-контрагент-l');
  this.route('i-i-s-dgfb-контрагент-e',
  { path: 'i-i-s-dgfb-контрагент-e/:id' });
  this.route('i-i-s-dgfb-контрагент-e.new',
  { path: 'i-i-s-dgfb-контрагент-e/new' });
  this.route('i-i-s-dgfb-организация-l');
  this.route('i-i-s-dgfb-организация-e',
  { path: 'i-i-s-dgfb-организация-e/:id' });
  this.route('i-i-s-dgfb-организация-e.new',
  { path: 'i-i-s-dgfb-организация-e/new' });
  this.route('i-i-s-dgfb-персонал-l');
  this.route('i-i-s-dgfb-персонал-e',
  { path: 'i-i-s-dgfb-персонал-e/:id' });
  this.route('i-i-s-dgfb-персонал-e.new',
  { path: 'i-i-s-dgfb-персонал-e/new' });
  this.route('i-i-s-dgfb-путевой-лист-l');
  this.route('i-i-s-dgfb-путевой-лист-e',
  { path: 'i-i-s-dgfb-путевой-лист-e/:id' });
  this.route('i-i-s-dgfb-путевой-лист-e.new',
  { path: 'i-i-s-dgfb-путевой-лист-e/new' });
  this.route('i-i-s-dgfb-рук-отд-лог-l');
  this.route('i-i-s-dgfb-рук-отд-лог-e',
  { path: 'i-i-s-dgfb-рук-отд-лог-e/:id' });
  this.route('i-i-s-dgfb-рук-отд-лог-e.new',
  { path: 'i-i-s-dgfb-рук-отд-лог-e/new' });
  this.route('i-i-s-dgfb-трансп-ср-l');
  this.route('i-i-s-dgfb-трансп-ср-e',
  { path: 'i-i-s-dgfb-трансп-ср-e/:id' });
  this.route('i-i-s-dgfb-трансп-ср-e.new',
  { path: 'i-i-s-dgfb-трансп-ср-e/new' });
});

export default Router;

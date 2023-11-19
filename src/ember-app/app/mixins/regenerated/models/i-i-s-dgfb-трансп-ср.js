import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  госЗнак: DS.attr('string'),
  марка: DS.attr('string'),
  модель: DS.attr('string')
});

export let ValidationRules = {
  госЗнак: {
    descriptionKey: 'models.i-i-s-dgfb-трансп-ср.validations.госЗнак.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  марка: {
    descriptionKey: 'models.i-i-s-dgfb-трансп-ср.validations.марка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  модель: {
    descriptionKey: 'models.i-i-s-dgfb-трансп-ср.validations.модель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТранспСрE', 'i-i-s-dgfb-трансп-ср', {
    марка: attr('Марка', { index: 0 }),
    модель: attr('Модель', { index: 1 }),
    госЗнак: attr('Гос знак', { index: 2 })
  });

  modelClass.defineProjection('ТранспСрL', 'i-i-s-dgfb-трансп-ср', {
    марка: attr('Марка', { index: 0 }),
    модель: attr('Модель', { index: 1 }),
    госЗнак: attr('Гос знак', { index: 2 })
  });
};

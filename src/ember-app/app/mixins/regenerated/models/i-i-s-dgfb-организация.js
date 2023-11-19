import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  почта: DS.attr('string'),
  телефон: DS.attr('number'),
  юрАдерс: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-dgfb-организация.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-dgfb-организация.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-dgfb-организация.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  юрАдерс: {
    descriptionKey: 'models.i-i-s-dgfb-организация.validations.юрАдерс.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацияE', 'i-i-s-dgfb-организация', {
    наименование: attr('Наименование', { index: 0 }),
    юрАдерс: attr('Юр адерс', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    почта: attr('Почта', { index: 3 })
  });

  modelClass.defineProjection('ОрганизацияL', 'i-i-s-dgfb-организация', {
    наименование: attr('Наименование', { index: 0 }),
    юрАдерс: attr('Юр адерс', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    почта: attr('Почта', { index: 3 })
  });
};

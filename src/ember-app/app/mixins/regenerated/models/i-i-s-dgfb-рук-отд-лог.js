import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  примечания: DS.attr('string'),
  персонал: DS.belongsTo('i-i-s-dgfb-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  примечания: {
    descriptionKey: 'models.i-i-s-dgfb-рук-отд-лог.validations.примечания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-dgfb-рук-отд-лог.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РукОтдЛогE', 'i-i-s-dgfb-рук-отд-лог', {
    примечания: attr('Примечания', { index: 0 }),
    персонал: belongsTo('i-i-s-dgfb-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('РукОтдЛогL', 'i-i-s-dgfb-рук-отд-лог', {
    примечания: attr('Примечания', { index: 0 }),
    персонал: belongsTo('i-i-s-dgfb-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};

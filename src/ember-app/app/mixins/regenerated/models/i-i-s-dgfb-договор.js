import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаключ: DS.attr('date'),
  датаНачала: DS.attr('date'),
  датаОконч: DS.attr('date'),
  обязанПосред: DS.attr('string'),
  контрагент: DS.belongsTo('i-i-s-dgfb-контрагент', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-dgfb-организация', { inverse: null, async: false }),
  рукОтдЛог: DS.belongsTo('i-i-s-dgfb-рук-отд-лог', { inverse: null, async: false })
});

export let ValidationRules = {
  датаЗаключ: {
    descriptionKey: 'models.i-i-s-dgfb-договор.validations.датаЗаключ.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-dgfb-договор.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОконч: {
    descriptionKey: 'models.i-i-s-dgfb-договор.validations.датаОконч.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  обязанПосред: {
    descriptionKey: 'models.i-i-s-dgfb-договор.validations.обязанПосред.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-dgfb-договор.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-dgfb-договор.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рукОтдЛог: {
    descriptionKey: 'models.i-i-s-dgfb-договор.validations.рукОтдЛог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'i-i-s-dgfb-договор', {
    датаЗаключ: attr('Дата заключ', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОконч: attr('Дата оконч', { index: 2 }),
    обязанПосред: attr('Обязан посред', { index: 3 }),
    организация: belongsTo('i-i-s-dgfb-организация', 'Организация', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    рукОтдЛог: belongsTo('i-i-s-dgfb-рук-отд-лог', 'Рук отд лог', {
      примечания: attr('Примечания', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'примечания' }),
    контрагент: belongsTo('i-i-s-dgfb-контрагент', 'Контрагент', {
      организация: attr('Организация', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'организация' })
  });

  modelClass.defineProjection('ДоговорL', 'i-i-s-dgfb-договор', {
    датаЗаключ: attr('Дата заключ', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОконч: attr('Дата оконч', { index: 2 }),
    обязанПосред: attr('Обязан посред', { index: 3 }),
    организация: belongsTo('i-i-s-dgfb-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true }),
    рукОтдЛог: belongsTo('i-i-s-dgfb-рук-отд-лог', 'Примечания', {
      примечания: attr('Примечания', { index: 5 })
    }, { index: -1, hidden: true }),
    контрагент: belongsTo('i-i-s-dgfb-контрагент', 'Организация', {
      организация: attr('Организация', { index: 6 })
    }, { index: -1, hidden: true })
  });
};

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяВозвращ: DS.attr('date'),
  времяВыезда: DS.attr('date'),
  дата: DS.attr('date'),
  показСпидом: DS.attr('decimal'),
  примечания: DS.attr('string'),
  пробег: DS.attr('decimal'),
  фИО: DS.attr('string'),
  транспСр: DS.belongsTo('i-i-s-dgfb-трансп-ср', { inverse: null, async: false })
});

export let ValidationRules = {
  времяВозвращ: {
    descriptionKey: 'models.i-i-s-dgfb-журнал-учета.validations.времяВозвращ.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  времяВыезда: {
    descriptionKey: 'models.i-i-s-dgfb-журнал-учета.validations.времяВыезда.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-dgfb-журнал-учета.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  показСпидом: {
    descriptionKey: 'models.i-i-s-dgfb-журнал-учета.validations.показСпидом.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  примечания: {
    descriptionKey: 'models.i-i-s-dgfb-журнал-учета.validations.примечания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пробег: {
    descriptionKey: 'models.i-i-s-dgfb-журнал-учета.validations.пробег.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-dgfb-журнал-учета.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  транспСр: {
    descriptionKey: 'models.i-i-s-dgfb-журнал-учета.validations.транспСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖурналУчетаE', 'i-i-s-dgfb-журнал-учета', {
    дата: attr('Дата', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    времяВыезда: attr('Время выезда', { index: 2 }),
    времяВозвращ: attr('Время возвращ', { index: 3 }),
    показСпидом: attr('Показ спидом', { index: 4 }),
    пробег: attr('Пробег', { index: 5 }),
    примечания: attr('Примечания', { index: 6 }),
    транспСр: belongsTo('i-i-s-dgfb-трансп-ср', 'Трансп ср', {
      марка: attr('Марка', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'марка' })
  });

  modelClass.defineProjection('ЖурналУчетаL', 'i-i-s-dgfb-журнал-учета', {
    дата: attr('Дата', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    времяВыезда: attr('Время выезда', { index: 2 }),
    времяВозвращ: attr('Время возвращ', { index: 3 }),
    показСпидом: attr('Показ спидом', { index: 4 }),
    пробег: attr('Пробег', { index: 5 }),
    примечания: attr('Примечания', { index: 6 }),
    транспСр: belongsTo('i-i-s-dgfb-трансп-ср', 'Марка', {
      марка: attr('Марка', { index: 7 })
    }, { index: -1, hidden: true })
  });
};

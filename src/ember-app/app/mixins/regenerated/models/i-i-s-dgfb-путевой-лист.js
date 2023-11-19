import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выдатьТоплива: DS.attr('number'),
  датаВремя: DS.attr('date'),
  допущен: DS.attr('boolean'),
  маркаГСМ: DS.attr('string'),
  номер: DS.attr('number'),
  остатокГСМ: DS.attr('decimal'),
  пунктНазнач: DS.attr('string'),
  пунктОтправ: DS.attr('string'),
  расстояние: DS.attr('decimal'),
  персонал: DS.belongsTo('i-i-s-dgfb-персонал', { inverse: null, async: false }),
  транспСр: DS.belongsTo('i-i-s-dgfb-трансп-ср', { inverse: null, async: false })
});

export let ValidationRules = {
  выдатьТоплива: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.выдатьТоплива.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаВремя: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.датаВремя.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  допущен: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.допущен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  маркаГСМ: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.маркаГСМ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  остатокГСМ: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.остатокГСМ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  пунктНазнач: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.пунктНазнач.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пунктОтправ: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.пунктОтправ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расстояние: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.расстояние.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  транспСр: {
    descriptionKey: 'models.i-i-s-dgfb-путевой-лист.validations.транспСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПутевойЛистE', 'i-i-s-dgfb-путевой-лист', {
    номер: attr('Номер', { index: 0 }),
    выдатьТоплива: attr('Выдать топлива', { index: 1 }),
    датаВремя: attr('Дата время', { index: 2 }),
    пунктНазнач: attr('Пункт назнач', { index: 3 }),
    пунктОтправ: attr('Пункт отправ', { index: 4 }),
    расстояние: attr('Расстояние', { index: 5 }),
    маркаГСМ: attr('Марка ГСМ', { index: 6 }),
    остатокГСМ: attr('Остаток ГСМ', { index: 7 }),
    допущен: attr('Допущен', { index: 8 }),
    персонал: belongsTo('i-i-s-dgfb-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'фИО' }),
    транспСр: belongsTo('i-i-s-dgfb-трансп-ср', 'Трансп ср', {
      марка: attr('Марка', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'марка' })
  });

  modelClass.defineProjection('ПутевойЛистL', 'i-i-s-dgfb-путевой-лист', {
    номер: attr('Номер', { index: 0 }),
    выдатьТоплива: attr('Выдать топлива', { index: 1 }),
    датаВремя: attr('Дата время', { index: 2 }),
    пунктНазнач: attr('Пункт назнач', { index: 3 }),
    пунктОтправ: attr('Пункт отправ', { index: 4 }),
    расстояние: attr('Расстояние', { index: 5 }),
    маркаГСМ: attr('Марка ГСМ', { index: 6 }),
    остатокГСМ: attr('Остаток ГСМ', { index: 7 }),
    допущен: attr('Допущен', { index: 8 }),
    персонал: belongsTo('i-i-s-dgfb-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 9 })
    }, { index: -1, hidden: true }),
    транспСр: belongsTo('i-i-s-dgfb-трансп-ср', 'Марка', {
      марка: attr('Марка', { index: 10 })
    }, { index: -1, hidden: true })
  });
};

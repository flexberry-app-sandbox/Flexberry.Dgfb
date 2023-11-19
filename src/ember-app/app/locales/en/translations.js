import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDgfbДоговорLForm from './forms/i-i-s-dgfb-договор-l';
import IISDgfbДолжностиLForm from './forms/i-i-s-dgfb-должности-l';
import IISDgfbЖурналУчетаLForm from './forms/i-i-s-dgfb-журнал-учета-l';
import IISDgfbКонтрагентLForm from './forms/i-i-s-dgfb-контрагент-l';
import IISDgfbОрганизацияLForm from './forms/i-i-s-dgfb-организация-l';
import IISDgfbПерсоналLForm from './forms/i-i-s-dgfb-персонал-l';
import IISDgfbПутевойЛистLForm from './forms/i-i-s-dgfb-путевой-лист-l';
import IISDgfbРукОтдЛогLForm from './forms/i-i-s-dgfb-рук-отд-лог-l';
import IISDgfbТранспСрLForm from './forms/i-i-s-dgfb-трансп-ср-l';
import IISDgfbДоговорEForm from './forms/i-i-s-dgfb-договор-e';
import IISDgfbДолжностиEForm from './forms/i-i-s-dgfb-должности-e';
import IISDgfbЖурналУчетаEForm from './forms/i-i-s-dgfb-журнал-учета-e';
import IISDgfbКонтрагентEForm from './forms/i-i-s-dgfb-контрагент-e';
import IISDgfbОрганизацияEForm from './forms/i-i-s-dgfb-организация-e';
import IISDgfbПерсоналEForm from './forms/i-i-s-dgfb-персонал-e';
import IISDgfbПутевойЛистEForm from './forms/i-i-s-dgfb-путевой-лист-e';
import IISDgfbРукОтдЛогEForm from './forms/i-i-s-dgfb-рук-отд-лог-e';
import IISDgfbТранспСрEForm from './forms/i-i-s-dgfb-трансп-ср-e';
import IISDgfbДоговорModel from './models/i-i-s-dgfb-договор';
import IISDgfbДолжностиModel from './models/i-i-s-dgfb-должности';
import IISDgfbЖурналУчетаModel from './models/i-i-s-dgfb-журнал-учета';
import IISDgfbКонтрагентModel from './models/i-i-s-dgfb-контрагент';
import IISDgfbОрганизацияModel from './models/i-i-s-dgfb-организация';
import IISDgfbПерсоналModel from './models/i-i-s-dgfb-персонал';
import IISDgfbПутевойЛистModel from './models/i-i-s-dgfb-путевой-лист';
import IISDgfbРукОтдЛогModel from './models/i-i-s-dgfb-рук-отд-лог';
import IISDgfbТранспСрModel from './models/i-i-s-dgfb-трансп-ср';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dgfb-договор': IISDgfbДоговорModel,
    'i-i-s-dgfb-должности': IISDgfbДолжностиModel,
    'i-i-s-dgfb-журнал-учета': IISDgfbЖурналУчетаModel,
    'i-i-s-dgfb-контрагент': IISDgfbКонтрагентModel,
    'i-i-s-dgfb-организация': IISDgfbОрганизацияModel,
    'i-i-s-dgfb-персонал': IISDgfbПерсоналModel,
    'i-i-s-dgfb-путевой-лист': IISDgfbПутевойЛистModel,
    'i-i-s-dgfb-рук-отд-лог': IISDgfbРукОтдЛогModel,
    'i-i-s-dgfb-трансп-ср': IISDgfbТранспСрModel
  },

  'application-name': 'Dgfb',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Dgfb',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dgfb',
          title: 'Dgfb'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        dgfb: {
          caption: 'Dgfb',
          title: 'Dgfb',
          'i-i-s-dgfb-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-dgfb-трансп-ср-l': {
            caption: 'Трансп ср',
            title: ''
          },
          'i-i-s-dgfb-путевой-лист-l': {
            caption: 'Путевой лист',
            title: ''
          },
          'i-i-s-dgfb-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-dgfb-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-dgfb-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-dgfb-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-dgfb-журнал-учета-l': {
            caption: 'Журнал учета',
            title: ''
          },
          'i-i-s-dgfb-рук-отд-лог-l': {
            caption: 'Рук отд лог',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-dgfb-договор-l': IISDgfbДоговорLForm,
    'i-i-s-dgfb-должности-l': IISDgfbДолжностиLForm,
    'i-i-s-dgfb-журнал-учета-l': IISDgfbЖурналУчетаLForm,
    'i-i-s-dgfb-контрагент-l': IISDgfbКонтрагентLForm,
    'i-i-s-dgfb-организация-l': IISDgfbОрганизацияLForm,
    'i-i-s-dgfb-персонал-l': IISDgfbПерсоналLForm,
    'i-i-s-dgfb-путевой-лист-l': IISDgfbПутевойЛистLForm,
    'i-i-s-dgfb-рук-отд-лог-l': IISDgfbРукОтдЛогLForm,
    'i-i-s-dgfb-трансп-ср-l': IISDgfbТранспСрLForm,
    'i-i-s-dgfb-договор-e': IISDgfbДоговорEForm,
    'i-i-s-dgfb-должности-e': IISDgfbДолжностиEForm,
    'i-i-s-dgfb-журнал-учета-e': IISDgfbЖурналУчетаEForm,
    'i-i-s-dgfb-контрагент-e': IISDgfbКонтрагентEForm,
    'i-i-s-dgfb-организация-e': IISDgfbОрганизацияEForm,
    'i-i-s-dgfb-персонал-e': IISDgfbПерсоналEForm,
    'i-i-s-dgfb-путевой-лист-e': IISDgfbПутевойЛистEForm,
    'i-i-s-dgfb-рук-отд-лог-e': IISDgfbРукОтдЛогEForm,
    'i-i-s-dgfb-трансп-ср-e': IISDgfbТранспСрEForm
  },

});

export default translations;

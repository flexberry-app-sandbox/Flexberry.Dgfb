import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.dgfb.caption'),
          title: i18n.t('forms.application.sitemap.dgfb.title'),
          children: [{
            link: 'i-i-s-dgfb-персонал-l',
            caption: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-персонал-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-dgfb-трансп-ср-l',
            caption: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-трансп-ср-l.caption'),
            title: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-трансп-ср-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-dgfb-путевой-лист-l',
            caption: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-путевой-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-путевой-лист-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-dgfb-организация-l',
            caption: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-организация-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-dgfb-договор-l',
            caption: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-договор-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-dgfb-контрагент-l',
            caption: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-контрагент-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-dgfb-должности-l',
            caption: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-должности-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-dgfb-журнал-учета-l',
            caption: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-журнал-учета-l.caption'),
            title: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-журнал-учета-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-dgfb-рук-отд-лог-l',
            caption: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-рук-отд-лог-l.caption'),
            title: i18n.t('forms.application.sitemap.dgfb.i-i-s-dgfb-рук-отд-лог-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})
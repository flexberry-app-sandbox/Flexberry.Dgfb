import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЖурналУчетаMixin
} from '../mixins/regenerated/models/i-i-s-dgfb-журнал-учета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЖурналУчетаMixin, Validations, {
});

defineProjections(Model);

export default Model;

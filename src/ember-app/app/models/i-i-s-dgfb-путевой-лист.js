import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПутевойЛистMixin
} from '../mixins/regenerated/models/i-i-s-dgfb-путевой-лист';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПутевойЛистMixin, Validations, {
});

defineProjections(Model);

export default Model;

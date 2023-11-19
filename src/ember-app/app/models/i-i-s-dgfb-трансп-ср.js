import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТранспСрMixin
} from '../mixins/regenerated/models/i-i-s-dgfb-трансп-ср';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТранспСрMixin, Validations, {
});

defineProjections(Model);

export default Model;

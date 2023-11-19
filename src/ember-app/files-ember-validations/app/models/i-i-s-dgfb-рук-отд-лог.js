import {
  defineNamespace,
  defineProjections,
  Model as РукОтдЛогMixin
} from '../mixins/regenerated/models/i-i-s-dgfb-рук-отд-лог';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РукОтдЛогMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

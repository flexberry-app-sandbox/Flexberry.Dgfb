import {
  defineNamespace,
  defineProjections,
  Model as ТранспСрMixin
} from '../mixins/regenerated/models/i-i-s-dgfb-трансп-ср';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТранспСрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

import { Serializer as ТранспСрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dgfb-трансп-ср';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТранспСрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

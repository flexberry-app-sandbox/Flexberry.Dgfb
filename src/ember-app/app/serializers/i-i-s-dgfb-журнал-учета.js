import { Serializer as ЖурналУчетаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dgfb-журнал-учета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЖурналУчетаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

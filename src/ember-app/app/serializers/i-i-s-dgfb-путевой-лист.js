import { Serializer as ПутевойЛистSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dgfb-путевой-лист';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПутевойЛистSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

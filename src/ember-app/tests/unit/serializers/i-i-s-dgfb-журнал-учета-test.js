import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dgfb-журнал-учета', 'Unit | Serializer | i-i-s-dgfb-журнал-учета', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dgfb-журнал-учета',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-dgfb-договор',
    'model:i-i-s-dgfb-должности',
    'model:i-i-s-dgfb-журнал-учета',
    'model:i-i-s-dgfb-контрагент',
    'model:i-i-s-dgfb-организация',
    'model:i-i-s-dgfb-персонал',
    'model:i-i-s-dgfb-путевой-лист',
    'model:i-i-s-dgfb-рук-отд-лог',
    'model:i-i-s-dgfb-трансп-ср',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dgfb-персонал', 'Unit | Model | i-i-s-dgfb-персонал', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

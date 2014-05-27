/*
 * File: app/model/Record.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AI.model.Record', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.UuidGenerator'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            defaultValue: true,
            name: 'isLeaf',
            type: 'boolean'
        },
        {
            name: 'text'
        }
    ],

    idgen: {
        type: 'uuid'
    }
});
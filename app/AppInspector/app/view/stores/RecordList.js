/*
 * File: app/view/stores/RecordList.js
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

Ext.define('AI.view.stores.RecordList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.recordliststore',

    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Paging'
    ],

    title: 'Store Records',
    hideHeaders: true,
    store: 'Records',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    dataIndex: 'id',
                    text: 'Record ID',
                    flex: 1
                }
            ],
            viewConfig: {
                markDirty: false
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    itemId: 'mypagingtoolbar',
                    displayInfo: true,
                    store: 'Records'
                }
            ]
        });

        me.callParent(arguments);
    }

});
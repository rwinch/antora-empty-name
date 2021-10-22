'use strict'

module.exports.register = (pipeline, { playbook, config }) => {
    var contentAggregate = [];

    pipeline.on('contentAggregated',  args => {
        for (const c of args.contentAggregate) {
            //contentAggregate.push(Object.assign(new Object(), c));
            contentAggregate.push(c.files);
        }
    });

    pipeline.on('contentClassified', ( args ) => {
        out(contentAggregate);
    });
}

function out(args) {
    console.log(JSON.stringify(args, no_data, 2));
}


function no_data(key, value) {
    if (key == "data") {
        return value ? "__data__" : value;
    }
    return value;
}
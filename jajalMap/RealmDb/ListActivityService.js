import Realm from 'realm';
import ListActivityModel from './ListActivityModel';

let data = new Realm({
    schema: [{
        name: 'ListActivity',
        primaryKey: 'id',
        properties: {
            id: {type: 'string', indexed: true},
            title: 'string',
            activityKind: 'string',
            createdAt: 'date',
            distancePassing: 'string'
        }
    }]
});

let ListActtivityService = {
    findAll: data.objects('ListActivity').sorted('createdAt', true),
    save: function (activity) {
        data.write(() => {
            data.create('ListActivity', activity);
        })
    },
    delete: function (idActivity) {
        let items = data.objects('ListActivity').filtered('id == $0', idActivity);
        let item = items[0];
        data.delete(item);
    }
};
ListActtivityService.save(new ListActivityModel("title", "bike", "21km"));
ListActtivityService.save(new ListActivityModel("title1", "run", "10km"));
module.exports = ListActtivityService;
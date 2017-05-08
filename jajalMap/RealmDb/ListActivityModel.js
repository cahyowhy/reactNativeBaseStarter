import Utils from './Utils';
import LatLngModel from './LatLngModel';

export default class ListActivityModel {
    constructor(title, activityKind, distancePassing, LatLngModel) {
        this.id = Utils.guid();
        this.title = title;
        this.activityKind = activityKind;
        this.createdAt = new Date();
        this.distancePassing = distancePassing;
        this.LatLngModel = LatLngModel;
    }
}
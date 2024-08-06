import {  getActivatedDateById, getAllPharmacy, getAllPharmacyApproved, getAllPharmacySelectData, getAllPharmacyYearlyData, getChartDataByQuery} from "../DAO/pharmacyDao.js";


export function getPharmacy(req, res) {
    try {
        return getAllPharmacy(req, res);
    } catch (err) {
        return new Error(err);
    }
}

export function getPharmacyApproved(req, res) {
    try {
        return getAllPharmacyApproved(req, res);
    } catch (err) {
        return new Error(err);
    }
}

export function getPharmacyYearlyData(req, res) {
    try {
        return getAllPharmacyYearlyData(req, res);
    } catch (err) {
        return new Error(err);
    }
}
export function getPharamacySelectData(req, res) {
    try {
        return getAllPharmacySelectData(req, res);
    } catch (err) {
        return new Error(err);
    }
}

export function getPharamacyActivatedDate(req, res) {
    try {
        return getActivatedDateById(req, res);
    } catch (err) {
        return new Error(err);
    }
}
export function getChartData(req, res) {
    try {
        return getChartDataByQuery(req, res);
    } catch (err) {
        return new Error(err);
    }
}

export function getHealthCheck(req, res) {
    try {
        return res.status(200).send({ response: "Success", message: "Backend is connected" });
    } catch (err) {
        return new Error(err);
    }
}


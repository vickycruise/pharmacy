import express from "express";
const router = express.Router();
import { catchErrors } from "../handlers/errorHandler.js";
import { getChartData, getHealthCheck, getPharamacyActivatedDate, getPharamacySelectData, getPharmacy, getPharmacyApproved, getPharmacyYearlyData } from "../controllers/pharmacyController.js";

// Use catchErrors middleware to handle errors for async functions
router.route("/pharmacy").get(catchErrors(getPharmacy));
router.route("/pharmacy/approved").post(catchErrors(getPharmacyApproved));
router.route("/pharmacy/yearlyData").post(catchErrors(getPharmacyYearlyData));
router.route("/pharmacy/selectData").post(catchErrors(getPharamacySelectData));
router.route("/pharmacy/getActivatedDate").get(catchErrors(getPharamacyActivatedDate));
router.route("/pharmacy/chartData").post(catchErrors(getChartData));
router.route("/pharmacy/healthCheck").get(catchErrors(getHealthCheck));











export default router;


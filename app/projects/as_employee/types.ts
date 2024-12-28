import * as projectTS from "../types";
import * as companyTS from "../../companies/types";

export interface AsEmployeeProject
  extends projectTS.Project<projectTS.ProjectType.asEmployee> {
  employedBy: companyTS.employerCompanyTS.IDs;
}

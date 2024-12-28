import * as projectTS from "../types";
import * as employerCompanyTS from "../../companies/employer/types";

export interface AsEmployeeProject extends projectTS.Project {
  type: projectTS.ProjectType.asEmployee;
  employedBy: employerCompanyTS.IDs;
}

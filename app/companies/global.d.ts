export declare global {
  namespace companiesTS {
    /**
     * Enum representing different types of companies.
     *
     * @enum {string}
     * @property {string} SCHOOL - Represents an agency company type.
     * @property {string} SCHOOL - Represents a school company type.
     * @property {string} PRODUCT_COMPANY - Represents a company that develops its own products.
     * @property {string} STARTUP - Represents a startup company type.
     * @property {string} CORPORATE - Represents a big company.
     */
    enum CompanyType {
      AGENCY = "agency",
      PRODUCT_COMPANY = "product-company",
      SCHOOL = "school",
      STARTUP = "startup",
      CORPORATE = "corporate",
    }

    interface Company<T = string> {
      id: T;
      name: string;
      type: CompanyType;
      url: string;
    }
    type Companies = Company[];

    namespace customer {
      enum CustomerCompanyIDs {
        WEDART = "weDart",
        DIGITAL_HUB = "digital-hub",
      }

      interface CustomerCompany extends companiesTS.Company<IDs> {}
      type CustomerCompanies = CustomerCompany[];
    }

    namespace employer {
      enum IDs {
        DCI = "dci",
        TALIOX = "taliox",
      }
      interface EmployerCompany extends companiesTS.Company<IDs> {}
      type EmployerCompanies = EmployerCompany[];
    }
  }
}

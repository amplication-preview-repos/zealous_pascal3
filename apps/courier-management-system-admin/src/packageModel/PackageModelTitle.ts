import { PackageModel as TPackageModel } from "../api/packageModel/PackageModel";

export const PACKAGEMODEL_TITLE_FIELD = "id";

export const PackageModelTitle = (record: TPackageModel): string => {
  return record.id?.toString() || String(record.id);
};

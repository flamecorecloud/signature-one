import { lazy } from "react";

export const PathRoutes = {
  "features": lazy(() => import("./features/path")),
  "about": lazy(() => import("./about/path")),
};

export const PathComponents = {
  // Document
  "features/converter/pdf-to-sign": lazy(() => import("./features/converter/pdf-to-sign/view")),

  "features/converter/word-to-pdf": lazy(() => import("./features/converter/word-to-pdf/view")),
  "features/converter/txt-to-pdf": lazy(() => import("./features/converter/txt-to-pdf/view")),
  "features/converter/html-to-pdf": lazy(() => import("./features/converter/html-to-pdf/view")),
  "features/converter/rtf-to-pdf": lazy(() => import("./features/converter/rtf-to-pdf/view")),
  "features/converter/odt-to-pdf": lazy(() => import("./features/converter/odt-to-pdf/view")),
  "features/converter/html-to-docx": lazy(() => import("./features/converter/html-to-docx/view")),
  "features/converter/txt-to-odt": lazy(() => import("./features/converter/txt-to-odt/view")),
  "features/converter/word-to-odt": lazy(() => import("./features/converter/word-to-odt/view")),
  "features/converter/odt-to-word": lazy(() => import("./features/converter/odt-to-word/view")),

  "features/converter/excel-to-pdf": lazy(() => import("./features/converter/excel-to-pdf/view")),
  "features/converter/ods-to-pdf": lazy(() => import("./features/converter/ods-to-pdf/view")),
  "features/converter/csv-to-excel": lazy(() => import("./features/converter/csv-to-excel/view")),
  "features/converter/excel-to-ods": lazy(() => import("./features/converter/excel-to-ods/view")),
  "features/converter/ods-to-excel": lazy(() => import("./features/converter/ods-to-excel/view")),
  "features/converter/csv-to-ods": lazy(() => import("./features/converter/csv-to-ods/view")),

  "features/converter/ppt-to-pdf": lazy(() => import("./features/converter/ppt-to-pdf/view")),
  "features/converter/odp-to-pdf": lazy(() => import("./features/converter/odp-to-pdf/view")),
  "features/converter/ppt-to-odp": lazy(() => import("./features/converter/ppt-to-odp/view")),
  "features/converter/odp-to-ppt": lazy(() => import("./features/converter/odp-to-ppt/view")),

  "features/converter/pdf-to-word": lazy(() => import("./features/converter/pdf-to-word/view")),
  "features/converter/pdf-to-excel": lazy(() => import("./features/converter/pdf-to-excel/view")),
  "features/converter/pdf-to-ppt": lazy(() => import("./features/converter/pdf-to-ppt/view")),
  "features/converter/pdf-to-image": lazy(() => import("./features/converter/pdf-to-image/view")),

  "about/general/home": lazy(() => import("./about/general/home/view")),
  "about/general/donate": lazy(() => import("./about/general/donate/view")),
};

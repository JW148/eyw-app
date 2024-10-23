import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("activity"),
      S.documentTypeListItem("resource"),
      S.documentTypeListItem("training"),
      S.divider(),
      S.documentTypeListItem("gweithgaredd"),
      S.documentTypeListItem("adnodd"),
      S.documentTypeListItem("hyfforddi"),
    ]);

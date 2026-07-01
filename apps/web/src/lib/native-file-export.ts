import { save } from "@tauri-apps/plugin-dialog";
import { writeTextFile } from "@tauri-apps/plugin-fs";

import { isDesktopMode } from "@/lib/runtime";

export type NativeTextFileExportOptions = {
  defaultFilename: string;
  contents: string;
  title?: string;
  filters?: Array<{
    name: string;
    extensions: string[];
  }>;
};

export async function exportTextFileNatively({
  defaultFilename,
  contents,
  title = "Save file",
  filters = [
    {
      name: "Text file",
      extensions: ["txt"],
    },
  ],
}: NativeTextFileExportOptions) {
  if (!isDesktopMode()) {
    throw new Error("Native file export is only available in desktop mode.");
  }

  const filePath = await save({
    title,
    defaultPath: defaultFilename,
    filters,
  });

  if (!filePath) {
    return {
      saved: false,
      path: null,
    };
  }

  await writeTextFile(filePath, contents);

  return {
    saved: true,
    path: filePath,
  };
}

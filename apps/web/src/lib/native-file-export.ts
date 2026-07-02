import { save } from "@tauri-apps/plugin-dialog";
import { writeTextFile } from "@tauri-apps/plugin-fs";

import { isDesktopMode } from "@/lib/runtime";

import { writeFile } from "@tauri-apps/plugin-fs";


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
export type NativeBinaryFileExportOptions = {
  defaultFilename: string;
  contents: ArrayBuffer;
  title?: string;
  filters?: Array<{
    name: string;
    extensions: string[];
  }>;
};

export async function exportBinaryFileNatively({
  defaultFilename,
  contents,
  title = "Save file",
  filters = [
    {
      name: "Binary file",
      extensions: ["bin"],
    },
  ],
}: NativeBinaryFileExportOptions) {
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

  await writeFile(filePath, new Uint8Array(contents));

  return {
    saved: true,
    path: filePath,
  };
}

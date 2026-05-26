/// <reference types="vite/client" />
/**
 * Utility to retrieve image URLs for a given project folder.
 * Vite's `import.meta.globEager` requires a static glob pattern, therefore we
 * import **all** images under `src/assets/images/projects/**` at build time and
 * filter them at runtime based on the requested `folder` name.
 *
 * This works in both development (`npm run dev`) and production builds because
 * Vite replaces the glob with static import statements.
 */
export function getProjectImages(folder: string): string[] {
  // 1️⃣ Import all images from every project// @ts-ignore: Vite injects glob with eager option
  const srcModules = import.meta.glob('../../src/assets/images/projects/**/*.{jpg,jpeg,png,webp,gif}', { eager: true });
  const publicModules = import.meta.glob('../../public/assets/images/projects/**/*.{jpg,jpeg,png,webp,gif}', { eager: true });
  const modules = { ...srcModules, ...publicModules };

  // 2️⃣ Build a map: folder name -> array of image URLs.
  const folderMap: Record<string, string[]> = {};
  for (const [path, mod] of Object.entries(modules)) {
    // Example path: "../assets/images/projects/luxe_page/1.jpg"
    const parts = path.split('/');
    const projIdx = parts.findIndex(p => p === 'projects');
    if (projIdx === -1 || projIdx + 1 >= parts.length) continue;
    const folderName = parts[projIdx + 1];
    const url = (mod as any).default as string;
    if (!folderMap[folderName]) folderMap[folderName] = [];
    folderMap[folderName].push(url);
  }

  // 3️⃣ Retrieve URLs for the requested folder (or empty array if none).
  const rawUrls = folderMap[folder] ?? [];

  // 4️⃣ Sort numerically by filename (e.g., 1.jpg, 2.jpg, 10.jpg).
  const getNum = (url: string) => {
    const filename = url.substring(url.lastIndexOf('/') + 1);
    const name = filename.split('.')[0];
    const match = name.match(/^\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };
  rawUrls.sort((a, b) => getNum(a) - getNum(b));

  return rawUrls;
}

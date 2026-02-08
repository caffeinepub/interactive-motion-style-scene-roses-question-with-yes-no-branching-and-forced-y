/**
 * Asset diagnostics utility to preflight-check critical static assets
 * and log clear warnings for any failures during deployment validation.
 */

const CRITICAL_ASSETS = [
  '/assets/generated/valentine-background.dim_1920x1080.jpg',
  '/assets/generated/floating-heart-transparent.dim_64x64.png',
  '/assets/generated/golden-sparkle-transparent.dim_32x32.png',
  '/assets/generated/rose-petals-transparent.dim_128x128.png',
  '/assets/generated/white-lilies-transparent.dim_128x128.png',
  '/assets/generated/white-tulips-transparent.dim_128x128.png',
];

export async function checkAssets(): Promise<void> {
  console.log('🔍 Running asset diagnostics...');
  
  const results = await Promise.allSettled(
    CRITICAL_ASSETS.map(async (assetPath) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(assetPath);
        img.onerror = () => reject(assetPath);
        img.src = assetPath;
      });
    })
  );

  const failed: string[] = [];
  const succeeded: string[] = [];

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      succeeded.push(result.value);
    } else {
      failed.push(CRITICAL_ASSETS[index]);
    }
  });

  if (succeeded.length > 0) {
    console.log(`✅ Successfully loaded ${succeeded.length} asset(s)`);
  }

  if (failed.length > 0) {
    console.warn('⚠️ Failed to load the following assets:');
    failed.forEach((asset) => {
      console.warn(`   ❌ ${asset}`);
    });
    console.warn('The app will continue with graceful fallbacks.');
  } else {
    console.log('✅ All critical assets loaded successfully');
  }
}

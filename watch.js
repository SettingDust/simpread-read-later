require('esbuild')
  .build({
    entryPoints: ['index.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    platform: 'node',
    target: 'node16',
    sourcemap: true,
    watch: true
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
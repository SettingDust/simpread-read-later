require('esbuild')
  .build({
    entryPoints: ['index.ts'],
    bundle: true,
    outfile: 'index.js',
    platform: 'node',
    target: 'node16'
  })
  .catch((err) => {
      console.error(err)
      process.exit(1)
  })

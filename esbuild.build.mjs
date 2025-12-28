import esbuild from 'esbuild'

//
await esbuild.build({
  entryPoints: [
    "src/index.js",
  ],
  outdir: 'lib',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2018',
  sourcemap: false,
  minify: true,
})

console.log('✅ build complete')

# App-boilerplate-P.R.GA.GP

Most of the reasoning behind this boilerplate derives from this <a href="https://github.com/l-palermo/App-boilerplate-Y.W.L.DO.C">previous work</a> part of the same series of exercise.

PNPM

Pnpm is an alternative tool to yarn and npm that declare to be faster than both its competitors. This benchmark is an example of installation and update of packages in a react app. <a href='https://github.com/pnpm/benchmarks-of-javascript-package-managers'>Benchmark</a>.

Pnpm keeps the packages in a global store on the local machine, then it creates a hard link from it instead of copying the packages so for each version of a module, there is only ever one copy kept on disk. 
Npm and Yarn both have a deep dependency tree with packages copied several times and the algorithm to flatten the d tree is complex and burn resources. Pnpm has a flat dependency structure and uses symlinks to group them together, this allows for better use of resources and higher computational speed.
The duplicated packages often force the use of larger CI/CD resources and time.
The package JSON structure created with `pnpm init` is slightly different from the one created with NPM or YARN. 

---


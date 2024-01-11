# Test project to reproduce issue in mocha

Reproducing bug described in mochajs/mocha#5074

## Steps to reproduce
run `pnpm install` and then `pnpm test`

## Expected behavior
Tests should fail with error "TypeError: Cannot convert object to primitive value"

## Actual behavior

prints out:
```
> mocha

mocha inspect [spec..]

Run tests with Mocha

Rules & Behavior
      --allow-uncaught       Allow uncaught errors to propagate        [boolean]
  -A, --async-only           Require all tests to use a callback (async) or
                             return a Promise                          [boolean]
  -b, --bail                 Abort ("bail") after first test failure   [boolean]
      --check-leaks          Check for global variable leaks           [boolean]
      --delay                Delay initial execution of root suite     [boolean]
      --dry-run              Report tests without executing them       [boolean]
      --exit                 Force Mocha to quit after tests complete  [boolean]
      --fail-zero            Fail test run if no test(s) encountered   [boolean]
      --forbid-only          Fail if exclusive test(s) encountered     [boolean]
      --forbid-pending       Fail if pending test(s) encountered       [boolean]
      --global, --globals    List of allowed global variables            [array]
  -j, --jobs                 Number of concurrent jobs for --parallel; use 1 to
                             run in serial
                                   [number] [default: (number of CPU cores - 1)]
  -p, --parallel             Run tests in parallel                     [boolean]
      --retries              Retry failed tests this many times         [number]
  -s, --slow                 Specify "slow" test threshold (in milliseconds)
                                                          [string] [default: 75]
  -t, --timeout, --timeouts  Specify test timeout threshold (in milliseconds)
                                                        [string] [default: 2000]
  -u, --ui                   Specify user interface    [string] [default: "bdd"]

Reporting & Output
  -c, --color, --colors                     Force-enable color output  [boolean]
      --diff                                Show diff on failure
                                                       [boolean] [default: true]
      --full-trace                          Display full stack traces  [boolean]
      --inline-diffs                        Display actual/expected differences
                                            inline within each string  [boolean]
  -R, --reporter                            Specify reporter to use
                                                      [string] [default: "spec"]
  -O, --reporter-option,                    Reporter-specific options
  --reporter-options                        (<k=v,[k1=v1,..]>)           [array]

Configuration
      --config       Path to config file   [string] [default: (nearest rc file)]
  -n, --node-option  Node or V8 option (no leading "--")                 [array]
      --package      Path to package.json for config                    [string]

File Handling
      --extension          File extension(s) to load
                                           [array] [default: ["js","cjs","mjs"]]
      --file               Specify file(s) to be loaded prior to root suite
                           execution                   [array] [default: (none)]
      --ignore, --exclude  Ignore file(s) or glob pattern(s)
                                                       [array] [default: (none)]
      --recursive          Look for tests in subdirectories            [boolean]
  -r, --require            Require module              [array] [default: (none)]
  -S, --sort               Sort test files                             [boolean]
  -w, --watch              Watch files in the current working directory for
                           changes                                     [boolean]
      --watch-files        List of paths or globs to watch               [array]
      --watch-ignore       List of paths or globs to exclude from watching
                                      [array] [default: ["node_modules",".git"]]

Test Filters
  -f, --fgrep   Only run tests containing this string                   [string]
  -g, --grep    Only run tests matching this string or regexp           [string]
  -i, --invert  Inverts --grep and --fgrep matches                     [boolean]

Positional Arguments
  spec  One or more files, directories, or globs to test
                                                     [array] [default: ["test"]]

Other Options
  -h, --help             Show usage information & exit                 [boolean]
  -V, --version          Show version number & exit                    [boolean]
      --list-interfaces  List built-in user interfaces & exit          [boolean]
      --list-reporters   List built-in reporters & exit                [boolean]

✖ ERROR: null
 ELIFECYCLE  Test failed. See above for more details.
```

# Debugging test
Run the target `test:with-debug` to see the debug log. It will print out:
```
  mocha:cli:cli caught error sometime before command handler: TypeError: Cannot convert object to primitive value
  mocha:cli:cli     at exports.handler (/home/stalet/dev/test/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/cli/run.js:372:65) +674ms
```

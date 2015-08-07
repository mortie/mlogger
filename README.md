# mLogger

mLogger is a very simple logging library for node.js.

## Installation

Install like any other NPM library:

```
npm install --save logger
```

## Usage

```
var log = require("mlogger");
```

Logger has 4 methods for logging:

```
log.info("foo");   // yyyy/mm/dd HH:MM:SS INFO: foo
log.notice("foo"); // yyyy/mm/dd HH:MM:SS NOTICE: foo
log.warn("foo");   // yyyy/mm/dd HH:MM:SS WARNING: foo
log.error("foo");  // yyyy/mm/dd HH:MM:SS ERROR: foo
log.die("foo");    // yyyy/mm/dd HH:MM:SS ERROR: foo
```

After log.die, the process will immediately exit.

If an error object is passed instead of a string, a stack trace will be printed, like this:

```
log.notice(new Error("foo"));

// yyyy/mm/dd HH:MM:SS NOTICE: foo - stack trace:
// Trace: [Error: foo]
//     <stack trace>
```

To set a different color theme, use `setTheme`:

```
log.setTheme({
	timestamp: "green"
})
```

The available properties for setTheme is:

* timestamp: timestamp, default: "blue"
* level_0: logger.info, default: "grey"
* level_1: logger.notice, default: "yellow"
* level_2: logger.warn, default: "red"
* level_3: logger.die/logger.error, default: ["bold", "red"]

The available values for themes are listed here: https://npmjs.com/package/colors

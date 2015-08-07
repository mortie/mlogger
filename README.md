# Logger

Logger is a very simple logging library for node.js.

## Installation

Install like any other NPM library:

```
npm install --save logger
```

## Usage

```
var logger = require("logger");
```

Logger has 4 methods for logging:

```
logger.info("foo");   // yyyy/mm/dd HH:MM:SS INFO: foo
logger.notice("foo"); // yyyy/mm/dd HH:MM:SS NOTICE: foo
logger.warn("foo");   // yyyy/mm/dd HH:MM:SS WARNING: foo
logger.die("foo");    // yyyy/mm/dd HH:MM:SS ERROR: foo
```

After logger.die, the process will immediately exit.

If an error object is passed instead of a string, a stack trace will be printed, like this:

```
logger.notice(new Error("foo"));

// yyyy/mm/dd HH:MM:SS NOTICE: foo - stack trace:
// Trace: [Error: foo]
//     <stack trace>
```

To set a different color theme, use `setTheme`:

```
logger.setTheme({
	timestamp: "green"
})
```

The available properties for setTheme is:

* timestamp: timestamp, default: "blue"
* level_0: logger.info, default: "grey"
* level_1: logger.notice, default: "yellow"
* level_2: logger.warn, default: "red"
* level_3: logger.die, default: ["bold", "red"]

The available values for themes are listed here: npmjs.com/package/colors
